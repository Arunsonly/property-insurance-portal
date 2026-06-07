import { useState } from "react";

export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    // Temporary Demo Login

    if (
      username === "arun_oicl" &&
      password === "Oicl_1308"
    ) {
      window.location.href = "/admin/dashboard";
      return;
    }

    if (username && password) {
      window.location.href = "/user/dashboard";
      return;
    }

    alert("Please enter username and password");
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        background:
          "linear-gradient(135deg,#021024,#032d6a,#0f3f9c)",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        padding: "20px",
        fontFamily: "Arial,sans-serif",
      }}
    >
      <div
        style={{
          background: "#fff",
          width: "100%",
          maxWidth: "420px",
          borderRadius: "20px",
          padding: "35px",
          boxShadow:
            "0 20px 50px rgba(0,0,0,0.20)",
        }}
      >
        <div
          style={{
            textAlign: "center",
            marginBottom: "30px",
          }}
        >
          <h1
            style={{
              margin: 0,
              color: "#0f172a",
            }}
          >
            Property Insurance Portal
          </h1>

          <p
            style={{
              color: "#64748b",
            }}
          >
            User / Admin Login
          </p>
        </div>

        <div
          style={{
            marginBottom: "20px",
          }}
        >
          <label>Username</label>

          <input
            type="text"
            value={username}
            onChange={(e) =>
              setUsername(e.target.value)
            }
            style={{
              width: "100%",
              padding: "12px",
              marginTop: "8px",
              borderRadius: "10px",
              border: "1px solid #cbd5e1",
            }}
          />
        </div>

        <div
          style={{
            marginBottom: "25px",
          }}
        >
          <label>Password</label>

          <input
            type="password"
            value={password}
            onChange={(e) =>
              setPassword(e.target.value)
            }
            style={{
              width: "100%",
              padding: "12px",
              marginTop: "8px",
              borderRadius: "10px",
              border: "1px solid #cbd5e1",
            }}
          />
        </div>

        <button
          onClick={handleLogin}
          style={{
            width: "100%",
            background: "#2563eb",
            color: "#fff",
            border: "none",
            padding: "14px",
            borderRadius: "12px",
            fontWeight: "bold",
            cursor: "pointer",
          }}
        >
          Login
        </button>

        <div
          style={{
            marginTop: "20px",
            padding: "15px",
            background: "#f8fafc",
            borderRadius: "12px",
            fontSize: "14px",
            color: "#475569",
          }}
        >
          <strong>Admin Login</strong>

          <br />

          Username: arun_oicl

          <br />

          Password: Oicl_1308
        </div>
      </div>
    </div>
  );
          }
