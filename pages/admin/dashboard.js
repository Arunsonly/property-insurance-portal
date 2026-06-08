import Link from "next/link";

export default function AdminDashboard() {
  const cards = [
    {
      title: "Pending Requests",
      count: "18",
      link: "/admin/pending-requests",
      color: "#f59e0b",
    },
    {
      title: "Queries Pending",
      count: "07",
      link: "/admin/query-status",
      color: "#8b5cf6",
    },
    {
      title: "Quotations Sent",
      count: "11",
      link: "/admin/quotation-sent",
      color: "#10b981",
    },
    {
      title: "Policies Issued",
      count: "23",
      link: "/admin/policy-register",
      color: "#3b82f6",
    },
  ];

  return (
    <div style={{ minHeight: "100vh", background: "#f4f7fc" }}>

      <div
        style={{
          background: "#0b3d91",
          color: "#fff",
          padding: "20px",
        }}
      >
        <h2 style={{ margin: 0 }}>Property Insurance Portal</h2>
        <p style={{ marginTop: "8px" }}>Admin Panel</p>

        <h3 style={{ marginTop: "20px" }}>
          Welcome, Admin 👋
        </h3>

        <p>Here is your dashboard overview</p>
      </div>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit,minmax(160px,1fr))",
          gap: "15px",
          padding: "20px",
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
                borderRadius: "15px",
                padding: "20px",
                textAlign: "center",
                boxShadow: "0 4px 15px rgba(0,0,0,0.08)",
              }}
            >
              <div
                style={{
                  color: card.color,
                  fontWeight: "bold",
                  fontSize: "15px",
                }}
              >
                {card.title}
              </div>

              <h1
                style={{
                  margin: "10px 0",
                  color: "#111827",
                }}
              >
                {card.count}
              </h1>

              <small>View All</small>
            </div>
          </Link>
        ))}
      </div>

      <div
        style={{
          background: "#fff",
          margin: "0 20px 20px",
          borderRadius: "15px",
          padding: "20px",
          boxShadow: "0 4px 15px rgba(0,0,0,0.08)",
        }}
      >
        <h3>Recent Activities</h3>

        <table
          style={{
            width: "100%",
            borderCollapse: "collapse",
          }}
        >
          <tbody>
            <tr>
              <td>PROP-00128</td>
              <td>Quotation Sent</td>
              <td>2 min ago</td>
            </tr>

            <tr>
              <td>PROP-00127</td>
              <td>Reply Received</td>
              <td>15 min ago</td>
            </tr>

            <tr>
              <td>PROP-00126</td>
              <td>New Request</td>
              <td>1 hr ago</td>
            </tr>

            <tr>
              <td>PROP-00125</td>
              <td>Policy Issued</td>
              <td>2 hrs ago</td>
            </tr>
          </tbody>
        </table>
      </div>

    </div>
  );
}
