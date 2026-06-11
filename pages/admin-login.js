import { useState } from "react";

export default function AdminLogin() {
  const [username, setUsername] =
    useState("");

  const [password, setPassword] =
    useState("");

  const handleLogin = () => {
    if (
      username.trim() ===
        "arun_oicl" &&
      password.trim() ===
        "Oicl_1308"
    ) {
      localStorage.setItem(
        "role",
        "admin"
      );

      window.location.href =
        "/admin/dashboard";

      return;
    }

    alert(
      "Invalid Admin Username or Password"
    );
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
        fontFamily:
          "Arial,sans-serif",
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
            "0 20px 50px rgba(0,0,0,.20)",
        }}
      >
        <h1
          style={{
            textAlign: "center",
            marginBottom: "10px",
          }}
        >
          🛡️ Admin Login
        </h1>

        <p
          style={{
            textAlign: "center",
            color: "#64748b",
            marginBottom: "30px",
          }}
        >
          Property Insurance Portal
        </p>

        <input
          type="text"
          placeholder="Admin Username"
          value={username}
          onChange={(e) =>
            setUsername(
              e.target.value
            )
          }
          style={{
            width: "100%",
            padding: "12px",
            marginBottom: "15px",
            borderRadius: "10px",
            border:
              "1px solid #cbd5e1",
            boxSizing:
              "border-box",
          }}
        />

        <input
          type="password"
          placeholder="Admin Password"
          value={password}
          onChange={(e) =>
            setPassword(
              e.target.value
            )
          }
          style={{
            width: "100%",
            padding: "12px",
            marginBottom: "20px",
            borderRadius: "10px",
            border:
              "1px solid #cbd5e1",
            boxSizing:
              "border-box",
          }}
        />

        <button
          onClick={handleLogin}
          style={{
            width: "100%",
            background:
              "#16a34a",
            color: "#fff",
            border: "none",
            padding: "14px",
            borderRadius:
              "12px",
            fontWeight:
              "bold",
            fontSize: "16px",
            cursor:
              "pointer",
          }}
        >
          Login as Admin
        </button>

        <div
          style={{
            marginTop: "20px",
            textAlign: "center",
            color: "#64748b",
            fontSize: "13px",
          }}
        >
          Username:
          arun_oicl
          <br />
          Password:
          Oicl_1308
        </div>
      </div>
    </div>
  );
            }
