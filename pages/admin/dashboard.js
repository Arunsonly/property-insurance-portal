import Link from "next/link";

export default function AdminDashboard() {
  const cards = [
    {
      title: "Pending Requests",
      link: "/admin/pending-requests",
    },
    {
      title: "Query Status",
      link: "/admin/query-status",
    },
    {
      title: "Quotation Sent",
      link: "/admin/quotation-sent",
    },
    {
      title: "Policy Register",
      link: "/admin/policy-register",
    },
    {
      title: "Manage Users",
      link: "/admin/manage-users",
    },
  ];

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "#f5f7fb",
        padding: "20px",
      }}
    >
      <h1
        style={{
          textAlign: "center",
          marginBottom: "30px",
        }}
      >
        Admin Dashboard
      </h1>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit,minmax(250px,1fr))",
          gap: "20px",
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
                background: "#ffffff",
                padding: "25px",
                borderRadius: "12px",
                boxShadow: "0 2px 10px rgba(0,0,0,0.1)",
                textAlign: "center",
                cursor: "pointer",
              }}
            >
              <h2>{card.title}</h2>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
