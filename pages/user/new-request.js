export default function NewRequest() {
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
          padding: "30px",
          borderRadius: "20px",
          marginBottom: "20px",
        }}
      >
        <h1 style={{ margin: 0 }}>New Request</h1>
        <p style={{ marginTop: "10px" }}>
          Submit a new property insurance request
        </p>
      </div>

      {/* Form */}
      <div
        style={{
          background: "#fff",
          borderRadius: "20px",
          padding: "20px",
          boxShadow: "0 2px 10px rgba(0,0,0,0.08)",
        }}
      >
        <label><b>Insured Name</b></label>
        <input
          type="text"
          placeholder="Enter insured name"
          style={inputStyle}
        />

        <label><b>Mobile Number</b></label>
        <input
          type="text"
          placeholder="Enter mobile number"
          style={inputStyle}
        />

        <label><b>Risk Location</b></label>
        <input
          type="text"
          placeholder="Enter risk location"
          style={inputStyle}
        />

        <label><b>Risk Type</b></label>
        <select style={inputStyle}>
          <option>Select Risk Type</option>
          <option>Manufacturing Unit</option>
          <option>Godown</option>
          <option>Retail Shop</option>
          <option>Office</option>
        </select>

        <label><b>Business Activity</b></label>
        <input
          type="text"
          placeholder="Enter business activity"
          style={inputStyle}
        />

        <label><b>Sum Insured (₹)</b></label>
        <input
          type="number"
          placeholder="Enter sum insured"
          style={inputStyle}
        />

        <label><b>Coverage Required</b></label>
        <select style={inputStyle}>
          <option>Select Coverage</option>
          <option>Fire + STFI + EQ</option>
          <option>Fire Only</option>
          <option>Fire + Burglary</option>
        </select>

        <label><b>Upload Documents</b></label>

        <div
          style={{
            border: "2px dashed #ccc",
            padding: "25px",
            textAlign: "center",
            borderRadius: "15px",
            marginBottom: "20px",
          }}
        >
          <input type="file" />
          <p>PDF, JPG, PNG</p>
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
            cursor: "pointer",
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
  marginTop: "8px",
  marginBottom: "18px",
  borderRadius: "12px",
  border: "1px solid #ddd",
  fontSize: "16px",
};
