import Link from "next/link";

export default function UserDashboard() {
  return (
    <div
      style={{
        background: "#f4f7fc",
        minHeight: "100vh",
        paddingBottom: "80px",
      }}
    >
      {/* Header */}
      <div
        style={{
          background: "linear-gradient(135deg,#0b3d91,#0a2d6f)",
          color: "#fff",
          padding: "25px 20px",
        }}
      >
        <h2 style={{ margin: 0 }}>Property Insurance Portal</h2>
        <p style={{ marginTop: 5 }}>User Panel</p>

        <div style={{ marginTop: 25 }}>
          <h2 style={{ margin: 0 }}>Welcome, Rajesh Kumar 👋</h2>
          <p>Here is your dashboard overview</p>
        </div>
      </div>

      {/* Stats Cards */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "15px",
          padding: "20px",
        }}
      >
        <div style={card}>
          <div style={{ fontSize: 30 }}>📋</div>
          <h2>12</h2>
          <p>My Requests</p>
        </div>

        <div style={card}>
          <div style={{ fontSize: 30 }}>❓</div>
          <h2>2</h2>
          <p>Query Received</p>
        </div>

        <div style={card}>
          <div style={{ fontSize: 30 }}>💰</div>
          <h2>3</h2>
          <p>Quotation Received</p>
        </div>

        <div style={card}>
          <div style={{ fontSize: 30 }}>✅</div>
          <h2>1</h2>
          <p>Approved</p>
        </div>
      </div>

      {/* Recent Submissions */}
      <div
        style={{
          background: "#fff",
          margin: "0 20px",
          borderRadius: "20px",
          padding: "20px",
          boxShadow: "0 2px 10px rgba(0,0,0,0.08)",
        }}
      >
        <h3>My Submissions</h3>

        <div style={row}>
          <span>PROP-00125</span>
          <span style={pending}>Pending</span>
        </div>

        <div style={row}>
          <span>PROP-00124</span>
          <span style={query}>Query Received</span>
        </div>

        <div style={row}>
          <span>PROP-00123</span>
          <span style={reply}>Query Replied</span>
        </div>

        <div style={row}>
          <span>PROP-00122</span>
          <span style={quotation}>Quotation Received</span>
        </div>

        <div style={row}>
          <span>PROP-00121</span>
          <span style={approved}>Approved</span>
        </div>
      </div>

      {/* Bottom Navigation */}
      <div
        style={{
          position: "fixed",
          bottom: 0,
          width: "100%",
          background: "#fff",
          display: "flex",
          justifyContent: "space-around",
          padding: "12px 0",
          borderTop: "1px solid #ddd",
        }}
      >
        <Link href="/user/dashboard">🏠</Link>
        <Link href="/user/new-request">➕</Link>
        <Link href="/user/my-submissions">📄</Link>
        <Link href="/user/profile">👤</Link>
      </div>
    </div>
  );
}

const card = {
  background: "#fff",
  borderRadius: "18px",
  padding: "20px",
  textAlign: "center",
  boxShadow: "0 2px 10px rgba(0,0,0,0.08)",
};

const row = {
  display: "flex",
  justifyContent: "space-between",
  marginBottom: "12px",
  padding: "10px",
  background: "#f8fafc",
  borderRadius: "10px",
};

const pending = {
  background: "#fde68a",
  padding: "5px 10px",
  borderRadius: "15px",
};

const query = {
  background: "#ddd6fe",
  padding: "5px 10px",
  borderRadius: "15px",
};

const reply = {
  background: "#bfdbfe",
  padding: "5px 10px",
  borderRadius: "15px",
};

const quotation = {
  background: "#fdba74",
  padding: "5px 10px",
  borderRadius: "15px",
};

const approved = {
  background: "#86efac",
  padding: "5px 10px",
  borderRadius: "15px",
};
