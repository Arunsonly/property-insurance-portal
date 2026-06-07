export default function Home() {
  return (
    <div
      style={{
        minHeight: "100vh",
        background:
          "linear-gradient(135deg,#0f172a,#111827,#1e293b)",
        color: "#fff",
        fontFamily: "Arial, sans-serif",
        padding: "40px",
      }}
    >
      <div
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
        }}
      >
        <h1
          style={{
            fontSize: "42px",
            marginBottom: "10px",
          }}
        >
          Property Insurance Portal
        </h1>

        <p
          style={{
            color: "#cbd5e1",
            fontSize: "18px",
            marginBottom: "40px",
          }}
        >
          Professional Property Insurance Quotation Platform
        </p>

        <div
          style={{
            display: "grid",
            gap: "20px",
          }}
        >
          <div
            style={{
              background: "#1e293b",
              padding: "25px",
              borderRadius: "16px",
            }}
          >
            <h2>👨‍💼 Admin Panel</h2>
            <p>
              Review quotations, raise queries,
              send offers, accept/reject requests.
            </p>
          </div>

          <div
            style={{
              background: "#1e293b",
              padding: "25px",
              borderRadius: "16px",
            }}
          >
            <h2>🧑‍💻 Agent Panel</h2>
            <p>
              Submit risk details, receive offers,
              negotiate premium and track status.
            </p>
          </div>

          <div
            style={{
              background: "#1e293b",
              padding: "25px",
              borderRadius: "16px",
            }}
          >
            <h2>📊 Quote Status</h2>

            <p>⚪ Pending</p>
            <p>🟡 Replied</p>
            <p>🟢 Accepted</p>
            <p>🔴 Rejected</p>
            <p>⚫ Closed</p>
          </div>
        </div>
      </div>
    </div>
  );
}
