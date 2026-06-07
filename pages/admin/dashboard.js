export default function AdminDashboard() {
  return (
    <div
      style={{
        minHeight: "100vh",
        background: "#f8fafc",
        fontFamily: "Arial,sans-serif",
      }}
    >
      {/* Header */}

      <div
        style={{
          background: "#0f3f9c",
          color: "#fff",
          padding: "18px 20px",
          fontSize: "22px",
          fontWeight: "bold",
        }}
      >
        Property Insurance Portal - Admin
      </div>

      <div
        style={{
          display: "flex",
          flexDirection: "column",
          padding: "15px",
          gap: "15px",
        }}
      >
        {/* Summary Cards */}

        <div
          style={{
            display: "grid",
            gridTemplateColumns:
              "repeat(auto-fit,minmax(150px,1fr))",
            gap: "12px",
          }}
        >
          <div
            style={{
              background: "#fef3c7",
              padding: "15px",
              borderRadius: "14px",
            }}
          >
            <h3>🟡 Pending</h3>
            <h2>0</h2>
          </div>

          <div
            style={{
              background: "#dbeafe",
              padding: "15px",
              borderRadius: "14px",
            }}
          >
            <h3>❓ Query Status</h3>
            <h2>0</h2>
          </div>

          <div
            style={{
              background: "#dcfce7",
              padding: "15px",
              borderRadius: "14px",
            }}
          >
            <h3>💰 Quotations</h3>
            <h2>0</h2>
          </div>

          <div
            style={{
              background: "#ede9fe",
              padding: "15px",
              borderRadius: "14px",
            }}
          >
            <h3>📜 Policies</h3>
            <h2>0</h2>
          </div>
        </div>

        {/* Menu */}

        <div
          style={{
            background: "#fff",
            borderRadius: "16px",
            padding: "15px",
          }}
        >
          <h3>Admin Menu</h3>

          <p>🟡 Pending Requests</p>

          <p>❓ Query Status</p>

          <p>💰 Quotation Sent</p>

          <p>📜 Policy Issued Register</p>

          <p>👥 Manage Users</p>

          <p>🚪 Logout</p>
        </div>

        {/* Recent Activity */}

        <div
          style={{
            background: "#fff",
            borderRadius: "16px",
            padding: "15px",
          }}
        >
          <h3>Recent Activity</h3>

          <p>No records found.</p>
        </div>
      </div>
    </div>
  );
}
