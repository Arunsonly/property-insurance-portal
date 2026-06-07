export default function Home() {
  return (
    <div
      style={{
        minHeight: "100vh",
        fontFamily: "Arial, sans-serif",
        background:
          "linear-gradient(135deg,#02122b 0%,#06285e 50%,#0d3c8f 100%)",
      }}
    >
      {/* NAVBAR */}

      <div
        style={{
          background: "#ffffff",
          padding: "18px 30px",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          boxShadow: "0 2px 15px rgba(0,0,0,0.08)",
        }}
      >
        <h2
          style={{
            margin: 0,
            color: "#0f172a",
            fontSize: "22px",
          }}
        >
          🏢 Property Insurance Portal
        </h2>

        <button
          style={{
            background: "#2563eb",
            color: "#fff",
            border: "none",
            padding: "12px 24px",
            borderRadius: "12px",
            fontWeight: "bold",
            cursor: "pointer",
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
        <div style={{ maxWidth: "700px" }}>
          <div
            style={{
              display: "inline-block",
              background: "rgba(255,255,255,0.12)",
              color: "#fff",
              padding: "10px 18px",
              borderRadius: "30px",
              marginBottom: "25px",
            }}
          >
            Secure • Fast • Professional
          </div>

          <h1
            style={{
              color: "#fff",
              fontSize: "68px",
              lineHeight: "1.05",
              margin: "0 0 20px",
            }}
          >
            Property <br />
            <span style={{ color: "#60A5FA" }}>
              Insurance Portal
            </span>
          </h1>

          <p
            style={{
              color: "#dbeafe",
              fontSize: "24px",
              lineHeight: "1.6",
              marginBottom: "50px",
            }}
          >
            Simplified Property Risk Placement,
            Premium Quotation and Policy
            Record Platform
          </p>
        </div>

        {/* LOGIN CARDS */}

        <div
          style={{
            display: "grid",
            gridTemplateColumns:
              "repeat(auto-fit,minmax(320px,1fr))",
            gap: "30px",
            marginTop: "30px",
          }}
        >
          {/* USER */}

          <div
            style={{
              background:
                "linear-gradient(135deg,#2563eb,#1d4ed8)",
              padding: "35px",
              borderRadius: "25px",
              color: "#fff",
              boxShadow:
                "0 15px 40px rgba(37,99,235,0.35)",
            }}
          >
            <h2
              style={{
                fontSize: "34px",
                marginBottom: "25px",
              }}
            >
              👤 User Login
            </h2>

            <p>✓ Submit New Requests</p>
            <p>✓ Reply to Queries</p>
            <p>✓ Receive Premium Quotes</p>
            <p>✓ Track Policy Status</p>

            <button
              style={{
                marginTop: "20px",
                background: "#fff",
                color: "#2563eb",
                border: "none",
                padding: "14px 25px",
                borderRadius: "12px",
                fontWeight: "bold",
                cursor: "pointer",
              }}
            >
              Login as User →
            </button>
          </div>

          {/* ADMIN */}

          <div
            style={{
              background:
                "linear-gradient(135deg,#16a34a,#15803d)",
              padding: "35px",
              borderRadius: "25px",
              color: "#fff",
              boxShadow:
                "0 15px 40px rgba(22,163,74,0.35)",
            }}
          >
            <h2
              style={{
                fontSize: "34px",
                marginBottom: "25px",
              }}
            >
              🛡️ Admin Login
            </h2>

            <p>✓ Review New Requests</p>
            <p>✓ Raise Queries</p>
            <p>✓ Send Premium Quotes</p>
            <p>✓ Finalise Policies</p>

            <button
              style={{
                marginTop: "20px",
                background: "#fff",
                color: "#15803d",
                border: "none",
                padding: "14px 25px",
                borderRadius: "12px",
                fontWeight: "bold",
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
            background: "#ffffff",
            borderRadius: "30px",
            marginTop: "70px",
            padding: "45px 25px",
            textAlign: "center",
          }}
        >
          <h2
            style={{
              color: "#0f172a",
              marginBottom: "40px",
            }}
          >
            HOW IT WORKS
          </h2>

          <div
            style={{
              display: "grid",
              gridTemplateColumns:
                "repeat(auto-fit,minmax(160px,1fr))",
              gap: "20px",
            }}
          >
            <div>
              <h3 style={{ color: "#2563eb" }}>1️⃣</h3>
              <p>Submit Request</p>
            </div>

            <div>
              <h3 style={{ color: "#16a34a" }}>2️⃣</h3>
              <p>Admin Review</p>
            </div>

            <div>
              <h3 style={{ color: "#9333ea" }}>3️⃣</h3>
              <p>Query & Reply</p>
            </div>

            <div>
              <h3 style={{ color: "#f59e0b" }}>4️⃣</h3>
              <p>Premium Quote Sent</p>
            </div>

            <div>
              <h3 style={{ color: "#22c55e" }}>5️⃣</h3>
              <p>Policy Issued</p>
            </div>
          </div>
        </div>

        {/* FOOTER */}

        <div
          style={{
            textAlign: "center",
            color: "#fff",
            padding: "50px 20px",
          }}
        >
          <p
            style={{
              fontSize: "18px",
              marginBottom: "12px",
            }}
          >
            📧 243400@orientalinsurance.co.in
          </p>

          <p>Developed by Arun Kr.</p>
        </div>
      </div>
    </div>
  );
}
