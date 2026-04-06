
from dotenv import load_dotenv

from rest_framework.decorators import api_view
from rest_framework.response import Response
import PyPDF2
import docx
from .models import JobRole
from groq import Groq
import os

load_dotenv()
client = Groq(api_key=os.getenv("GROQ_API_KEY"))  # paste your key
from django.contrib.auth import authenticate
from rest_framework.decorators import api_view
from rest_framework.response import Response

@api_view(['POST'])
def login_user(request):
    username = request.data.get("username")
    password = request.data.get("password")

    user = authenticate(username=username, password=password)

    if user:
        return Response({
            "message": "Login successful",
            "username": user.username
        })
    else:
        return Response({
            "error": "Invalid credentials"
        }, status=400)
    

from django.contrib.auth.models import User

@api_view(['POST'])
def signup_user(request):
    username = request.data.get("username")
    password = request.data.get("password")

    if User.objects.filter(username=username).exists():
        return Response({"error": "User already exists"}, status=400)

    user = User.objects.create_user(username=username, password=password)

    return Response({"message": "User created successfully"})    

# ---------------- TEST API ----------------
@api_view(['GET'])
def test_api(request):
    return Response({"message": "Backend working!"})


# ---------------- TEXT EXTRACTION ----------------
def extract_pdf(file):
    reader = PyPDF2.PdfReader(file)
    text = ""

    for page in reader.pages:
        page_text = page.extract_text()
        if page_text:
            text += page_text

    return text


def extract_docx(file):
    doc = docx.Document(file)
    text = ""

    for para in doc.paragraphs:
        text += para.text

    return text


# ---------------- SKILL EXTRACTION ----------------
def extract_skills(text):
    skills_list = [
        "python", "java", "react", "django",
        "sql", "html", "css", "javascript"
    ]

    found = []
    text = text.lower()

    for skill in skills_list:
        if skill in text:
            found.append(skill)

    return list(set(found))


# ---------------- SCORE LOGIC ----------------
def calculate_score(skills):
    if len(skills) >= 6:
        return 90
    elif len(skills) >= 4:
        return 70
    elif len(skills) >= 2:
        return 50
    else:
        return 30


# ---------------- JOB RECOMMENDATION ----------------
#from .models import JobRole

def job_recommendation(user_skills):
    jobs = []

    job_roles = JobRole.objects.all()

    for job in job_roles:
        required_skills = job.skills.lower().split(",")

        match_count = len(set(user_skills) & set(required_skills))

        if match_count > 0:
            jobs.append(job.title)

    if not jobs:
        jobs.append("Fresher / Internship Roles")

    return jobs

def generate_feedback(skills, score):
    prompt = f"""
    Analyze this resume:

    Skills: {skills}
    Score: {score}/100

    Give output in this EXACT format:

   Strengths:
   - point 1
   - point 2

   Weaknesses:
   - point 1
   - point 2

   Suggestions:
   - point 1
   - point 2

   Keep it short, clean, and professional.
   """
    # prompt = f"""
    # Analyze this resume:

    # Skills: {skills}
    # Score: {score}/100

    # Give:
    # 1. Strengths
    # 2. Weaknesses
    # 3. Suggestions to improve
    # Keep it short and simple.
    # """

    response = client.chat.completions.create(
        model="llama-3.1-8b-instant",
        messages=[{"role": "user", "content": prompt}]
    )

    return response.choices[0].message.content


# ---------------- MAIN API ----------------
@api_view(['POST'])
def upload_resume(request):
    file = request.FILES.get('resume')

    if not file:
        return Response({"error": "No file uploaded"}, status=400)

    # Extract text
    if file.name.endswith('.pdf'):
        text = extract_pdf(file)
    elif file.name.endswith('.docx'):
        text = extract_docx(file)
    else:
        return Response({"error": "Unsupported file format"}, status=400)

    if not text:
        return Response({"error": "Could not extract text"}, status=400)

    # Process
    skills = extract_skills(text)
    score = calculate_score(skills)
    jobs = job_recommendation(skills)
    feedback = generate_feedback(skills, score)

    return Response({
        "skills": skills,
        "score": score,
        "jobs": jobs,
        "feedback": feedback,
        "message": "Resume analyzed successfully"
    })