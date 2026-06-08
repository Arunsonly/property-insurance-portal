import Link from "next/link";

export default function AdminDashboard() {
  const cards = [
    {
      title: "Pending Requests",
      link: "/admin/pending-requests",
      color: "#f59e0b",
    },
    {
      title: "Query Status",
      link: "/admin/query-status",
      color: "#8b5cf6",
    },
    {
      title: "Quotation Sent",
      link: "/admin/quotation-sent",
      color: "#10b981",
    },
    {
      title: "Policy Register",
      link: "/admin/policy-register",
      color: "#3b82f6",
    },
    {
      title: "Manage Users",
      link: "/admin/manage-users",
      color: "#ef4444",
    },
  ];

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "#f4f6fb",
        padding: "20px",
      }}
    >
      <h1
        style={{
          textAlign: "center",
          marginBottom: "25px",
          color: "#0f172a",
        }}
      >
        Admin Dashboard
      </h1>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit,minmax(160px,1fr))",
          gap: "15px",
        }}
      >
        {cards.map((card, index) => (
          <Link
            key={index}
            href={card.link}
            style={{
              textDecoration: "none",
            }}
          >
            <div
              style={{
                background: "#fff",
                borderRadius: "15px",
                padding: "25px 15px",
                textAlign: "center",
                boxShadow: "0 4px 15px rgba(0,0,0,0.08)",
                borderTop: `5px solid ${card.color}`,
              }}
            >
              <h3
                style={{
                  color: "#1e293b",
                  margin: 0,
                }}
              >
                {card.title}
              </h3>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
