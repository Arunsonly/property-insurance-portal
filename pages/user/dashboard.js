export default function UserDashboard() {
  return (
    <div
      style={{
        background: "#f4f7fc",
        minHeight: "100vh",
        padding: "20px",
      }}
    >
      {/* Header */}
      <div
        style={{
          background: "#0b3d91",
          color: "#fff",
          padding: "25px",
          borderRadius: "20px",
          marginBottom: "20px",
        }}
      >
        <h2 style={{ margin: 0 }}>Property Insurance Portal</h2>
        <p style={{ marginTop: "5px" }}>User Panel</p>

        <div style={{ marginTop: "20px" }}>
          <h2>Welcome, Rajesh Kumar 👋</h2>
          <p>Here is your dashboard overview</p>
        </div>
      </div>

      {/* Summary Cards */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(2,1fr)",
          gap: "15px",
          marginBottom: "20px",
        }}
      >
        <div style={cardStyle}>
          <h1>12</h1>
          <p>My Requests</p>
        </div>

        <div style={cardStyle}>
          <h1>2</h1>
          <p>Query Received</p>
        </div>

        <div style={cardStyle}>
          <h1>3</h1>
          <p>Quotation Received</p>
        </div>

        <div style={cardStyle}>
          <h1>1</h1>
          <p>Approved</p>
        </div>
      </div>

      {/* My Submissions */}
      <div
        style={{
          background: "#fff",
          borderRadius: "20px",
          padding: "20px",
          boxShadow: "0 2px 10px rgba(0,0,0,0.08)",
        }}
      >
        <h2>My Submissions</h2>

        <div style={rowStyle}>
          <span>PROP-00125</span>
          <span>Pending</span>
        </div>

        <div style={rowStyle}>
          <span>PROP-00124</span>
          <span>Query Received</span>
        </div>

        <div style={rowStyle}>
          <span>PROP-00123</span>
          <span>Query Replied</span>
        </div>

        <div style={rowStyle}>
          <span>PROP-00122</span>
          <span>Quotation Received</span>
        </div>

        <div style={rowStyle}>
          <span>PROP-00121</span>
          <span>Approved</span>
        </div>
      </div>
    </div>
  );
}

const cardStyle = {
  background: "#fff",
  borderRadius: "16px",
  padding: "20px",
  textAlign: "center",
  boxShadow: "0 2px 10px rgba(0,0,0,0.08)",
};

const rowStyle = {
  display: "flex",
  justifyContent: "space-between",
  padding: "12px 0",
  borderBottom: "1px solid #eee",
};
