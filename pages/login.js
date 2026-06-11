import { useState } from "react";

export default function Login() {
  const [username, setUsername] =
    useState("");

  const [password, setPassword] =
    useState("");

  const handleLogin = () => {
    if (
      username === "arun_oicl" &&
      password === "Oicl_1308"
    ) {
      localStorage.setItem(
        "role",
        "admin"
      );

      window.location.href =
        "/admin/dashboard";

      return;
    }

    if (username && password) {
      localStorage.setItem(
        "role",
        "user"
      );

      window.location.href =
        "/user/dashboard";

      return;
    }

    alert(
      "Please enter login details"
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
            "0 20px 50px rgba(0,0,0,0.20)",
        }}
      >
        <h1
          style={{
            textAlign: "center",
            marginBottom: "10px",
          }}
        >
          Property Insurance Portal
        </h1>

        <p
          style={{
            textAlign: "center",
            color: "#64748b",
            marginBottom: "30px",
          }}
        >
          User / Admin Login
        </p>

        <input
          type="text"
          placeholder="Username"
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
          placeholder="Password"
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
              "#2563eb",
            color: "#fff",
            border: "none",
            padding: "14px",
            borderRadius:
              "12px",
            fontWeight:
              "bold",
            cursor:
              "pointer",
          }}
        >
          Login
        </button>

        <div
          style={{
            marginTop: "20px",
            fontSize: "13px",
            color: "#64748b",
            textAlign: "center",
          }}
        >
          Admin Username:
          arun_oicl
          <br />
          Admin Password:
          Oicl_1308
        </div>
      </div>
    </div>
  );
}
