export default function RequestDetails() {
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
          boxShadow: "0 15px 30px rgba(37,99,235,.25)",
        }}
      >
        <h1 style={{ margin: 0 }}>
          📄 Request Details
        </h1>

        <p style={{ marginTop: 10 }}>
          Track your insurance request
        </p>
      </div>

      {/* Request Info */}
      <div
        style={{
          background: "#fff",
          padding: "24px",
          borderRadius: "24px",
          marginBottom: "20px",
          boxShadow: "0 10px 25px rgba(0,0,0,.08)",
        }}
      >
        <h2>PROP-00128</h2>

        <p>
          <strong>Status:</strong>{" "}
          <span
            style={{
              background: "#f59e0b",
              color: "#fff",
              padding: "6px 12px",
              borderRadius: "999px",
            }}
          >
            Pending
          </span>
        </p>

        <p>
          <strong>Insured Name:</strong> ABC Traders
        </p>

        <p>
          <strong>Risk Location:</strong> Indore
        </p>

        <p>
          <strong>Coverage:</strong> Fire + STFI + EQ
        </p>

        <p>
          <strong>Sum Insured:</strong> ₹50,00,000
        </p>
      </div>

      {/* Timeline */}
      <div
        style={{
          background: "#fff",
          padding: "24px",
          borderRadius: "24px",
          marginBottom: "20px",
          boxShadow: "0 10px 25px rgba(0,0,0,.08)",
        }}
      >
        <h2>Request Timeline</h2>

        <p>✅ Request Submitted</p>

        <p>✅ Under Review</p>

        <p>⏳ Awaiting Quotation</p>

        <p>⬜ Policy Issuance Pending</p>
      </div>

      {/* Query Section */}
      <div
        style={{
          background: "#fff",
          padding: "24px",
          borderRadius: "24px",
          marginBottom: "20px",
          boxShadow: "0 10px 25px rgba(0,0,0,.08)",
        }}
      >
        <h2>Latest Query</h2>

        <div
          style={{
            background: "#faf5ff",
            padding: "15px",
            borderRadius: "12px",
            border: "1px solid #d8b4fe",
          }}
        >
          Kindly upload previous policy copy.
        </div>
      </div>

      {/* Quotation */}
      <div
        style={{
          background: "#fff",
          padding: "24px",
          borderRadius: "24px",
          marginBottom: "20px",
          boxShadow: "0 10px 25px rgba(0,0,0,.08)",
        }}
      >
        <h2>Quotation</h2>

        <p>Quotation not received yet.</p>
      </div>

      {/* Policy */}
      <div
        style={{
          background: "#fff",
          padding: "24px",
          borderRadius: "24px",
          boxShadow: "0 10px 25px rgba(0,0,0,.08)",
        }}
      >
        <h2>Policy Document</h2>

        <button
          style={{
            width: "100%",
            background: "#22c55e",
            color: "#fff",
            border: "none",
            padding: "15px",
            borderRadius: "12px",
            fontSize: "16px",
            fontWeight: "600",
          }}
        >
          Download Policy
        </button>
      </div>
    </div>
  );
}
