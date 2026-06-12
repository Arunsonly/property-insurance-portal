import { useState, useEffect } from "react";
import AuthProtection from "../auth-protection";

import { database } from "../../lib/firebase";
import { ref, get } from "firebase/database";

export default function UserProfile() {

  const [user, setUser] =
    useState(null);

  useEffect(() => {

    const userId =
      localStorage.getItem("userId");

    if (!userId) return;

    get(
      ref(
        database,
        `users/${userId}`
      )
    ).then((snapshot) => {

      if (snapshot.exists()) {

        setUser(
          snapshot.val()
        );

      }

    });

  }, []);

  if (!user) {

    return (
      <>
        <AuthProtection role="user" />

        <div
          style={{
            padding: "30px",
            textAlign: "center",
          }}
        >
          Loading...
        </div>
      </>
    );

  }

  const logout = () => {

    localStorage.removeItem("role");
    localStorage.removeItem("userId");
    localStorage.removeItem("userName");

    window.location.href = "/";

  };

  return (
    <>
      <AuthProtection role="user" />

      <div
        style={{
          background: "#f4f7fc",
          minHeight: "100vh",
          padding: "20px",
        }}
      >
        <div
          style={{
            background:
              "linear-gradient(135deg,#0b3d91,#2563eb)",
            color: "#fff",
            padding: "30px",
            borderRadius: "20px",
            marginBottom: "20px",
          }}
        >
          <h1>👤 My Profile</h1>
        </div>

        <div
          style={{
            background: "#fff",
            padding: "25px",
            borderRadius: "20px",
            boxShadow:
              "0 2px 10px rgba(0,0,0,.08)",
          }}
        >
          <p>
            <strong>Name:</strong>{" "}
            {user.name}
          </p>

          <p>
            <strong>Username:</strong>{" "}
            {user.username}
          </p>

          <p>
            <strong>Email:</strong>{" "}
            {user.email || "-"}
          </p>

          <p>
            <strong>Mobile:</strong>{" "}
            {user.mobile}
          </p>

          <p>
            <strong>Status:</strong>{" "}
            {user.status}
          </p>

          <p>
            <strong>Last Login:</strong>{" "}
            {user.lastLogin || "-"}
          </p>

          <button
            onClick={logout}
            style={{
              width: "100%",
              background: "#dc2626",
              color: "#fff",
              border: "none",
              padding: "14px",
              borderRadius: "12px",
              marginTop: "20px",
              fontWeight: "bold",
              cursor: "pointer",
            }}
          >
            🚪 Logout
          </button>
        </div>
      </div>
    </>
  );
}
