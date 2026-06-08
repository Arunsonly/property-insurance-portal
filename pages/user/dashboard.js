import { useState } from "react";

export default function NewRequest() {
  const [riskType, setRiskType] = useState("");
  const [businessPlaceholder, setBusinessPlaceholder] =
    useState("");

  const handleRiskType = (value) => {
    setRiskType(value);

    if (value === "Manufacturing Unit") {
      setBusinessPlaceholder(
        "Name of goods manufacturing"
      );
    } else if (
      value === "Godown (Open)" ||
      value === "Godown (Closed)"
    ) {
      setBusinessPlaceholder(
        "Name of goods storage"
      );
    } else if (value === "Retail Shop") {
      setBusinessPlaceholder(
        "Name of Goods selling (Kirana, Electric, Puncture Shop etc.)"
      );
    } else if (value === "Other") {
      setBusinessPlaceholder(
        "Enter the business activities details"
      );
    } else {
      setBusinessPlaceholder("");
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
      {/* Header */}

      <div
        style={{
          background: "#0b3d91",
          color: "#fff",
          padding: "25px",
          borderRadius: "20px",
          marginBottom: "20px",
        }}
      >
        <h1 style={{ margin: 0 }}>
          New Request
        </h1>

        <p style={{ marginTop: "10px" }}>
          Submit Property Insurance Request
        </p>
      </div>

      {/* Form */}

      <div
        style={{
          background: "#fff",
          borderRadius: "20px",
          padding: "20px",
          boxShadow:
            "0 2px 10px rgba(0,0,0,0.08)",
        }}
      >
        <h2>Basic Details</h2>

        <input
          type="text"
          placeholder="Insured Name"
          style={inputStyle}
        />

        <textarea
          placeholder="Communication Address"
          style={{
            ...inputStyle,
            height: "90px",
          }}
        />

        <input
          type="text"
          placeholder="Mobile Number"
          style={inputStyle}
        />

        <h2>Risk Details</h2>

        <input
          type="text"
          placeholder="Enter at least district name for EQ rate confirmation"
          style={inputStyle}
        />

        <select
          value={riskType}
          onChange={(e) =>
            handleRiskType(e.target.value)
          }
          style={inputStyle}
        >
          <option value="">
            Select Risk Type
          </option>

          <option>
            Manufacturing Unit
          </option>

          <option>
            Godown (Open)
          </option>

          <option>
            Godown (Closed)
          </option>

          <option>
            Retail Shop
          </option>

          <option>
            Other
          </option>
        </select>

        <input
          type="text"
          placeholder={businessPlaceholder}
          style={inputStyle}
        />

        <input
          type="number"
          placeholder="Enter Total Sum Insured"
          style={inputStyle}
        />

        <select style={inputStyle}>
          <option>
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
            Fire + STFI + EQ + Terrorism +
            Burglary
          </option>
        </select>

        <h2>Documents</h2>

        <div
          style={{
            border:
              "2px dashed #cbd5e1",
            borderRadius: "15px",
            padding: "20px",
            marginBottom: "20px",
            textAlign: "center",
          }}
        >
          <input type="file" />

          <p>
            Upload Proposal Form /
            Photos / Previous Policy
          </p>
        </div>

        <button
          style={{
            width: "100%",
            background: "#22c55e",
            color: "#fff",
            border: "none",
            padding: "16px",
            borderRadius: "12px",
            fontSize: "18px",
            fontWeight: "bold",
          }}
        >
          Submit Request
        </button>
      </div>
    </div>
  );
}

const inputStyle = {
  width: "100%",
  padding: "14px",
  marginBottom: "15px",
  borderRadius: "12px",
  border: "1px solid #d1d5db",
  fontSize: "15px",
};
