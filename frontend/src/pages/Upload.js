
// import Navbar from "../components/Navbar";
// import { useState } from "react";
// import axios from "axios";

// function Upload() {
//   const [file, setFile] = useState(null);
//   const [result, setResult] = useState(null);
//   const [loading, setLoading] = useState(false);

//   const handleFileChange = (e) => {
//     setFile(e.target.files[0]);
//   };

//   const handleUpload = async () => {
//     if (!file) {
//       alert("Please select a file");
//       return;
//     }

//     const formData = new FormData();
//     formData.append("resume", file);

//     try {
//       setLoading(true);

//       const response = await axios.post(
//         "http://127.0.0.1:8000/api/upload/",
//         formData
//       );

//       setResult(response.data);

//       // ✅ SAVE DATA FOR DASHBOARD
//       localStorage.setItem("resumeData", JSON.stringify(response.data));

//     } catch (error) {
//       console.error(error);
//       alert("Upload failed");
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div>
//       <Navbar />

//       <div style={styles.container}>
//         <h2>Upload Your Resume</h2>
//         <p>We’ll analyze your resume and provide personalized job recommendations</p>

//         <div style={styles.uploadBox}>
//           <input
//             type="file"
//             accept=".pdf,.doc,.docx"
//             onChange={handleFileChange}
//           />

//           <p>{file ? `Selected: ${file.name}` : "Upload your resume"}</p>

//           <small>PDF, DOCX up to 10MB</small>
//         </div>

//         <button style={styles.button} onClick={handleUpload}>
//           {loading ? "Analyzing..." : "Analyze Resume"}
//         </button>

//         {/* RESULT */}
//         {result && (
//           <div style={styles.result}>
//             <h3>Resume Score: {result.score}/100</h3>

//             {/* 🔥 SCORE BAR */}
//             <div style={styles.progressContainer}>
//               <div
//                 style={{
//                   ...styles.progressBar,
//                   width: `${result.score}%`
//                 }}
//               ></div>
//             </div>

//             <h3>Extracted Skills:</h3>
//             <ul style={styles.list}>
//               {result.skills.map((skill, index) => (
//                 <li key={index}>{skill}</li>
//               ))}
//             </ul>

//             <h3>Recommended Jobs:</h3>
//             <ul style={styles.list}>
//               {result.jobs.map((job, index) => (
//                 <li key={index}>{job}</li>
//               ))}
//             </ul>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// }

// const styles = {
//   container: {
//     padding: "40px",
//     textAlign: "center",
//     background: "#f5f7fb",
//     minHeight: "100vh"
//   },

//   uploadBox: {
//     border: "2px dashed #ccc",
//     borderRadius: "12px",
//     padding: "40px",
//     margin: "30px auto",
//     width: "50%",
//     background: "#ffffff",
//     boxShadow: "0 4px 12px rgba(0,0,0,0.05)"
//   },

//   button: {
//     padding: "12px 30px",
//     background: "linear-gradient(135deg, #4f6ef7, #6c8cff)",
//     color: "white",
//     border: "none",
//     borderRadius: "8px",
//     fontSize: "16px",
//     cursor: "pointer",
//     marginTop: "10px"
//   },

//   result: {
//     marginTop: "30px",
//     background: "#ffffff",
//     padding: "25px",
//     borderRadius: "12px",
//     width: "50%",
//     margin: "30px auto",
//     boxShadow: "0 4px 12px rgba(0,0,0,0.08)",
//     textAlign: "left"
//   },

//   progressContainer: {
//     width: "100%",
//     height: "10px",
//     background: "#eee",
//     borderRadius: "10px",
//     overflow: "hidden",
//     marginBottom: "20px"
//   },

//   progressBar: {
//     height: "100%",
//     background: "#4f6ef7"
//   },

//   list: {
//     listStylePosition: "inside",
//     marginBottom: "20px"
//   }
// };

// export default Upload;

import Navbar from "../components/Navbar";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Upload() {
  const [file, setFile] = useState(null);
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate(); // ✅ NEW

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleUpload = async () => {
    if (!file) {
      alert("Please select a file");
      return;
    }

    const formData = new FormData();
    formData.append("resume", file);

    try {
      setLoading(true);

      const response = await axios.post(
        "http://127.0.0.1:8000/api/upload/",
        formData
      );

      setResult(response.data);

      // ✅ Save globally
      localStorage.setItem("resumeData", JSON.stringify(response.data));

      // ✅ AUTO REDIRECT
      setTimeout(() => {
        navigate("/dashboard");
      }, 1000);

    } catch (error) {
      console.error(error);
      alert("Upload failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <Navbar />

      <div style={styles.container}>
        <h2>Upload Your Resume</h2>
        <p>We’ll analyze your resume and provide personalized insights</p>

        <div style={styles.uploadBox}>
          <input type="file" accept=".pdf,.doc,.docx" onChange={handleFileChange} />
          <p>{file ? `Selected: ${file.name}` : "Upload your resume"}</p>
          <small>PDF, DOCX up to 10MB</small>
        </div>

        <button style={styles.button} onClick={handleUpload}>
          {loading ? "Analyzing..." : "Analyze Resume"}
        </button>
      </div>
    </div>
  );
}

const styles = {
  container: {
    padding: "40px",
    textAlign: "center",
    background: "#d4d8df",
    minHeight: "100vh"
  },
  uploadBox: {
    border: "2px dashed #ccc",
    borderRadius: "12px",
    padding: "40px",
    margin: "30px auto",
    width: "50%",
    background: "#fff",
    boxShadow: "0 4px 12px rgba(0,0,0,0.05)"
  },
  button: {
    padding: "12px 30px",
    background: "linear-gradient(135deg, #4f6ef7, #6c8cff)",
    color: "white",
    border: "none",
    borderRadius: "8px",
    fontSize: "16px",
    cursor: "pointer"
  }
};

export default Upload;