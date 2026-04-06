// import Navbar from "../components/Navbar";
// import { useEffect, useState } from "react";

// function Dashboard() {
//   const [data, setData] = useState(null);

//   useEffect(() => {
//     const stored = localStorage.getItem("resumeData");
//     if (stored) setData(JSON.parse(stored));
//   }, []);

//   return (
//     <div>
//       <Navbar />

//       <div style={styles.container}>
//         <h2>Dashboard</h2>
//         <p>Your personalized career insights</p>

//         {data ? (
//           <>
//             {/* TOP CARDS */}
//             <div style={styles.grid}>
//               <Card title="Resume Score" value={data.score} />
//               <Card title="Jobs Matched" value={data.jobs.length} />
//               <Card title="Skills Found" value={data.skills.length} />
//             </div>

//             {/* SCORE BAR */}
//             <div style={styles.section}>
//               <h3>Score Overview</h3>
//               <div style={styles.progressContainer}>
//                 <div
//                   style={{
//                     ...styles.progressBar,
//                     width: `${data.score}%`
//                   }}
//                 />
//               </div>
//             </div>

//             {/* JOBS */}
//             <div style={styles.section}>
//               <h3>Recommended Jobs</h3>
//               {data.jobs.map((job, i) => (
//                 <div
//                   key={i}
//                   style={styles.jobCard}
//                   onMouseEnter={(e) =>
//                     (e.currentTarget.style.background = "#dbeafe")
//                   }
//                   onMouseLeave={(e) =>
//                     (e.currentTarget.style.background = "#f1f5ff")
//                   }
//                 >
//                   {job}
//                 </div>
//               ))}
//             </div>

//             {/* SKILLS */}
//             <div style={styles.section}>
//               <h3>Your Skills</h3>
//               <div>
//                 {data.skills.map((skill, i) => (
//                   <span
//                     key={i}
//                     style={styles.skillBadge}
//                     onMouseEnter={(e) =>
//                       (e.currentTarget.style.background = "#22c55e")
//                     }
//                     onMouseLeave={(e) =>
//                       (e.currentTarget.style.background = "#4f6ef7")
//                     }
//                   >
//                     {skill}
//                   </span>
//                 ))}
//               </div>
//             </div>

//             {/* AI FEEDBACK */}
//             <div style={styles.section}>
//               <h3>AI Feedback</h3>

//               <div style={styles.feedbackBox}>
//                 {data.feedback.split("\n").map((line, index) => {
//                   if (line.toLowerCase().includes("strength")) {
//                     return <h4 key={index}>💪 Strengths</h4>;
//                   }
//                   if (line.toLowerCase().includes("weakness")) {
//                     return <h4 key={index}>⚠️ Weaknesses</h4>;
//                   }
//                   if (line.toLowerCase().includes("suggest")) {
//                     return <h4 key={index}>🚀 Suggestions</h4>;
//                   }

//                   return <p key={index}>{line}</p>;
//                 })}
//               </div>
//             </div>
//           </>
//         ) : (
//           <p>No data yet. Upload resume first.</p>
//         )}
//       </div>
//     </div>
//   );
// }

// /* CARD COMPONENT */
// const Card = ({ title, value }) => (
//   <div
//     style={styles.card}
//     onMouseEnter={(e) => {
//       e.currentTarget.style.transform = "translateY(-5px) scale(1.05)";
//     }}
//     onMouseLeave={(e) => {
//       e.currentTarget.style.transform = "scale(1)";
//     }}
//   >
//     <h3>{title}</h3>
//     <h1>{value}</h1>
//   </div>
// );

// const styles = {
//   container: {
//     padding: "30px",
//     minHeight: "100vh",
//     background: "linear-gradient(135deg, #c1c3cb, #f8fafc)"
//   },

//   grid: {
//     display: "grid",
//     gridTemplateColumns: "repeat(3, 1fr)",
//     gap: "20px",
//     marginTop: "20px"
//   },

//   card: {
//     background: "linear-gradient(135deg, #4f6ef7, #6c8cff)",
//     color: "white",
//     padding: "25px",
//     borderRadius: "15px",
//     textAlign: "center",
//     boxShadow: "0 10px 25px rgba(79,110,247,0.3)",
//     transition: "0.3s ease"
//   },

//   section: {
//     marginTop: "30px",
//     padding: "25px",
//     borderRadius: "15px",
//     background: "#8c8e96",
//     boxShadow: "0 8px 20px rgba(0,0,0,0.08)"
//   },

//   jobCard: {
//     padding: "12px",
//     marginBottom: "10px",
//     borderRadius: "10px",
//     background: "#f1f5ff",
//     transition: "0.3s",
//     cursor: "pointer"
//   },

//   skillBadge: {
//     display: "inline-block",
//     padding: "8px 14px",
//     margin: "6px",
//     background: "#4f6ef7",
//     color: "white",
//     borderRadius: "20px",
//     fontWeight: "500",
//     transition: "0.3s",
//     cursor: "pointer"
//   },

//   progressContainer: {
//     height: "12px",
//     background: "#e5e7eb",
//     borderRadius: "10px",
//     overflow: "hidden"
//   },

//   progressBar: {
//     height: "100%",
//     background: "linear-gradient(90deg, #4f6ef7, #22c55e)"
//   },

