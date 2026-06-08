import Link from "next/link";

export default function UserDashboard() {
  const cards = [
    {
      title: "New Request",
      link: "/user/new-request",
    },
    {
      title: "Query Received",
      link: "/user/query-received",
    },
    {
      title: "Quotation Received",
      link: "/user/quotation-received",
    },
    {
      title: "Policy Register",
      link: "/user/policy-register",
    },
    {
      title: "Expiry Register",
      link: "/user/expiry-register",
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
        User Dashboard
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
            style={{ textDecoration: "none" }}
          >
            <div
              style={{
                background: "#fff",
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
