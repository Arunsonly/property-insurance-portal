export default function Home() {
  const steps = [
    {
      no: "1",
      icon: "🔐",
      title: "Submit Request",
      color: "#2563eb",
    },
    {
      no: "2",
      icon: "📄",
      title: "Admin Review",
      color: "#22c55e",
    },
    {
      no: "3",
      icon: "❓",
      title: "Query & Reply",
      color: "#8b5cf6",
    },
    {
      no: "4",
      icon: "💰",
      title: "Premium Quote",
      color: "#f59e0b",
    },
    {
      no: "5",
      icon: "🛡️",
      title: "Policy Issued",
      color: "#10b981",
    },
  ];

  return (
    <div
      style={{
        fontFamily: "Arial, sans-serif",
        background: "#ffffff",
        minHeight: "100vh",
      }}
    >
      {/* HEADER */}

      <div
        style={{
          background: "#ffffff",
          padding: "18px 30px",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          borderBottom: "1px solid #e5e7eb",
          position: "sticky",
          top: 0,
          zIndex: 100,
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

        <div
          style={{
            display: "flex",
            gap: "25px",
            color: "#334155",
            fontWeight: "600",
          }}
        >
          <span>Home</span>
          <span>About Us</span>
          <span>How It Works</span>
          <span>Contact Us</span>
        </div>

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
          background:
            "linear-gradient(135deg,#021024,#032d6a,#0f3f9c)",
          color: "#fff",
          padding: "50px 20px 140px",
        }}
      >
        <div
          style={{
            maxWidth: "1200px",
            margin: "auto",
          }}
        >
          <div
            style={{
              display: "inline-block",
              background: "rgba(255,255,255,0.12)",
              padding: "10px 18px",
              borderRadius: "30px",
              marginBottom: "25px",
            }}
          >
            Secure • Fast • Professional
          </div>

          <h1
            style={{
              fontSize: "64px",
              lineHeight: "1.05",
              marginBottom: "20px",
            }}
          >
            Property
            <br />
            <span
              style={{
                color: "#60a5fa",
              }}
            >
              Insurance Portal
            </span>
          </h1>

          <p
            style={{
              fontSize: "24px",
              color: "#dbeafe",
              maxWidth: "760px",
              lineHeight: "1.6",
            }}
          >
            Simplified Property Risk Placement,
            Premium Quotation and Policy Record
            Platform
          </p>
        </div>
      </div>

      {/* LOGIN CARDS */}

      <div
        style={{
          maxWidth: "1200px",
          margin: "-70px auto 0",
          padding: "0 20px",
          position: "relative",
          zIndex: 10,
        }}
      >
        <div
          style={{
            display: "grid",
            gridTemplateColumns:
              "repeat(auto-fit,minmax(340px,1fr))",
            gap: "25px",
          }}
        >
          {/* USER CARD */}

          <div
            style={{
              background:
                "linear-gradient(135deg,#2563eb,#3b82f6)",
              color: "#fff",
              padding: "26px",
              borderRadius: "24px",
              boxShadow:
                "0 20px 40px rgba(37,99,235,0.35)",
            }}
          >
            <h2
              style={{
                fontSize: "30px",
                marginBottom: "18px",
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
                marginTop: "15px",
                background: "#fff",
                color: "#2563eb",
                border: "none",
                padding: "12px 22px",
                borderRadius: "12px",
                fontWeight: "bold",
                cursor: "pointer",
              }}
            >
              Login as User →
            </button>
          </div>

          {/* ADMIN CARD */}

          <div
            style={{
              background:
                "linear-gradient(135deg,#059669,#16a34a)",
              color: "#fff",
              padding: "26px",
              borderRadius: "24px",
              boxShadow:
                "0 20px 40px rgba(22,163,74,0.35)",
            }}
          >
            <h2
              style={{
                fontSize: "30px",
                marginBottom: "18px",
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
                marginTop: "15px",
                background: "#fff",
                color: "#16a34a",
                border: "none",
                padding: "12px 22px",
                borderRadius: "12px",
                fontWeight: "bold",
                cursor: "pointer",
              }}
            >
              Login as Admin →
            </button>
          </div>
        </div>
      </div>

      {/* HOW IT WORKS */}

      <div
        style={{
          background: "#f8fafc",
          marginTop: "-20px",
          paddingTop: "90px",
          paddingBottom: "30px",
        }}
      >
        <div
          style={{
            maxWidth: "1200px",
            margin: "auto",
            textAlign: "center",
            padding: "0 20px",
          }}
        >
          <h2
            style={{
              fontSize: "42px",
              color: "#0f172a",
              marginBottom: "50px",
            }}
          >
            HOW IT WORKS
          </h2>

          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              flexWrap: "wrap",
              gap: "15px",
            }}
          >
            {steps.map((s, index) => (
              <div
                key={s.no}
                style={{
                  flex: "1",
                  minWidth: "150px",
                }}
              >
                <div
                  style={{
                    width: "55px",
                    height: "55px",
                    borderRadius: "50%",
                    background: s.color,
                    color: "#fff",
                    margin: "auto",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontWeight: "bold",
                    fontSize: "20px",
                  }}
                >
                  {s.no}
                </div>

                <div
                  style={{
                    width: "110px",
                    height: "110px",
                    margin: "20px auto",
                    borderRadius: "24px",
                    background: `${s.color}20`,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: "50px",
                  }}
                >
                  {s.icon}
                </div>

                <h3>{s.title}</h3>

                {index < 4 && (
                  <div
                    style={{
                      fontSize: "32px",
                      color: "#94a3b8",
                    }}
                  >
                    →
                  </div>
                )}
              </div>
            ))}
          </div>
</div>
      </div>

      {/* FOOTER */}

      <div
        style={{
          textAlign: "center",
          background: "#ffffff",
          color: "#475569",
          padding: "20px",
          borderTop: "1px solid #e5e7eb",
        }}
      >
        <p
          style={{
            marginBottom: "10px",
            fontSize: "16px",
          }}
        >
          📧 243400@orientalinsurance.co.in
        </p>

        <p
          style={{
            margin: 0,
            fontWeight: "600",
          }}
        >
          Developed by Arun Kr.
        </p>
      </div>
    </div>
  );
}
