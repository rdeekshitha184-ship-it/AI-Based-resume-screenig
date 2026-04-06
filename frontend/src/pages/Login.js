// // import { useNavigate } from "react-router-dom";

// // function Login() {
// //   const navigate = useNavigate();

// //   const handleLogin = () => {
// //     // For now simple login (no auth)
// //     navigate("/dashboard");
// //   };

// //   return (
// //     <div style={styles.container}>
      
// //       {/* LEFT SIDE */}
// //       <div style={styles.left}>
// //         <h1 style={styles.brand}>SkillSync AI</h1>
// //         <p style={styles.tagline}>
// //           AI-powered resume analyzer 🚀  
// //           Boost your career with smart insights
// //         </p>
// //       </div>

// //       {/* RIGHT SIDE LOGIN CARD */}
// //       <div style={styles.card}>
// //         <h2>Welcome Back 👋</h2>
// //         <p style={{ marginBottom: "20px" }}>Login to continue</p>

// //         <input placeholder="Email" style={styles.input} />
// //         <input type="password" placeholder="Password" style={styles.input} />

// //         <button style={styles.button} onClick={handleLogin}>
// //           Login
// //         </button>

// //         <p style={{ marginTop: "15px", fontSize: "14px" }}>
// //           Don’t have an account? <span style={{ color: "#4f6ef7" }}>Sign up</span>
// //         </p>
// //       </div>

// //     </div>
// //   );
// // }

// // const styles = {
// //   container: {
// //     display: "flex",
// //     height: "100vh",
// //     background: "linear-gradient(135deg, #4f6ef7, #22c55e)",
// //     color: "white"
// //   },

// //   left: {
// //     flex: 1,
// //     display: "flex",
// //     flexDirection: "column",
// //     justifyContent: "center",
// //     padding: "60px"
// //   },

// //   brand: {
// //     fontSize: "40px",
// //     marginBottom: "10px"
// //   },

// //   tagline: {
// //     fontSize: "18px",
// //     opacity: 0.9
// //   },

// //   card: {
// //     flex: 1,
// //     background: "rgba(255,255,255,0.15)",
// //     backdropFilter: "blur(12px)",
// //     display: "flex",
// //     flexDirection: "column",
// //     justifyContent: "center",
// //     padding: "40px",
// //     borderRadius: "20px",
// //     margin: "60px",
// //     boxShadow: "0 10px 30px rgba(0,0,0,0.2)"
// //   },

// //   input: {
// //     padding: "12px",
// //     marginBottom: "15px",
// //     borderRadius: "8px",
// //     border: "none",
// //     outline: "none"
// //   },

// //   button: {
// //     padding: "12px",
// //     background: "linear-gradient(135deg, #4f6ef7, #6c8cff)",
// //     color: "white",
// //     border: "none",
// //     borderRadius: "8px",
// //     cursor: "pointer",
// //     fontSize: "16px"
// //   }
// // };

// // export default Login;

// import { useState } from "react";
// import axios from "axios";
// import { useNavigate } from "react-router-dom";

// function Login() {
//   const navigate = useNavigate();

//   const [username, setUsername] = useState("");
//   const [password, setPassword] = useState("");

//   const handleLogin = async () => {
//     try {
//       const res = await axios.post("http://127.0.0.1:8000/api/login/", {
//         username,
//         password
//       });

//       // ✅ Save login
//       localStorage.setItem("user", JSON.stringify(res.data));

//       navigate("/dashboard");

//     } catch (err) {
//       alert("Invalid credentials");
//     }
//   };

//   return (
//     <div style={{ padding: "50px" }}>
//       <h2>Login</h2>

//       <input
//         placeholder="Username"
//         onChange={(e) => setUsername(e.target.value)}
//       />

//       <input
//         type="password"
//         placeholder="Password"
//         onChange={(e) => setPassword(e.target.value)}
//       />

//       <button onClick={handleLogin}>Login</button>
//     </div>
//   );
// }

// export default Login;

import { useState } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      const res = await axios.post("http://127.0.0.1:8000/api/login/", {
        username,
        password
      });

      localStorage.setItem("user", JSON.stringify(res.data));
      navigate("/dashboard");
    } catch (err) {
      alert("Invalid credentials");
    }
  };

  return (
    <div style={styles.container}>
      <div style={styles.card}>
        <h2 style={styles.title}>Welcome Back 👋</h2>

        <input
          style={styles.input}
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />

        <input
          type="password"
          style={styles.input}
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button style={styles.button} onClick={handleLogin}>
          Login
        </button>

        <p style={{ marginTop: "15px" }}>
          Don’t have an account?{" "}
          <Link to="/signup" style={styles.link}>
            Signup
          </Link>
        </p>
      </div>
    </div>
  );
}

const styles = {
  container: {
    height: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    background: "linear-gradient(135deg, #667eea, #764ba2)"
   // background: "linear-gradient(135deg, #43cea2, #185a9d)"
  },

  card: {
    padding: "40px",
    width: "350px",
    borderRadius: "20px",
    backdropFilter: "blur(15px)",
    background: "rgba(255,255,255,0.15)",
    boxShadow: "0 8px 30px rgba(0,0,0,0.2)",
    textAlign: "center"
  },

  title: {
    marginBottom: "25px",
    color: "#fff"
  },

  input: {
    width: "100%",
    padding: "12px",
    marginBottom: "15px",
    borderRadius: "10px",
    border: "none",
    outline: "none"
  },

  button: {
    width: "100%",
    padding: "12px",
    borderRadius: "10px",
    border: "none",
    background: "#4f6ef7",
    color: "white",
    fontWeight: "bold",
    cursor: "pointer",
    transition: "0.3s"
  },

  link: {
    color: "#fff",
    fontWeight: "bold"
  }
};

export default Login;