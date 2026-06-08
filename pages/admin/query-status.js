export default function QueryStatus() {
  const data = [
    {
      ref: "PROP-00128",
      name: "ABC Traders",
      date: "18/05/2025",
      status: "Reply Received",
      color: "#28a745",
    },
    {
      ref: "PROP-00127",
      name: "XYZ Industries",
      date: "17/05/2025",
      status: "Waiting",
      color: "#ff9800",
    },
    {
      ref: "PROP-00126",
      name: "Kumar Retail",
      date: "16/05/2025",
      status: "Waiting",
      color: "#ff9800",
    },
  ];

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
        <h2>Query Status</h2>
      </div>

      <input
        placeholder="Search by Ref No / Insured Name"
        style={{
          width: "100%",
          padding: "12px",
          borderRadius: "10px",
          border: "1px solid #ddd",
          marginBottom: "15px",
        }}
      />

      {data.map((item, index) => (
        <div
          key={index}
          style={{
            background: "#fff",
            borderRadius: "12px",
            padding: "15px",
            marginBottom: "12px",
            boxShadow: "0 2px 8px rgba(0,0,0,0.08)",
          }}
        >
          <p><b>{item.ref}</b></p>
          <p>{item.name}</p>
          <p>{item.date}</p>

          <span
            style={{
              background: item.color,
              color: "#fff",
              padding: "5px 10px",
              borderRadius: "20px",
              fontSize: "12px",
            }}
          >
            {item.status}
          </span>
        </div>
      ))}
    </div>
  );
}
