import { useState } from "react";
import Link from "next/link";

export default function AdminDashboard() {
  const [menuOpen, setMenuOpen] = useState(false);

  const stats = [
    {
      title: "Pending Requests",
      count: "18",
      icon: "📋",
      color: "#f59e0b",
      link: "/admin/pending-requests",
    },
    {
      title: "Queries Pending",
      count: "07",
      icon: "❓",
      color: "#8b5cf6",
      link: "/admin/query-status",
    },
    {
      title: "Quotations Sent",
      count: "11",
      icon: "💰",
      color: "#10b981",
      link: "/admin/quotation-sent",
    },
    {
      title: "Policies Issued",
      count: "23",
      icon: "📄",
      color: "#2563eb",
      link: "/admin/policy-register",
    },
  ];

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "#f4f7fc",
        fontFamily: "Arial,sans-serif",
      }}
    >
      {/* HEADER */}

      <div
        style={{
          background:
            "linear-gradient(135deg,#021024,#032d6a,#0f3f9c)",
          color: "#fff",
          padding: "15px 20px",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "15px",
          }}
        >
          <button
            onClick={() => setMenuOpen(true)}
            style={{
              background: "none",
              border: "none",
              color: "#fff",
              fontSize: "26px",
              cursor: "pointer",
            }}
          >
            ☰
          </button>

          <div>
            <div
              style={{
                fontSize: "20px",
                fontWeight: "bold",
              }}
            >
              Property Insurance Portal
            </div>

            <div
              style={{
                fontSize: "12px",
                opacity: 0.9,
              }}
            >
              Admin Panel
            </div>
          </div>
        </div>

        <div
          style={{
            position: "relative",
            fontSize: "24px",
          }}
        >
          🔔

          <span
            style={{
              position: "absolute",
              top: "-5px",
              right: "-8px",
              background: "#ef4444",
              width: "18px",
              height: "18px",
              borderRadius: "50%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: "10px",
            }}
          >
            3
          </span>
        </div>
      </div>
{/* SIDEBAR */}

      {menuOpen && (
        <>
          <div
            onClick={() => setMenuOpen(false)}
            style={{
              position: "fixed",
              inset: 0,
              background: "rgba(0,0,0,0.4)",
              zIndex: 999,
            }}
          />

          <div
            style={{
              position: "fixed",
              top: 0,
              left: 0,
              width: "270px",
              height: "100%",
              background: "#0f172a",
              color: "#fff",
              padding: "20px",
              zIndex: 1000,
            }}
          >
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                marginBottom: "25px",
              }}
            >
              <h3 style={{ margin: 0 }}>
                Admin Menu
              </h3>

              <button
                onClick={() => setMenuOpen(false)}
                style={{
                  background: "none",
                  border: "none",
                  color: "#fff",
                  fontSize: "22px",
                  cursor: "pointer",
                }}
              >
                ✕
              </button>
            </div>

            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "18px",
              }}
            >
              <Link
                href="/admin/dashboard"
                style={menuLink}
              >
                📊 Dashboard
              </Link>

              <Link
                href="/admin/pending-requests"
                style={menuLink}
              >
                📋 Pending Requests
              </Link>

              <Link
                href="/admin/query-status"
                style={menuLink}
              >
                ❓ Query Status
              </Link>

              <Link
                href="/admin/quotation-sent"
                style={menuLink}
              >
                💰 Quotation Sent
              </Link>

              <Link
                href="/admin/policy-register"
                style={menuLink}
              >
                📄 Policy Register
              </Link>

              <Link
                href="/admin/manage-users"
                style={menuLink}
              >
                👥 Manage Users
              </Link>

              <Link
                href="/login"
                style={{
                  ...menuLink,
                  color: "#fca5a5",
                }}
              >
                🚪 Logout
              </Link>
            </div>
          </div>
        </>
      )}

      {/* WELCOME SECTION */}

      <div
        style={{
          background:
            "linear-gradient(135deg,#021024,#032d6a,#0f3f9c)",
          color: "#fff",
          padding: "25px 20px 35px",
        }}
      >
        <h2
          style={{
            margin: 0,
          }}
        >
          Welcome, Admin 👋
        </h2>

        <p
          style={{
            marginTop: "10px",
            opacity: 0.9,
          }}
        >
          Here is your dashboard overview
        </p>
      </div>
{/* STATISTICS CARDS */}

      <div
        style={{
          padding: "20px",
          display: "grid",
          gridTemplateColumns:
            "repeat(auto-fit,minmax(160px,1fr))",
          gap: "15px",
          marginTop: "-20px",
        }}
      >
        {stats.map((item, index) => (
          <Link
            key={index}
            href={item.link}
            style={{
              textDecoration: "none",
            }}
          >
            <div
              style={{
                background: "#fff",
                borderRadius: "18px",
                padding: "20px",
                boxShadow:
                  "0 8px 20px rgba(0,0,0,0.08)",
                borderTop: `5px solid ${item.color}`,
              }}
            >
              <div
                style={{
                  fontSize: "32px",
                  marginBottom: "10px",
                }}
              >
                {item.icon}
              </div>

              <div
                style={{
                  color: "#64748b",
                  fontSize: "13px",
                  marginBottom: "8px",
                }}
              >
                {item.title}
              </div>

              <div
                style={{
                  fontSize: "28px",
                  fontWeight: "bold",
                  color: "#0f172a",
                }}
              >
                {item.count}
              </div>
            </div>
          </Link>
        ))}
      </div>
{/* RECENT ACTIVITIES */}

      <div
        style={{
          margin: "0 20px 20px",
          background: "#fff",
          borderRadius: "18px",
          padding: "20px",
          boxShadow: "0 8px 20px rgba(0,0,0,0.08)",
        }}
      >
        <h3
          style={{
            marginTop: 0,
            color: "#0f172a",
          }}
        >
          Recent Activities
        </h3>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "12px",
          }}
        >
          <div style={activityRow}>
            <span>PROP-00128</span>
            <span>Quotation Sent</span>
          </div>

          <div style={activityRow}>
            <span>PROP-00127</span>
            <span>Reply Received</span>
          </div>

          <div style={activityRow}>
            <span>PROP-00126</span>
            <span>New Request</span>
          </div>

          <div style={activityRow}>
            <span>PROP-00125</span>
            <span>Policy Issued</span>
          </div>
        </div>
      </div>

    </div>
  );
}

const menuLink = {
  color: "#fff",
  textDecoration: "none",
  padding: "12px",
  borderRadius: "10px",
  background: "rgba(255,255,255,0.08)",
};

const activityRow = {
  display: "flex",
  justifyContent: "space-between",
  background: "#f8fafc",
  padding: "12px",
  borderRadius: "10px",
};
