import { useState } from "react";

export default function RaiseQuery() {
  const [query, setQuery] = useState("");

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
        <h2 style={{ margin: 0 }}>Raise Query</h2>
      </div>

      {/* Request Info */}

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

      {/* Query Box */}

      <div
        style={{
          background: "#fff",
          padding: "15px",
          borderRadius: "12px",
          marginBottom: "15px",
        }}
      >
        <label>
          <b>Query Message</b>
        </label>

        <textarea
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Type your query here..."
          rows="8"
          style={{
            width: "100%",
            marginTop: "10px",
            padding: "12px",
            borderRadius: "10px",
            border: "1px solid #ddd",
            resize: "none",
            fontSize: "15px",
          }}
        />
      </div>

      {/* Upload */}

      <div
        style={{
          background: "#fff",
          padding: "20px",
          borderRadius: "12px",
          marginBottom: "20px",
          textAlign: "center",
          border: "2px dashed #ccc",
        }}
      >
        <h3>📎 Upload Document</h3>

        <input type="file" />

        <p
          style={{
            color: "#666",
            marginTop: "10px",
          }}
        >
          PDF, JPG, PNG
        </p>
      </div>

      {/* Button */}

      <button
        style={{
          width: "100%",
          padding: "16px",
          border: "none",
          borderRadius: "12px",
          background: "#6f42c1",
          color: "#fff",
          fontSize: "17px",
          fontWeight: "bold",
          cursor: "pointer",
        }}
      >
        Send Query
      </button>
    </div>
  );
        }
