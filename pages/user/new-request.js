import { useState } from "react";

export default function NewRequest() {
  const [riskType, setRiskType] = useState("");
  const [businessActivity, setBusinessActivity] = useState("");

  const handleRiskType = (value) => {
    setRiskType(value);

    switch (value) {
      case "Manufacturing Unit":
        setBusinessActivity("Name of goods manufacturing");
        break;

      case "Godown (Open)":
        setBusinessActivity("Name of goods storage");
        break;

      case "Godown (Closed)":
        setBusinessActivity("Name of goods storage");
        break;

      case "Retail Shop":
        setBusinessActivity(
          "Name of goods selling (kirana, electric, puncture shop etc)"
        );
        break;

      case "Other":
        setBusinessActivity("Enter the business activities details");
        break;

      default:
        setBusinessActivity("");
    }
  };

  return (
    <div
      style={{
        background: "#f4f7fc",
        minHeight: "100vh",
        padding: "20px",
      }}
    >
      <div
        style={{
          background: "#0b3d91",
          color: "#fff",
          padding: "25px",
          borderRadius: "20px",
          marginBottom: "20px",
        }}
      >
        <h1>New Request</h1>
        <p>Submit Property Insurance Requirement</p>
      </div>

      <div
        style={{
          background: "#fff",
          padding: "20px",
          borderRadius: "20px",
          marginBottom: "20px",
        }}
      >
        <h2>Basic Details</h2>

        <input
          placeholder="Insured Name"
          style={inputStyle}
        />

        <textarea
          placeholder="Communication Address"
          style={textareaStyle}
        />

        <input
          placeholder="Mobile Number"
          style={inputStyle}
        />
      </div>

      <div
        style={{
          background: "#fff",
          padding: "20px",
          borderRadius: "20px",
          marginBottom: "20px",
        }}
      >
        <h2>Risk Details</h2>

        <input
          placeholder="Enter at least district name for EQ rate confirmation"
          style={inputStyle}
        />

        <select
          value={riskType}
          onChange={(e) => handleRiskType(e.target.value)}
          style={inputStyle}
        >
          <option value="">Select Risk Type</option>

          <option>Manufacturing Unit</option>
          <option>Godown (Open)</option>
          <option>Godown (Closed)</option>
          <option>Retail Shop</option>
          <option>Other</option>
        </select>

        <textarea
          value={businessActivity}
          onChange={(e) => setBusinessActivity(e.target.value)}
          placeholder="Business Activity"
          style={textareaStyle}
        />

        <select style={inputStyle}>
          <option value="">
            Select Coverage Required
          </option>

          <option>
            Fire + STFI + EQ
          </option>

          <option>
            Fire + STFI + EQ + Burglary
          </option>

          <option>
            Fire + STFI + EQ + Terrorism
          </option>

          <option>
            Fire + STFI + EQ + Terrorism + Burglary
          </option>
        </select>

        <input
          placeholder="Enter total sum insured"
          style={inputStyle}
        />
      </div>

      <div
        style={{
          background: "#fff",
          padding: "20px",
          borderRadius: "20px",
          marginBottom: "20px",
        }}
      >
        <h2>Upload Documents</h2>

        <label>
          Proposal Form
          <input
            type="file"
            style={fileStyle}
          />
        </label>

        <label>
          Risk Photos
          <input
            type="file"
            style={fileStyle}
          />
        </label>

        <label>
          Previous Policy (Optional)
          <input
            type="file"
            style={fileStyle}
          />
        </label>
      </div>

      <button
        style={{
          width: "100%",
          background: "#16a34a",
          color: "#fff",
          border: "none",
          padding: "18px",
          borderRadius: "15px",
          fontSize: "18px",
          fontWeight: "bold",
        }}
      >
        Submit Request
      </button>
    </div>
  );
}

const inputStyle = {
  width: "100%",
  padding: "15px",
  marginTop: "12px",
  marginBottom: "12px",
  borderRadius: "12px",
  border: "1px solid #ddd",
  fontSize: "16px",
};

const textareaStyle = {
  width: "100%",
  minHeight: "100px",
  padding: "15px",
  marginTop: "12px",
  marginBottom: "12px",
  borderRadius: "12px",
  border: "1px solid #ddd",
  fontSize: "16px",
};

const fileStyle = {
  width: "100%",
  marginTop: "10px",
  marginBottom: "20px",
};
