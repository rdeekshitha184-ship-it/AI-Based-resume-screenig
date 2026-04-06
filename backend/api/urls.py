from django.urls import path
from .views import login_user, signup_user, test_api, upload_resume

urlpatterns = [
    path('test/', test_api),
    path('login/', login_user),
    path('signup/', signup_user),
    path('upload/', upload_resume),
]