//   feedbackBox: {
//     marginTop: "15px",
//     padding: "15px",
//     borderRadius: "10px",
//     background: "#f9fafb",
//     lineHeight: "1.7"
//   }
// };

// export default Dashboard;

import Navbar from "../components/Navbar";
import { useEffect, useState } from "react";

function Dashboard() {
  const [data, setData] = useState(null);

  useEffect(() => {
    const user = localStorage.getItem("user");
    if (!user) {
        window.location.href = "/login";
    }
    const stored = localStorage.getItem("resumeData");
    if (stored) setData(JSON.parse(stored));
  }, []);

  return (
    <div>
      <Navbar />

      <div style={styles.container}>
        <h2>Dashboard</h2>
        <p>Your personalized career insights</p>

        {data ? (
          <>
            {/* TOP CARDS */}
            <div style={styles.grid}>
              <Card title="Resume Score" value={data.score} />
              <Card title="Jobs Matched" value={data.jobs.length} />
              <Card title="Skills Found" value={data.skills.length} />
            </div>

            {/* SCORE BAR */}
            <div style={styles.section}>
              <h3>Score Overview</h3>
              <div style={styles.progressContainer}>
                <div
                  style={{
                    ...styles.progressBar,
                    width: `${data.score}%`
                  }}
                />
              </div>
            </div>

            {/* JOBS */}
            <div style={styles.section}>
              <h3>Recommended Jobs</h3>
              {data.jobs.map((job, i) => (
                <div
                  key={i}
                  style={styles.jobCard}
                  onMouseEnter={(e) =>
                    (e.currentTarget.style.background = "#dbeafe")
                  }
                  onMouseLeave={(e) =>
                    (e.currentTarget.style.background = "#eef2ff")
                  }
                >
                  {job}
                </div>
              ))}
            </div>

            {/* SKILLS */}
            <div style={styles.section}>
              <h3>Your Skills</h3>
              <div>
                {data.skills.map((skill, i) => (
                  <span
                    key={i}
                    style={styles.skillBadge}
                    onMouseEnter={(e) =>
                      (e.currentTarget.style.background =
                        "linear-gradient(135deg, #22c55e, #16a34a)")
                    }
                    onMouseLeave={(e) =>
                      (e.currentTarget.style.background =
                        "linear-gradient(135deg, #4f6ef7, #6c8cff)")
                    }
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* AI FEEDBACK */}
            <div style={styles.section}>
              <h3>AI Feedback</h3>

              <div style={styles.feedbackBox}>
                {data.feedback.split("\n").map((line, index) => {
                  if (line.toLowerCase().includes("strength")) {
                    return <h4 key={index}> Strengths</h4>;
                  }
                  if (line.toLowerCase().includes("weakness")) {
                    return <h4 key={index}> Weaknesses</h4>;
                  }
                  if (line.toLowerCase().includes("suggest")) {
                    return <h4 key={index}> Suggestions</h4>;
                  }

                  return <p key={index}>{line}</p>;
                })}
              </div>
            </div>
          </>
        ) : (
          <p>No data yet. Upload resume first.</p>
        )}
      </div>
    </div>
  );
}

/* CARD COMPONENT */
const Card = ({ title, value }) => (
  <div
    style={styles.card}
    onMouseEnter={(e) => {
      e.currentTarget.style.transform = "translateY(-5px) scale(1.05)";
    }}
    onMouseLeave={(e) => {
      e.currentTarget.style.transform = "scale(1)";
    }}
  >
    <h3>{title}</h3>
    <h1>{value}</h1>
  </div>
);

const styles = {
  container: {
    padding: "30px",
    minHeight: "100vh",
    background: "linear-gradient(135deg, #dbeafe, #eef2ff)" // ✅ improved bg
  },

  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(3, 1fr)",
    gap: "20px",
    marginTop: "20px"
  },

  card: {
    background: "linear-gradient(135deg, #4f6ef7, #6c8cff)",
    color: "white",
    padding: "25px",
    borderRadius: "15px",
    textAlign: "center",
    boxShadow: "0 10px 25px rgba(79,110,247,0.3)",
    transition: "0.3s ease"
  },

  section: {
    marginTop: "30px",
    padding: "25px",
    borderRadius: "15px",
    background: "rgba(255,255,255,0.7)", // ✅ glass effect
    backdropFilter: "blur(8px)",         // ✅ glass effect
    boxShadow: "0 8px 20px rgba(0,0,0,0.08)"
  },

  jobCard: {
    padding: "12px",
    marginBottom: "10px",
    borderRadius: "10px",
    background: "#eef2ff",
    transition: "0.3s",
    cursor: "pointer"
  },

  skillBadge: {
    display: "inline-block",
    padding: "8px 14px",
    margin: "6px",
    background: "linear-gradient(135deg, #4f6ef7, #6c8cff)", // ✅ gradient
    color: "white",
    borderRadius: "20px",
    fontWeight: "500",
    transition: "0.3s",
    cursor: "pointer"
  },

  progressContainer: {
    height: "12px",
    background: "#e5e7eb",
    borderRadius: "10px",
    overflow: "hidden"
  },

  progressBar: {
    height: "100%",
    background: "linear-gradient(90deg, #4f6ef7, #22c55e)"
  },

  feedbackBox: {
    marginTop: "15px",
    padding: "15px",
    borderRadius: "10px",
    background: "#f9fafb",
    lineHeight: "1.7"
  }
};

export default Dashboard;