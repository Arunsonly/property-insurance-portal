import { useState } from "react";
import { useRouter } from "next/router";
import { database } from "../lib/firebase";

import {
  ref,
  get,
  child,
  update,
} from "firebase/database";

export default function UserLogin() {
  const router = useRouter();

  const [username, setUsername] =
    useState("");

  const [password, setPassword] =
    useState("");

  const [loading, setLoading] =
    useState(false);

  const handleLogin = async () => {
    if (
      !username.trim() ||
      !password.trim()
    ) {
      alert(
        "Please enter Username and Password"
      );
      return;
    }

    try {
      setLoading(true);

      const dbRef = ref(database);

      const snapshot = await get(
        child(dbRef, "users")
      );

      if (!snapshot.exists()) {
        alert("No Users Found");
        setLoading(false);
        return;
      }

      const users =
        snapshot.val();

      let matchedUser =
        null;

      let matchedKey =
        null;

      Object.keys(users).forEach(
        (key) => {
          const user =
            users[key];

          if (
            user.username ===
              username.trim() &&
            user.password ===
              password.trim()
          ) {
            matchedUser =
              user;

            matchedKey =
              key;
          }
        }
      );

      if (!matchedUser) {
        alert(
          "Invalid Username or Password"
        );

        setLoading(false);
        return;
      }

      if (
        matchedUser.status ===
        "Inactive"
      ) {
        alert(
          "User Account Deactivated"
        );

        setLoading(false);
        return;
      }

      await update(
        ref(
          database,
          `users/${matchedKey}`
        ),
        {
          lastLogin:
            new Date().toLocaleString(),
        }
      );

      localStorage.setItem(
        "role",
        "user"
      );

      localStorage.setItem(
        "userName",
        matchedUser.name
      );

      localStorage.setItem(
        "userId",
        matchedKey
      );

      router.push(
        "/user/dashboard"
      );
return;
    } catch (error) {
      console.error(error);

      alert(
        "Login Failed"
      );
    } finally {
      setLoading(false);
    }
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
          👤 User Login
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
          disabled={loading}
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
            fontSize: "16px",
            cursor:
              "pointer",
          }}
        >
          {loading
            ? "Please Wait..."
            : "Login as User"}
        </button>

        <div
          style={{
            marginTop: "20px",
            textAlign: "center",
            color: "#64748b",
            fontSize: "13px",
          }}
        >
          Login using credentials
          provided by office
        </div>
      </div>
    </div>
  );
}
