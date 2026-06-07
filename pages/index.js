export default function Home() {
  return (
    <div
      style={{
        minHeight: "100vh",
        background:
          "linear-gradient(135deg,#04132d 0%,#0b2450 50%,#123a82 100%)",
        color: "#fff",
        fontFamily: "Arial, sans-serif",
      }}
    >
      {/* HEADER */}

      <div
        style={{
          background: "#fff",
          padding: "15px 40px",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          color: "#111",
          borderBottom: "1px solid #eee",
        }}
      >
        <h2 style={{ margin: 0 }}>🏢 Property Insurance Portal</h2>

        <button
          style={{
            background: "#2563eb",
            color: "#fff",
            border: "none",
            padding: "12px 24px",
            borderRadius: "10px",
            cursor: "pointer",
            fontWeight: "bold",
          }}
        >
          Get Started →
        </button>
      </div>

      {/* HERO */}

      <div
        style={{
          maxWidth: "1200px",
          margin: "auto",
          padding: "60px 20px",
        }}
      >
        <h1
          style={{
            fontSize: "60px",
            marginBottom: "20px",
            lineHeight: "1.1",
          }}
        >
          Property Insurance Portal
        </h1>

        <p
          style={{
            fontSize: "24px",
            color: "#dbeafe",
            maxWidth: "800px",
            marginBottom: "50px",
          }}
        >
          Simplified Property Risk Placement, Premium Quotation and
          Policy Record Platform
        </p>

        {/* LOGIN CARDS */}

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit,minmax(320px,1fr))",
            gap: "25px",
          }}
        >
          {/* USER */}

          <div
            style={{
              background: "rgba(255,255,255,0.08)",
              backdropFilter: "blur(10px)",
              padding: "30px",
              borderRadius: "20px",
              border: "1px solid rgba(255,255,255,0.15)",
            }}
          >
            <h2>👤 User Login</h2>

            <p>✓ Submit New Requests</p>
            <p>✓ Reply to Queries</p>
            <p>✓ Receive Premium Quotes</p>
            <p>✓ Track Policy Status</p>

            <button
              style={{
                marginTop: "15px",
                background: "#2563eb",
                color: "#fff",
                border: "none",
                padding: "12px 24px",
                borderRadius: "10px",
                cursor: "pointer",
              }}
            >
              Login as User →
            </button>
          </div>

          {/* ADMIN */}

          <div
            style={{
              background: "rgba(255,255,255,0.08)",
              backdropFilter: "blur(10px)",
              padding: "30px",
              borderRadius: "20px",
              border: "1px solid rgba(255,255,255,0.15)",
            }}
          >
            <h2>🛡️ Admin Login</h2>

            <p>✓ Review New Requests</p>
            <p>✓ Raise Queries</p>
            <p>✓ Send Premium Quotes</p>
            <p>✓ Finalise Policies</p>

            <button
              style={{
                marginTop: "15px",
                background: "#16a34a",
                color: "#fff",
                border: "none",
                padding: "12px 24px",
                borderRadius: "10px",
                cursor: "pointer",
              }}
            >
              Login as Admin →
            </button>
          </div>
        </div>

        {/* HOW IT WORKS */}

        <div
          style={{
            marginTop: "60px",
            background: "rgba(255,255,255,0.05)",
            borderRadius: "20px",
            padding: "35px",
          }}
        >
          <h2 style={{ textAlign: "center" }}>How It Works</h2>

          <div
            style={{
              display: "grid",
              gridTemplateColumns:
                "repeat(auto-fit,minmax(180px,1fr))",
              gap: "20px",
              marginTop: "30px",
              textAlign: "center",
            }}
          >
            <div>1️⃣ Submit Request</div>
            <div>2️⃣ Admin Review</div>
            <div>3️⃣ Query & Reply</div>
            <div>4️⃣ Premium Quote Sent</div>
            <div>5️⃣ Policy Issued</div>
          </div>
        </div>

        {/* FOOTER */}

        <div
          style={{
            textAlign: "center",
            marginTop: "60px",
            paddingBottom: "40px",
          }}
        >
          <p>📧 243400@orientalinsurance.co.in</p>
          <p>Developed by Arun Kr.</p>
        </div>
      </div>
    </div>
  );
            }
