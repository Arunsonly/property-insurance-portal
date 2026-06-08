import { useState } from "react";

export default function NewRequest() {
  const [riskType, setRiskType] = useState("");
  const [businessActivity, setBusinessActivity] = useState("");

  return (
    <div style={{ padding: "20px" }}>

      <h2>New Request</h2>

      {/* Communication Address */}
      <div style={{ marginBottom: "20px" }}>
        <label>Communication Address</label>

        <textarea
          placeholder="Enter communication address"
          style={{
            width: "100%",
            padding: "14px",
            borderRadius: "12px",
            border: "1px solid #ddd",
            minHeight: "80px",
          }}
        />
      </div>

      {/* Risk Location */}
      <div style={{ marginBottom: "20px" }}>
        <label>Risk Location</label>

        <input
          type="text"
          placeholder="Enter at least district name for EQ rate confirmation"
          style={{
            width: "100%",
            padding: "14px",
            borderRadius: "12px",
            border: "1px solid #ddd",
          }}
        />
      </div>

      {/* Risk Type */}
      <div style={{ marginBottom: "20px" }}>
        <label>Risk Type</label>

        <select
          value={riskType}
          onChange={(e) => {
            const value = e.target.value;
            setRiskType(value);

            if (value === "Manufacturing Unit") {
              setBusinessActivity("Name of goods manufacturing");
            } else if (
              value === "Godown (Open)" ||
              value === "Godown (Closed)"
            ) {
              setBusinessActivity("Name of goods storage");
            } else if (value === "Retail Shop") {
              setBusinessActivity(
                "Name of Goods selling (Kirana, Electric, Puncture Shop etc.)"
              );
            } else if (value === "Other") {
              setBusinessActivity(
                "Enter the business activities details"
              );
            } else {
              setBusinessActivity("");
            }
          }}
          style={{
            width: "100%",
            padding: "14px",
            borderRadius: "12px",
            border: "1px solid #ddd",
          }}
        >
          <option value="">Select Risk Type</option>
          <option>Manufacturing Unit</option>
          <option>Godown (Open)</option>
          <option>Godown (Closed)</option>
          <option>Retail Shop</option>
          <option>Other</option>
        </select>
      </div>

      {/* Business Activity */}
      <div style={{ marginBottom: "20px" }}>
        <label>Business Activity</label>

        <input
          type="text"
          placeholder={businessActivity}
          style={{
            width: "100%",
            padding: "14px",
            borderRadius: "12px",
            border: "1px solid #ddd",
          }}
        />
      </div>

      {/* Sum Insured */}
      <div style={{ marginBottom: "20px" }}>
        <label>Sum Insured (₹)</label>

        <input
          type="number"
          placeholder="Enter total sum insured"
          style={{
            width: "100%",
            padding: "14px",
            borderRadius: "12px",
            border: "1px solid #ddd",
          }}
        />
      </div>

      {/* Coverage */}
      <div style={{ marginBottom: "20px" }}>
        <label>Coverage Required</label>

        <select
          style={{
            width: "100%",
            padding: "14px",
            borderRadius: "12px",
            border: "1px solid #ddd",
          }}
        >
          <option>Select Coverage</option>
          <option>Fire + STFI + EQ</option>
          <option>Fire + STFI + EQ + Burglary</option>
          <option>Fire + STFI + EQ + Terrorism</option>
          <option>Fire + STFI + EQ + Terrorism + Burglary</option>
        </select>
      </div>

    </div>
  );
}
