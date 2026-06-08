import Link from "next/link";

export default function RequestDetails() {
  return (
    <div
      style={{
        minHeight: "100vh",
        background: "#f4f7fc",
        padding: "15px",
      }}
    >
      <div
        style={{
          background: "#0b3d91",
          color: "#fff",
          padding: "18px",
          borderRadius: "12px",
          marginBottom: "15px",
        }}
      >
        <h2>Request Details</h2>
      </div>

      <div
        style={{
          background: "#fff",
          padding: "18px",
          borderRadius: "15px",
          marginBottom: "15px",
        }}
      >
        <p><b>Reference No:</b> PROP-00128</p>
        <p><b>Insured Name:</b> ABC Traders</p>
        <p><b>Mobile:</b> 9876543210</p>
        <p><b>Address:</b> Indore, Madhya Pradesh</p>
      </div>

      <div
        style={{
          background: "#fff",
          padding: "18px",
          borderRadius: "15px",
          marginBottom: "20px",
        }}
      >
        <h3>Risk Details</h3>

        <p><b>Risk Location:</b> Indore</p>
        <p><b>Risk Type:</b> Manufacturing Unit</p>
        <p><b>Business Activity:</b> Plastic Items</p>
        <p><b>Sum Insured:</b> ₹50,00,000</p>
        <p><b>Coverage:</b> Fire + STFI + EQ</p>
      </div>

      <div
        style={{
          display: "grid",
          gap: "12px",
        }}
      >
        <Link href="/admin/raise-query">
          <button
            style={{
              width: "100%",
              padding: "15px",
              border: "none",
              borderRadius: "10px",
              background: "#6f42c1",
              color: "#fff",
              fontSize: "16px",
            }}
          >
            Raise Query
          </button>
        </Link>

        <Link href="/admin/send-quotation">
          <button
            style={{
              width: "100%",
              padding: "15px",
              border: "none",
              borderRadius: "10px",
              background: "#28a745",
              color: "#fff",
              fontSize: "16px",
            }}
          >
            Send Quotation
          </button>
        </Link>

        <button
          style={{
            width: "100%",
            padding: "15px",
            border: "none",
            borderRadius: "10px",
            background: "#dc3545",
            color: "#fff",
            fontSize: "16px",
          }}
        >
          Reject Request
        </button>
      </div>
    </div>
  );
              }
