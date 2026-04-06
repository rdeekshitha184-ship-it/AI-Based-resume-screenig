// // import { Link } from "react-router-dom";

// // function Navbar() {
// //   return (
// //     <div style={styles.navbar}>
// //       <h2 style={{color:"#4f6ef7"}}>SkillSync AI</h2>

// //       <div style={styles.links}>
// //         <Link to="/dashboard">Dashboard</Link>
// //         <Link to="/upload">Upload Resume</Link>
// //         <Link to="/admin">Admin</Link>
// //       </div>

// //       <div style={styles.user}>
// //         <span>John Doe</span>
// //       </div>
// //     </div>
// //   );
// // }

// // const styles = {
// //   navbar: {
// //     display: "flex",
// //     justifyContent: "space-between",
// //     alignItems: "center",
// //     padding: "15px 30px",
// //     background: "#fff",
// //     borderBottom: "1px solid #ddd"
// //   },
// //   links: {
// //     display: "flex",
// //     gap: "20px"
// //   },
// //   user: {
// //     background: "#eef2f7",
// //     padding: "8px 15px",
// //     borderRadius: "20px"
// //   }
// // };

// // export default Navbar;

// import { Link, useLocation } from "react-router-dom";

// function Navbar() {
//   const location = useLocation();

//   return (
//     <div style={styles.navbar}>
//       <h2 style={styles.logo}>SkillSync AI</h2>

//       <div style={styles.links}>
//         <Link
//           to="/dashboard"
//           style={getLinkStyle(location.pathname, "/dashboard")}
//         >
//           Dashboard
//         </Link>

//         <Link
//           to="/upload"
//           style={getLinkStyle(location.pathname, "/upload")}
//         >
//           Upload Resume
//         </Link>

//         <Link
//           to="/admin"
//           style={getLinkStyle(location.pathname, "/admin")}
//         >
//           Admin
//         </Link>
//       </div>

//       <div style={styles.user}>
//         <span>John Doe</span>
//       </div>
//     </div>
//   );
// }

// /* 🔥 ACTIVE LINK STYLE */
// const getLinkStyle = (current, path) => ({
//   textDecoration: "none",
//   padding: "8px 16px",
//   borderRadius: "20px",
//   background: current === path ? "rgba(255,255,255,0.25)" : "transparent",
//   color: "white",
//   fontWeight: current === path ? "bold" : "normal",
//   transition: "0.3s"
// });

// const styles = {
//   navbar: {
//     display: "flex",
//     justifyContent: "space-between",
//     alignItems: "center",
//     padding: "15px 30px",
//     background: "linear-gradient(90deg, #4f6ef7, #6c8cff)",
//     color: "white",
//     boxShadow: "0 4px 15px rgba(0,0,0,0.1)",

//     /* 🔥 Sticky Navbar */
//     position: "sticky",
//     top: 0,
//     zIndex: 1000
//   },

//   logo: {
//     color: "white",
//     fontWeight: "bold"
//   },

//   links: {
//     display: "flex",
//     gap: "20px"
//   },

//   user: {
//     background: "rgba(255,255,255,0.2)",
//     padding: "8px 15px",
//     borderRadius: "20px",
//     color: "white",
//     fontWeight: "500"
//   }
// };

// export default Navbar;

import { Link, useLocation } from "react-router-dom";

function Navbar() {
  const location = useLocation();  
  const handleLogout = () => {
    localStorage.removeItem("user");
    window.location.href = "/";
  };

  return (
    <div style={styles.navbar}>
      <h2 style={styles.logo}>SkillSync AI</h2>

      <div style={styles.links}>
        <Link
          to="/dashboard"
          style={getLinkStyle(location.pathname, "/dashboard")}
        >
          Dashboard
        </Link>

        <Link
          to="/upload"
          style={getLinkStyle(location.pathname, "/upload")}
        >
          Upload Resume
        </Link>

        <Link
          to="/admin"
          style={getLinkStyle(location.pathname, "/admin")}
        >
          Admin
        </Link>
      </div>

      <div style={styles.user} onClick={handleLogout}>
        Logout
      </div>
    </div>
  );
}

/* 🔥 Active link styling */
const getLinkStyle = (current, path) => ({
  textDecoration: "none",
  padding: "8px 16px",
  borderRadius: "20px",
  background: current === path ? "rgba(255,255,255,0.25)" : "transparent",
  color: "#111",
  fontWeight: current === path ? "bold" : "500",
  transition: "0.3s"
});

const styles = {
  navbar: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "15px 30px",

    /* 🌟 GLASS EFFECT */
    background: "rgba(107, 106, 126, 0.2)",
    backdropFilter: "blur(12px)",
    WebkitBackdropFilter: "blur(12px)",

    borderBottom: "1px solid rgba(62, 74, 144, 0.3)",
    boxShadow: "0 8px 20px rgba(0,0,0,0.1)",

    /* Sticky */
    position: "sticky",
    top: 0,
    zIndex: 1000
  },

  logo: {
    color: "#4f6ef7",
    fontWeight: "bold"
  },

  links: {
    display: "flex",
    gap: "20px"
  },

  user: {
    background: "rgba(255,255,255,0.4)",
    backdropFilter: "blur(10px)",
    padding: "8px 15px",
    borderRadius: "20px",
    fontWeight: "500",
    cursor: "pointer",
  }
};

export default Navbar;