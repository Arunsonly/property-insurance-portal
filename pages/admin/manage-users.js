export default function ManageUsers() {
  const users = [
    {
      name: "Rajesh Kumar",
      mobile: "9876543210",
      status: "Active",
    },
    {
      name: "Amit Sharma",
      mobile: "9123456780",
      status: "Active",
    },
    {
      name: "Suresh Patel",
      mobile: "9988776655",
      status: "Active",
    },
    {
      name: "Neha Verma",
      mobile: "8811223344",
      status: "Inactive",
    },
    {
      name: "Vikas Singh",
      mobile: "7766554433",
      status: "Active",
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
        <h1 style={{ margin: 0 }}>Manage Users</h1>
      </div>

      {/* Add User Button */}
      <button
        style={{
          width: "100%",
          background: "#7c3aed",
          color: "#fff",
          border: "none",
          padding: "14px",
          borderRadius: "12px",
          fontSize: "16px",
          fontWeight: "bold",
          marginBottom: "20px",
          cursor: "pointer",
        }}
      >
        + Add User
      </button>

      {/* Search */}
      <input
        type="text"
        placeholder="Search by Name / Mobile"
        style={{
          width: "100%",
          padding: "15px",
          borderRadius: "12px",
          border: "1px solid #ddd",
          marginBottom: "20px",
          fontSize: "16px",
        }}
      />

      {/* User Cards */}
      {users.map((user, index) => (
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
          <h2>{user.name}</h2>

          <p>
            <strong>Mobile:</strong> {user.mobile}
          </p>

          <span
            style={{
              background:
                user.status === "Active"
                  ? "#22c55e"
                  : "#ef4444",
              color: "#fff",
              padding: "8px 14px",
              borderRadius: "20px",
              fontSize: "14px",
              fontWeight: "bold",
              display: "inline-block",
              marginBottom: "15px",
            }}
          >
            {user.status}
          </span>

          <div
            style={{
              display: "flex",
              gap: "10px",
              flexWrap: "wrap",
            }}
          >
            <button
              style={{
                flex: 1,
                background: "#2563eb",
                color: "#fff",
                border: "none",
                padding: "12px",
                borderRadius: "10px",
                cursor: "pointer",
              }}
            >
              Edit
            </button>

            <button
              style={{
                flex: 1,
                background: "#f59e0b",
                color: "#fff",
                border: "none",
                padding: "12px",
                borderRadius: "10px",
                cursor: "pointer",
              }}
            >
              Temp Password
            </button>

            <button
              style={{
                flex: 1,
                background: "#ef4444",
                color: "#fff",
                border: "none",
                padding: "12px",
                borderRadius: "10px",
                cursor: "pointer",
              }}
            >
              Delete
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}
