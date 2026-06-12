import { useState } from "react";
import AuthProtection from "../auth-protection";
export default function AdminProfile() {

  const [admin, setAdmin] = useState({
    name: "Arun Kumar",
    username: "arun_oicl",
    email: "arunkr2091@gmail.com",
    mobile: "7877774730",
    role: "Super Admin",
  });

  const editProfile = () => {

    const name = prompt(
      "Enter Name",
      admin.name
    );

    if (!name) return;

    const email = prompt(
      "Enter Email",
      admin.email
    );

    const mobile = prompt(
      "Enter Mobile",
      admin.mobile
    );

    setAdmin({
      ...admin,
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
    <AuthProtection role="admin" />
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
        <h1>👤 Admin Profile</h1>
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
          {admin.name}
        </p>

        <p>
          <strong>Username:</strong>{" "}
          {admin.username}
        </p>

        <p>
          <strong>Email:</strong>{" "}
          {admin.email}
        </p>

        <p>
          <strong>Mobile:</strong>{" "}
          {admin.mobile}
        </p>

        <p>
          <strong>Role:</strong>{" "}
          {admin.role}
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
