import Link from "next/link";

export default function PendingRequests() {
  const requests = [
    {
      ref: "PROP-00128",
      name: "ABC Traders",
      date: "20/05/2025",
      status: "Pending",
    },
    {
      ref: "PROP-00127",
      name: "XYZ Industries",
      date: "20/05/2025",
      status: "Pending",
    },
    {
      ref: "PROP-00126",
      name: "Kumar Retail",
      date: "19/05/2025",
      status: "Pending",
    },
    {
      ref: "PROP-00125",
      name: "Shree Plastics",
      date: "19/05/2025",
      status: "Pending",
    },
  ];

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "#f4f7fc",
        padding: "15px",
      }}
    >
      {/* Header */}

      <div
        style={{
          background: "#0b3d91",
          color: "#fff",
          padding: "18px",
          borderRadius: "12px",
          marginBottom: "15px",
        }}
      >
        <h2 style={{ margin: 0 }}>Pending Requests</h2>
        <p style={{ marginTop: "5px" }}>
          Review all newly submitted requests
        </p>
      </div>

      {/* Search */}

      <input
        type="text"
        placeholder="Search by Ref No / Insured Name / Mobile"
        style={{
          width: "100%",
          padding: "14px",
          borderRadius: "10px",
          border: "1px solid #ddd",
          marginBottom: "15px",
          fontSize: "15px",
        }}
      />

      {/* Request List */}

      {requests.map((item, index) => (
        <Link
          key={index}
          href="/admin/request-details"
          style={{ textDecoration: "none" }}
        >
          <div
            style={{
              background: "#fff",
              padding: "15px",
              borderRadius: "12px",
              marginBottom: "12px",
              boxShadow: "0 2px 10px rgba(0,0,0,0.08)",
              color: "#111",
            }}
          >
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                marginBottom: "10px",
              }}
            >
              <strong>{item.ref}</strong>

              <span
                style={{
                  background: "#fff3cd",
                  color: "#856404",
                  padding: "4px 10px",
                  borderRadius: "20px",
                  fontSize: "12px",
                }}
              >
                {item.status}
              </span>
            </div>

            <p>
              <strong>Insured Name:</strong> {item.name}
            </p>

            <p>
              <strong>Date:</strong> {item.date}
            </p>

            <div
              style={{
                textAlign: "right",
                color: "#0b3d91",
                fontWeight: "bold",
              }}
            >
              View Details →
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
                  }
