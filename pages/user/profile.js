import { useState } from "react";
import AuthProtection from "../auth-protection";

export default function UserProfile() {

  const [user, setUser] = useState({
    name: "Customer",
    username: "customer",
    email: "",
    mobile: "",
  });

  const editProfile = () => {

    const name = prompt(
      "Enter Name",
      user.name
    );

    if (!name) return;

    const email = prompt(
      "Enter Email",
      user.email
    );

    const mobile = prompt(
      "Enter Mobile",
      user.mobile
    );

    setUser({
      ...user,
      name,
      email,
      mobile,
    });

    alert(
      "Profile Updated Successfully"
    );

  };

  const changePassword = () => {

    const newPassword =
      prompt(
        "Enter New Password"
      );

    if (!newPassword) return;

    alert(
      "Password Changed Successfully"
    );

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
            {user.email}
          </p>

          <p>
            <strong>Mobile:</strong>{" "}
            {user.mobile}
          </p>

          <button
            onClick={editProfile}
            style={{
              width: "100%",
              background: "#2563eb",
              color: "#fff",
              border: "none",
              padding: "14px",
              borderRadius: "12px",
              marginTop: "15px",
              marginBottom: "10px",
              fontWeight: "bold",
              cursor: "pointer",
            }}
          >
            ✏️ Edit Profile
          </button>

          <button
            onClick={changePassword}
            style={{
              width: "100%",
              background: "#f59e0b",
              color: "#fff",
              border: "none",
              padding: "14px",
              borderRadius: "12px",
              fontWeight: "bold",
              cursor: "pointer",
            }}
          >
            🔑 Change Password
          </button>

        </div>
      </div>
    </>
  );
}
