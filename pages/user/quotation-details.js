export default function QuotationDetails() {
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
          background: "linear-gradient(135deg,#0b3d91,#2563eb)",
          color: "#fff",
          padding: "30px",
          borderRadius: "24px",
          marginBottom: "20px",
          boxShadow: "0 15px 30px rgba(37,99,235,.25)",
        }}
      >
        <h1 style={{ margin: 0 }}>
          💰 Quotation Details
        </h1>

        <p style={{ marginTop: "10px" }}>
          Review quotation received from insurer
        </p>
      </div>

      {/* Reference */}
      <div
        style={{
          background: "#fff",
          borderRadius: "24px",
          padding: "24px",
          marginBottom: "20px",
          boxShadow: "0 10px 25px rgba(0,0,0,.08)",
        }}
      >
        <h2>PROP-00128</h2>

        <p>
          <strong>Insured Name:</strong> ABC Traders
        </p>

        <p>
          <strong>Risk Location:</strong> Indore
        </p>

        <p>
          <strong>Sum Insured:</strong> ₹50,00,000
        </p>
      </div>

      {/* Quotation Card */}
      <div
        style={{
          background: "#fff",
          borderRadius: "24px",
          padding: "24px",
          marginBottom: "20px",
          boxShadow: "0 10px 25px rgba(0,0,0,.08)",
        }}
      >
        <h2>Quotation Offered</h2>

        <p>
          <strong>Insurance Company:</strong>
          <br />
          Oriental Insurance Co. Ltd.
        </p>

        <p>
          <strong>Coverage:</strong>
          <br />
          Fire + STFI + EQ
        </p>

        <p>
          <strong>Premium Amount:</strong>
          <br />
          ₹54,200
        </p>

        <p>
          <strong>Validity:</strong>
          <br />
          15 Days
        </p>
      </div>

      {/* Remarks */}
      <div
        style={{
          background: "#fff",
          borderRadius: "24px",
          padding: "24px",
          marginBottom: "20px",
          boxShadow: "0 10px 25px rgba(0,0,0,.08)",
        }}
      >
        <h2>Remarks</h2>

        <div
          style={{
            background: "#f8fafc",
            padding: "15px",
            borderRadius: "12px",
            border: "1px solid #e5e7eb",
          }}
        >
          Premium inclusive of all applicable taxes.
        </div>
      </div>

      {/* Buttons */}
      <button
        style={{
          width: "100%",
          background: "#22c55e",
          color: "#fff",
          border: "none",
          padding: "16px",
          borderRadius: "14px",
          fontSize: "17px",
          fontWeight: "700",
          marginBottom: "15px",
          cursor: "pointer",
        }}
      >
        ✅ Accept Quotation
      </button>

      <button
        style={{
          width: "100%",
          background: "#ef4444",
          color: "#fff",
          border: "none",
          padding: "16px",
          borderRadius: "14px",
          fontSize: "17px",
          fontWeight: "700",
          cursor: "pointer",
        }}
      >
        ❌ Reject Quotation
      </button>
    </div>
  );
}
