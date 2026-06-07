export default function Home() {
  return (
    <div
      style={{
        minHeight: "100vh",
        background:
          "linear-gradient(135deg,#020617,#0f172a,#1e3a8a)",
        color: "#fff",
        fontFamily: "Arial, sans-serif",
        padding: "30px",
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
            fontSize: "56px",
            fontWeight: "bold",
            marginBottom: "15px",
          }}
        >
          Property Insurance Portal
        </h1>

        <p
          style={{
            fontSize: "22px",
            color: "#cbd5e1",
            maxWidth: "700px",
            marginBottom: "40px",
            lineHeight: "1.6",
          }}
        >
          Simplified Property Risk Placement, Premium Quotation and
          Policy Record Platform
        </p>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit,minmax(320px,1fr))",
            gap: "25px",
            marginBottom: "50px",
          }}
        >
          <div
            style={{
              background: "#1e293b",
              padding: "30px",
              borderRadius: "20px",
              border: "1px solid #334155",
            }}
          >
            <h2 style={{ marginBottom: "20px" }}>
              👤 User Login
            </h2>

            <p>✓ Submit New Requests</p>
            <p>✓ Reply to Queries</p>
            <p>✓ Receive Premium Quotes</p>
            <p>✓ Track Policy Status</p>

            <button
              style={{
                marginTop: "20px",
                padding: "12px 20px",
                borderRadius: "10px",
                border: "none",
                background: "#2563eb",
                color: "#fff",
                cursor: "pointer",
                fontWeight: "bold",
              }}
            >
              Login as User →
            </button>
          </div>

          <div
            style={{
              background: "#1e293b",
              padding: "30px",
              borderRadius: "20px",
              border: "1px solid #334155",
            }}
          >
            <h2 style={{ marginBottom: "20px" }}>
              🛡️ Admin Login
            </h2>

            <p>✓ Review New Requests</p>
            <p>✓ Raise Queries</p>
            <p>✓ Send Premium Quotes</p>
            <p>✓ Finalise Policies</p>

            <button
              style={{
                marginTop: "20px",
                padding: "12px 20px",
                borderRadius: "10px",
                border: "none",
                background: "#16a34a",
                color: "#fff",
                cursor: "pointer",
                fontWeight: "bold",
              }}
            >
              Login as Admin →
            </button>
          </div>
        </div>

        <div
          style={{
            background: "#0f172a",
            padding: "30px",
            borderRadius: "20px",
            border: "1px solid #334155",
            marginBottom: "40px",
          }}
        >
          <h2
            style={{
              textAlign: "center",
              marginBottom: "30px",
            }}
          >
            How It Works
          </h2>

          <div
            style={{
              display: "grid",
              gridTemplateColumns:
                "repeat(auto-fit,minmax(180px,1fr))",
              gap: "20px",
              textAlign: "center",
            }}
          >
            <div>
              <h3>1️⃣</h3>
              <p>Submit Request</p>
            </div>

            <div>
              <h3>2️⃣</h3>
              <p>Admin Review</p>
            </div>

            <div>
              <h3>3️⃣</h3>
              <p>Query & Reply</p>
            </div>

            <div>
              <h3>4️⃣</h3>
              <p>Premium Quote Sent</p>
            </div>

            <div>
              <h3>5️⃣</h3>
              <p>Policy Issued</p>
            </div>
          </div>
        </div>

        <div
          style={{
            textAlign: "center",
            color: "#cbd5e1",
            borderTop: "1px solid #334155",
            paddingTop: "25px",
          }}
        >
          <p>📧 243400@orientalinsurance.co.in</p>
          <p>Developed by Arun Kr.</p>
        </div>
      </div>
    </div>
  );
          }
