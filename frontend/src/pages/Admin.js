import Navbar from "../components/Navbar";

function Admin() {

  const jobs = [
    {
      title: "Frontend Developer",
      skills: ["React", "TypeScript", "CSS", "HTML"],
      level: "Mid"
    },
    {
      title: "Backend Engineer",
      skills: ["Node.js", "Python", "PostgreSQL", "REST APIs"],
      level: "Senior"
    },
    {
      title: "Full Stack Developer",
      skills: ["React", "Node.js", "MongoDB", "GraphQL"],
      level: "Mid"
    }
  ];

  return (
    <div>
      <Navbar />

      <div style={styles.container}>
        <h2>Admin Panel</h2>
        <p>Manage job roles and required skills</p>
        <p style={{ marginTop: "20px", color: "gray" }}>
  ⚡ This admin panel will soon allow managing job roles dynamically.
  For now, use Django Admin at http://127.0.0.1:8000/admin/
</p>

        {/* Top Section */}
        <div style={styles.topBar}>
          <input type="text" placeholder="Search roles..." style={styles.search} />
          <button style={styles.addBtn}>+ Add Role</button>
        </div>

        {/* Table */}
        <div style={styles.table}>
          <div style={styles.headerRow}>
            <span>Job Title</span>
            <span>Required Skills</span>
            <span>Level</span>
            <span>Actions</span>
          </div>

          {jobs.map((job, index) => (
            <div key={index} style={styles.row}>
              <span>{job.title}</span>

              <div style={styles.skills}>
                {job.skills.map((skill, i) => (
                  <span key={i} style={styles.skillTag}>{skill}</span>
                ))}
              </div>

              <span style={styles.level}>{job.level}</span>

              <div style={styles.actions}>
                ✏️ 🗑️
              </div>
            </div>
          ))}

        </div>
      </div>
    </div>
  );
}

const styles = {
  container: {
    padding: "30px"
  },

  topBar: {
    display: "flex",
    justifyContent: "space-between",
    margin: "20px 0"
  },

  search: {
    padding: "10px",
    width: "250px",
    borderRadius: "8px",
    border: "1px solid #ccc"
  },

  addBtn: {
    padding: "10px 20px",
    background: "#4f6ef7",
    color: "white",
    border: "none",
    borderRadius: "8px",
    cursor: "pointer"
  },

  table: {
    background: "#fff",
    borderRadius: "10px",
    padding: "10px",
    boxShadow: "0 2px 5px rgba(0,0,0,0.1)"
  },

  headerRow: {
    display: "grid",
    gridTemplateColumns: "1fr 2fr 1fr 1fr",
    padding: "10px",
    fontWeight: "bold",
    borderBottom: "1px solid #ddd"
  },

  row: {
    display: "grid",
    gridTemplateColumns: "1fr 2fr 1fr 1fr",
    padding: "10px",
    alignItems: "center",
    borderBottom: "1px solid #eee"
  },

  skills: {
    display: "flex",
    gap: "5px",
    flexWrap: "wrap"
  },

  skillTag: {
    background: "#eef2f7",
    padding: "5px 10px",
    borderRadius: "15px",
    fontSize: "12px"
  },

  level: {
    background: "#eef2f7",
    padding: "5px 10px",
    borderRadius: "10px",
    width: "fit-content"
  },

  actions: {
    cursor: "pointer"
  }
};

export default Admin;