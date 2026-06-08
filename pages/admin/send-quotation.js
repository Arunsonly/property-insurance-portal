import { useState } from "react";

export default function SendQuotation() {
  const [company, setCompany] = useState("");
  const [premium, setPremium] = useState("");

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
        <h2>Send Quotation</h2>
      </div>

      <div
        style={{
          background: "#fff",
          padding: "15px",
          borderRadius: "12px",
          marginBottom: "15px",
        }}
      >
        <p><b>Reference No:</b> PROP-00128</p>
        <p><b>Insured Name:</b> ABC Traders</p>
      </div>

      <div
        style={{
          background: "#fff",
          padding: "15px",
          borderRadius: "12px",
        }}
      >
        <label><b>Insurance Company</b></label>

        <select
          value={company}
          onChange={(e) => setCompany(e.target.value)}
          style={{
            width: "100%",
            padding: "12px",
            marginTop: "8px",
            marginBottom: "15px",
            borderRadius: "8px",
          }}
        >
          <option>Select Company</option>
          <option>Oriental Insurance Co Ltd</option>
        </select>

        <label><b>Premium Amount (₹)</b></label>

        <input
          value={premium}
          onChange={(e) => setPremium(e.target.value)}
          placeholder="Enter Premium"
          style={{
            width: "100%",
            padding: "12px",
            marginTop: "8px",
            marginBottom: "15px",
            borderRadius: "8px",
            border: "1px solid #ddd",
          }}
        />

        <label><b>Coverage</b></label>

        <input
          placeholder="Fire + STFI + EQ"
          style={{
            width: "100%",
            padding: "12px",
            marginTop: "8px",
            marginBottom: "15px",
            borderRadius: "8px",
            border: "1px solid #ddd",
          }}
        />

        <label><b>Remarks</b></label>

        <textarea
          rows="4"
          placeholder="Remarks"
          style={{
            width: "100%",
            padding: "12px",
            marginTop: "8px",
            borderRadius: "8px",
            border: "1px solid #ddd",
          }}
        />
      </div>

      <button
        style={{
          width: "100%",
          marginTop: "20px",
          padding: "16px",
          border: "none",
          borderRadius: "12px",
          background: "#28a745",
          color: "#fff",
          fontSize: "17px",
          fontWeight: "bold",
        }}
      >
        Send Quotation
      </button>
    </div>
  );
          }
