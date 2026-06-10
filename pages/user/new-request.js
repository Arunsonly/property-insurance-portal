import { useState } from "react";
import { database } from "../../lib/firebase";
import { ref, push } from "firebase/database";

export default function NewRequest() {
  const [insuredName, setInsuredName] = useState("");
const [address, setAddress] = useState("");
const [mobile, setMobile] = useState("");
const [riskLocation, setRiskLocation] = useState("");
const [coverage, setCoverage] = useState("");
const [sumInsured, setSumInsured] = useState("");
  const [riskType, setRiskType] = useState("");
  const [businessActivity, setBusinessActivity] = useState("");

  const handleRiskType = (value) => {
    const handleSubmit = async () => {
  try {
    const requestData = {
      requestNo: "PROP-" + Date.now(),
      insuredName,
      address,
      mobile,
      riskLocation,
      riskType,
      businessActivity,
      coverage,
      sumInsured,
      status: "Pending",
      createdAt: new Date().toISOString(),
    };

    await push(
      ref(database, "requests"),
      requestData
    );

    alert("Request Submitted Successfully");

    setInsuredName("");
    setAddress("");
    setMobile("");
    setRiskLocation("");
    setRiskType("");
    setBusinessActivity("");
    setCoverage("");
    setSumInsured("");
  } catch (error) {
    console.error(error);
    alert("Error submitting request");
  }
};
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
          🏢 New Property Request
        </h1>

        <p
          style={{
            marginTop: "10px",
            opacity: "0.9",
          }}
        >
          Submit Property Insurance Requirement
        </p>
      </div>

      {/* Basic Details */}
      <div style={cardStyle}>
        <h2 style={{ color: "#0b3d91" }}>
          👤 Basic Details
        </h2>

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

      {/* Risk Details */}
      <div style={cardStyle}>
        <h2 style={{ color: "#0b3d91" }}>
          🏭 Risk Details
        </h2>

        <input
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

        <textarea
          value={businessActivity}
          onChange={(e) =>
            setBusinessActivity(e.target.value)
          }
          placeholder="Business Activity"
          style={textareaStyle}
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
            Fire + STFI + EQ + Terrorism + Burglary
          </option>
        </select>

        <input
          placeholder="Enter total sum insured"
          style={inputStyle}
        />
      </div>

      {/* Upload Documents */}
      <div style={cardStyle}>
        <h2 style={{ color: "#0b3d91" }}>
          📎 Upload Documents
        </h2>

        <div style={uploadBox}>
          <strong>
            Proposal Form
          </strong>
          <input
            type="file"
            style={fileStyle}
          />
        </div>

        <div style={uploadBox}>
          <strong>
            Risk Photos
          </strong>
          <input
            type="file"
            style={fileStyle}
          />
        </div>

        <div style={uploadBox}>
          <strong>
            Previous Policy (Optional)
          </strong>
          <input
            type="file"
            style={fileStyle}
          />
        </div>
      </div>

      {/* Submit */}
      <button
        style={{
          width: "100%",
          padding: "18px",
          border: "none",
          borderRadius: "16px",
          background:
            "linear-gradient(135deg,#16a34a,#22c55e)",
          color: "#fff",
          fontSize: "18px",
          fontWeight: "700",
          boxShadow:
            "0 10px 20px rgba(34,197,94,0.25)",
          cursor: "pointer",
        }}
      >
        🚀 Submit Request
      </button>
    </div>
  );
}

const cardStyle = {
  background: "#fff",
  padding: "25px",
  borderRadius: "24px",
  marginBottom: "20px",
  boxShadow:
    "0 10px 25px rgba(0,0,0,0.08)",
};

const inputStyle = {
  width: "100%",
  boxSizing: "border-box",
  padding: "15px",
  marginTop: "12px",
  marginBottom: "12px",
  borderRadius: "12px",
  border: "1px solid #ddd",
  fontSize: "16px",
  background: "#fafafa",
};

const textareaStyle = {
  width: "100%",
  boxSizing: "border-box",
  minHeight: "120px",
  padding: "15px",
  marginTop: "12px",
  marginBottom: "12px",
  borderRadius: "12px",
  border: "1px solid #ddd",
  fontSize: "16px",
  background: "#fafafa",
};

const fileStyle = {
  width: "100%",
  marginTop: "10px",
};

const uploadBox = {
  border: "2px dashed #d1d5db",
  borderRadius: "16px",
  padding: "15px",
  marginBottom: "15px",
  background: "#fafafa",
};
