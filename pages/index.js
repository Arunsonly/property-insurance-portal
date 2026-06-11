import Link from "next/link";

export default function Home() {
  return (
    <div
      style={{
        minHeight: "100vh",
        background: "#f8fafc",
        fontFamily: "Arial,sans-serif",
      }}
    >
      <div
        style={{
          background:
            "linear-gradient(135deg,#021024,#032d6a,#0f3f9c)",
          color: "#fff",
          padding: "60px 20px",
          textAlign: "center",
        }}
      >
        <h1
          style={{
            fontSize: "42px",
            marginBottom: "15px",
          }}
        >
          🏢 Property Insurance Portal
        </h1>

        <p
          style={{
            fontSize: "18px",
            opacity: 0.9,
          }}
        >
          Property Risk Placement &
          Insurance Management System
        </p>
      </div>

      <div
        style={{
          maxWidth: "1000px",
          margin: "40px auto",
          padding: "20px",
          display: "grid",
          gridTemplateColumns:
            "repeat(auto-fit,minmax(320px,1fr))",
          gap: "25px",
        }}
      >
        {/* USER */}

        <div
          style={{
            background:
              "linear-gradient(135deg,#2563eb,#3b82f6)",
            color: "#fff",
            padding: "30px",
            borderRadius: "24px",
            boxShadow:
              "0 15px 35px rgba(37,99,235,.25)",
          }}
        >
          <h2>👤 User Login</h2>

          <p>
            ✓ Submit New Requests
          </p>

          <p>
            ✓ Reply Queries
          </p>

          <p>
            ✓ Receive Quotations
          </p>

          <p>
            ✓ View Policies
          </p>

          <Link href="/login">
            <button
              style={{
                marginTop: "15px",
                background: "#fff",
                color: "#2563eb",
                border: "none",
                padding: "12px 20px",
                borderRadius:
                  "12px",
                fontWeight:
                  "bold",
                cursor:
                  "pointer",
              }}
            >
              Login as User →
            </button>
          </Link>
        </div>

        {/* ADMIN */}

        <div
          style={{
            background:
              "linear-gradient(135deg,#059669,#16a34a)",
            color: "#fff",
            padding: "30px",
            borderRadius: "24px",
            boxShadow:
              "0 15px 35px rgba(22,163,74,.25)",
          }}
        >
          <h2>🛡️ Admin Login</h2>

          <p>
            ✓ Review Requests
          </p>

          <p>
            ✓ Raise Queries
          </p>

          <p>
            ✓ Send Quotations
          </p>

          <p>
            ✓ Issue Policies
          </p>

          <Link href="/login">
            <button
              style={{
                marginTop: "15px",
                background: "#fff",
                color: "#16a34a",
                border: "none",
                padding: "12px 20px",
                borderRadius:
                  "12px",
                fontWeight:
                  "bold",
                cursor:
                  "pointer",
              }}
            >
              Login as Admin →
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
