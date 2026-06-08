export default function PolicyRegister() {
  const policies = [
    {
      policyNo: "POL/25-00023",
      name: "ABC Traders",
      premium: "₹54,200",
      expiry: "31/05/2026",
    },
    {
      policyNo: "POL/25-00022",
      name: "XYZ Industries",
      premium: "₹42,800",
      expiry: "25/05/2026",
    },
    {
      policyNo: "POL/25-00021",
      name: "Shree Plastics",
      premium: "₹36,500",
      expiry: "20/05/2026",
    },
    {
      policyNo: "POL/25-00020",
      name: "Kumar Retail",
      premium: "₹28,700",
      expiry: "15/05/2026",
    },
    {
      policyNo: "POL/25-00019",
      name: "Mohan Store",
      premium: "₹25,600",
      expiry: "10/05/2026",
    },
  ];

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
        <h1 style={{ margin: 0 }}>Policy Register</h1>
      </div>

      {/* Search */}
      <input
        type="text"
        placeholder="Search by Policy No / Insured Name"
        style={{
          width: "100%",
          padding: "15px",
          borderRadius: "12px",
          border: "1px solid #ddd",
          marginBottom: "20px",
          fontSize: "16px",
        }}
      />

      {/* Filters */}
      <div
        style={{
          display: "flex",
          gap: "10px",
          marginBottom: "20px",
        }}
      >
        <select
          style={{
            flex: 1,
            padding: "12px",
            borderRadius: "10px",
            border: "1px solid #ddd",
          }}
        >
          <option>Month</option>
        </select>

        <select
          style={{
            flex: 1,
            padding: "12px",
            borderRadius: "10px",
            border: "1px solid #ddd",
          }}
        >
          <option>Year</option>
        </select>
      </div>

      {/* Policy Cards */}
      {policies.map((policy, index) => (
        <div
          key={index}
          style={{
            background: "#fff",
            borderRadius: "20px",
            padding: "20px",
            marginBottom: "15px",
            boxShadow: "0 2px 10px rgba(0,0,0,0.08)",
          }}
        >
          <h2>{policy.policyNo}</h2>

          <p>
            <strong>Insured Name:</strong> {policy.name}
          </p>

          <p>
            <strong>Premium:</strong> {policy.premium}
          </p>

          <p>
            <strong>Expiry Date:</strong> {policy.expiry}
          </p>
        </div>
      ))}
    </div>
  );
          }
