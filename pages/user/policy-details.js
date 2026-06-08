export default function PolicyDetails() {
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
          🛡️ Policy Details
        </h1>

        <p style={{ marginTop: "10px" }}>
          Your insurance policy information
        </p>
      </div>

      {/* Status */}
      <div
        style={{
          background: "#dcfce7",
          color: "#166534",
          padding: "15px",
          borderRadius: "14px",
          fontWeight: "700",
          textAlign: "center",
          marginBottom: "20px",
          border: "1px solid #86efac",
        }}
      >
        ✅ Policy Active
      </div>

      {/* Policy Info */}
      <div
        style={{
          background: "#fff",
          borderRadius: "24px",
          padding: "24px",
          marginBottom: "20px",
          boxShadow: "0 10px 25px rgba(0,0,0,.08)",
        }}
      >
        <h2>Policy Information</h2>

        <p>
          <strong>Policy Number:</strong>
          <br />
          OIC/FIRE/2025/00128
        </p>

        <p>
          <strong>Insurance Company:</strong>
          <br />
          Oriental Insurance Co. Ltd.
        </p>

        <p>
          <strong>Insured Name:</strong>
          <br />
          ABC Traders
        </p>

        <p>
          <strong>Risk Location:</strong>
          <br />
          Indore, Madhya Pradesh
        </p>
      </div>

      {/* Coverage */}
      <div
        style={{
          background: "#fff",
          borderRadius: "24px",
          padding: "24px",
          marginBottom: "20px",
          boxShadow: "0 10px 25px rgba(0,0,0,.08)",
        }}
      >
        <h2>Coverage Details</h2>

        <p>
          <strong>Coverage:</strong>
          <br />
          Fire + STFI + EQ
        </p>

        <p>
          <strong>Sum Insured:</strong>
          <br />
          ₹50,00,000
        </p>

        <p>
          <strong>Premium Paid:</strong>
          <br />
          ₹54,200
        </p>
      </div>

      {/* Policy Period */}
      <div
        style={{
          background: "#fff",
          borderRadius: "24px",
          padding: "24px",
          marginBottom: "20px",
          boxShadow: "0 10px 25px rgba(0,0,0,.08)",
        }}
      >
        <h2>Policy Period</h2>

        <p>
          <strong>Start Date:</strong>
          <br />
          01-Jun-2025
        </p>

        <p>
          <strong>Expiry Date:</strong>
          <br />
          31-May-2026
        </p>
      </div>

      {/* Download Buttons */}
      <button
        style={{
          width: "100%",
          background: "#2563eb",
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
        📄 Download Policy PDF
      </button>

      <button
        style={{
          width: "100%",
          background: "#16a34a",
          color: "#fff",
          border: "none",
          padding: "16px",
          borderRadius: "14px",
          fontSize: "17px",
          fontWeight: "700",
          cursor: "pointer",
        }}
      >
        🧾 Download Receipt
      </button>
    </div>
  );
}
