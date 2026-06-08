import { useState } from "react";
import Link from "next/link";

export default function AdminDashboard() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div style={{ background: "#f4f7fc", minHeight: "100vh" }}>

      {/* Header */}
      <div
        style={{
          background: "#0b3d91",
          color: "#fff",
          padding: "15px",
          display: "flex",
          alignItems: "center",
          gap: "15px",
        }}
      >
        <button
          onClick={() => setMenuOpen(true)}
          style={{
            fontSize: "24px",
            background: "none",
            border: "none",
            color: "#fff",
            cursor: "pointer",
          }}
        >
          ☰
        </button>

        <div>
          <h2 style={{ margin: 0 }}>Property Insurance Portal</h2>
          <small>Admin Panel</small>
        </div>
      </div>

      {/* Sidebar */}
      {menuOpen && (
        <>
          <div
            onClick={() => setMenuOpen(false)}
            style={{
              position: "fixed",
              inset: 0,
              background: "rgba(0,0,0,0.4)",
            }}
          />

          <div
            style={{
              position: "fixed",
              top: 0,
              left: 0,
              width: "260px",
              height: "100%",
              background: "#0b3d91",
              color: "#fff",
              padding: "20px",
              zIndex: 1000,
            }}
          >
            <h3>Admin Menu</h3>

            <div style={{ display: "flex", flexDirection: "column", gap: "15px" }}>

              <Link href="/admin/dashboard" style={{ color: "#fff", textDecoration: "none" }}>
                Dashboard
              </Link>

              <Link href="/admin/pending-requests" style={{ color: "#fff", textDecoration: "none" }}>
                Pending Requests
              </Link>

              <Link href="/admin/query-status" style={{ color: "#fff", textDecoration: "none" }}>
                Query Status
              </Link>

              <Link href="/admin/quotation-sent" style={{ color: "#fff", textDecoration: "none" }}>
                Quotation Sent
              </Link>

              <Link href="/admin/policy-register" style={{ color: "#fff", textDecoration: "none" }}>
                Policy Register
              </Link>

              <Link href="/admin/manage-users" style={{ color: "#fff", textDecoration: "none" }}>
                Manage Users
              </Link>

              <Link
                href="/login"
                style={{
                  color: "#ffb4b4",
                  textDecoration: "none",
                  marginTop: "20px",
                }}
              >
                Logout
              </Link>
            </div>
          </div>
        </>
      )}

      {/* Welcome Section */}
      <div
        style={{
          background: "#0b3d91",
          color: "#fff",
          padding: "20px",
        }}
      >
        <h2>Welcome, Admin 👋</h2>
        <p>Here is your dashboard overview</p>
      </div>

      {/* Cards */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(2,1fr)",
          gap: "15px",
          padding: "20px",
        }}
      >
        <Link href="/admin/pending-requests" style={{ textDecoration: "none" }}>
          <div style={cardStyle}>
            <h3>18</h3>
            <p>Pending Requests</p>
          </div>
        </Link>

        <Link href="/admin/query-status" style={{ textDecoration: "none" }}>
          <div style={cardStyle}>
            <h3>07</h3>
            <p>Queries Pending</p>
          </div>
        </Link>

        <Link href="/admin/quotation-sent" style={{ textDecoration: "none" }}>
          <div style={cardStyle}>
            <h3>11</h3>
            <p>Quotations Sent</p>
          </div>
        </Link>

        <Link href="/admin/policy-register" style={{ textDecoration: "none" }}>
          <div style={cardStyle}>
            <h3>23</h3>
            <p>Policies Issued</p>
          </div>
        </Link>
      </div>

      {/* Activity */}
      <div
        style={{
          background: "#fff",
          margin: "20px",
          padding: "20px",
          borderRadius: "15px",
        }}
      >
        <h3>Recent Activities</h3>

        <p>PROP-00128 - Quotation Sent</p>
        <p>PROP-00127 - Reply Received</p>
        <p>PROP-00126 - New Request</p>
        <p>PROP-00125 - Policy Issued</p>
      </div>
    </div>
  );
}

const cardStyle = {
  background: "#fff",
  borderRadius: "15px",
  padding: "20px",
  textAlign: "center",
  color: "#111",
  boxShadow: "0 2px 10px rgba(0,0,0,0.08)",
};
