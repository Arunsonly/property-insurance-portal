import Link from "next/link";

export default function MyRequests() {
  const requests = [
    {
      refNo: "PROP-00128",
      date: "20/05/2025",
      status: "Pending",
      color: "#f59e0b",
    },
    {
      refNo: "PROP-00127",
      date: "19/05/2025",
      status: "Query Raised",
      color: "#8b5cf6",
    },
    {
      refNo: "PROP-00126",
      date: "18/05/2025",
      status: "Quotation Received",
      color: "#2563eb",
    },
    {
      refNo: "PROP-00125",
      date: "17/05/2025",
      status: "Policy Issued",
      color: "#22c55e",
    },
  ];

  return (
    <div
      style={{
        background: "#f4f7fc",
        minHeight: "100vh",
        padding: "20px",
        maxWidth: "700px",
        margin: "0 auto",
      }}
    >
      {/* Header */}
      <div
        style={{
          background:
            "linear-gradient(135deg,#0b3d91,#2563eb)",
          color: "#fff",
          padding: "30px",
          borderRadius: "24px",
          marginBottom: "20px",
          boxShadow:
            "0 15px 30px rgba(37,99,235,.25)",
        }}
      >
        <h1 style={{ margin: 0 }}>
          📋 My Requests
        </h1>

        <p
          style={{
            marginTop: "10px",
            opacity: "0.9",
          }}
        >
          View all submitted requests
        </p>
      </div>

      {/* Search */}
      <input
        type="text"
        placeholder="Search by Reference No"
        style={{
          width: "100%",
          boxSizing: "border-box",
          padding: "15px",
          borderRadius: "14px",
          border: "1px solid #ddd",
          marginBottom: "20px",
          fontSize: "16px",
          background: "#fff",
        }}
      />

      {/* Request Cards */}
      {requests.map((item, index) => (
        <div
          key={index}
          style={{
            background: "#fff",
            borderRadius: "24px",
            padding: "22px",
            marginBottom: "18px",
            boxShadow:
              "0 10px 25px rgba(0,0,0,0.08)",
          }}
        >
          <h2
            style={{
              marginTop: 0,
              color: "#111827",
            }}
          >
            {item.refNo}
          </h2>

          <p>
            <strong>Date:</strong> {item.date}
          </p>

          <div
            style={{
              display: "inline-block",
              background: item.color,
              color: "#fff",
              padding: "8px 14px",
              borderRadius: "999px",
              fontWeight: "600",
              marginTop: "10px",
            }}
          >
            {item.status}
          </div>

          <div style={{ marginTop: "18px" }}>
            <Link
              href="/user/request-details"
              style={{
                color: "#2563eb",
                textDecoration: "none",
                fontWeight: "700",
              }}
            >
              View Details →
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
          }
