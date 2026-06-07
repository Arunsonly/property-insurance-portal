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
        margin: 0,
        padding: 0,
        background: "#fff",
      }}
    >
      {/* HEADER */}

      <div
        style={{
          background: "#fff",
          padding: "18px 40px",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          borderBottom: "1px solid #eee",
        }}
      >
        <h2 style={{ margin: 0, color: "#0f172a" }}>
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
          background:
            "linear-gradient(135deg,#021024,#032d6a,#0f3f9c)",
          color: "#fff",
          padding: "60px 20px 180px",
          position: "relative",
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
              background: "rgba(255,255,255,0.1)",
              padding: "8px 18px",
              borderRadius: "30px",
              marginBottom: "20px",
            }}
          >
            Secure • Fast • Professional
          </div>

          <h1
            style={{
              fontSize: "64px",
              lineHeight: "1.1",
              marginBottom: "20px",
            }}
          >
            Property <br />
            <span style={{ color: "#60a5fa" }}>
              Insurance Portal
            </span>
          </h1>

          <p
            style={{
              fontSize: "24px",
              color: "#dbeafe",
              maxWidth: "800px",
            }}
          >
            Simplified Property Risk Placement,
            Premium Quotation and Policy Record
            Platform
          </p>
        </div>
      </div>

      {/* CARDS */}

      <div
        style={{
          maxWidth: "1200px",
          margin: "-120px auto 0",
          padding: "0 20px",
          position: "relative",
          zIndex: 10,
        }}
      >
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit,minmax(350px,1fr))",
            gap: "30px",
          }}
        >
          {/* USER */}

          <div
            style={{
              background:
                "linear-gradient(135deg,#2563eb,#3b82f6)",
              color: "#fff",
              padding: "35px",
              borderRadius: "24px",
              boxShadow:
                "0 20px 40px rgba(37,99,235,0.35)",
            }}
          >
            <h2 style={{ fontSize: "36px" }}>
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
                padding: "14px 28px",
                borderRadius: "12px",
                fontWeight: "bold",
              }}
            >
              Login as User →
            </button>
          </div>

          {/* ADMIN */}

          <div
            style={{
              background:
                "linear-gradient(135deg,#059669,#16a34a)",
              color: "#fff",
              padding: "35px",
              borderRadius: "24px",
              boxShadow:
                "0 20px 40px rgba(22,163,74,0.35)",
            }}
          >
            <h2 style={{ fontSize: "36px" }}>
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
                color: "#16a34a",
                border: "none",
                padding: "14px 28px",
                borderRadius: "12px",
                fontWeight: "bold",
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
          marginTop: "-60px",
          paddingTop: "140px",
          paddingBottom: "80px",
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
            }}
          >
            HOW IT WORKS
          </h2>

          <div
            style={{
              display: "grid",
              gridTemplateColumns:
                "repeat(auto-fit,minmax(180px,1fr))",
              gap: "25px",
              marginTop: "50px",
            }}
          >
            {steps.map((s) => (
              <div key={s.no}>
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
                    width: "90px",
                    height: "90px",
                    margin: "20px auto",
                    borderRadius: "20px",
                    background: `${s.color}20`,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: "40px",
                  }}
                >
                  {s.icon}
                </div>

                <h3>{s.title}</h3>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* FOOTER */}

      <div
        style={{
          textAlign: "center",
          padding: "40px",
          background: "#fff",
          color: "#334155",
        }}
      >
        <p>📧 243400@orientalinsurance.co.in</p>
        <p>Developed by Arun Kr.</p>
      </div>
    </div>
  );
              }
