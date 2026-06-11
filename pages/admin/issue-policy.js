import { useRouter } from "next/router";
import { useState } from "react";
import { database } from "../../lib/firebase";
import { ref, update } from "firebase/database";

export default function IssuePolicy() {
  const router = useRouter();
  const { id } = router.query;

  const [policyNo, setPolicyNo] =
    useState("");

  const [startDate, setStartDate] =
    useState("");

  const [expiryDate, setExpiryDate] =
    useState("");

  const handleIssuePolicy =
    async () => {
      if (
        !policyNo ||
        !startDate ||
        !expiryDate
      ) {
        alert(
          "Fill all fields"
        );
        return;
      }

      try {
        await update(
          ref(
            database,
            `requests/${id}`
          ),
          {
            policyNo,
            policyStartDate:
              startDate,
            policyExpiryDate:
              expiryDate,
            policyIssuedDate:
              new Date().toISOString(),
            status:
              "Policy Issued",
          }
        );

        alert(
          "Policy Issued Successfully"
        );

        router.push(
          "/admin/policy-register"
        );
      } catch (error) {
        console.error(
          error
        );

        alert(
          "Error issuing policy"
        );
      }
    };

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "#f4f7fc",
        padding: "20px",
      }}
    >
      <div
        style={{
          background:
            "linear-gradient(135deg,#2563eb,#0b3d91)",
          color: "#fff",
          padding: "30px",
          borderRadius: "20px",
          marginBottom: "20px",
        }}
      >
        <h1
          style={{
            margin: 0,
          }}
        >
          📄 Issue Policy
        </h1>

        <p
          style={{
            marginTop: "10px",
          }}
        >
          Enter Policy Details
        </p>
      </div>

      <div
        style={{
          background: "#fff",
          padding: "20px",
          borderRadius: "20px",
          boxShadow:
            "0 5px 15px rgba(0,0,0,0.08)",
        }}
      >
        <input
          type="text"
          placeholder="Policy Number"
          value={policyNo}
          onChange={(e) =>
            setPolicyNo(
              e.target.value
            )
          }
          style={{
            width: "100%",
            padding: "15px",
            border:
              "1px solid #ddd",
            borderRadius:
              "12px",
            marginBottom:
              "15px",
            boxSizing:
              "border-box",
          }}
        />

        <label>
          Policy Start Date
        </label>

        <input
          type="date"
          value={startDate}
          onChange={(e) =>
            setStartDate(
              e.target.value
            )
          }
          style={{
            width: "100%",
            padding: "15px",
            border:
              "1px solid #ddd",
            borderRadius:
              "12px",
            marginTop: "8px",
            marginBottom:
              "15px",
            boxSizing:
              "border-box",
          }}
        />

        <label>
          Policy Expiry Date
        </label>

        <input
          type="date"
          value={expiryDate}
          onChange={(e) =>
            setExpiryDate(
              e.target.value
            )
          }
style={{
            width: "100%",
            padding: "15px",
            border:
              "1px solid #ddd",
            borderRadius:
              "12px",
            marginTop: "8px",
            marginBottom:
              "20px",
            boxSizing:
              "border-box",
          }}
        />

        <button
          onClick={
            handleIssuePolicy
          }
          style={{
            width: "100%",
            background:
              "#22c55e",
            color: "#fff",
            border: "none",
            padding: "16px",
            borderRadius:
              "12px",
            fontSize: "17px",
            fontWeight:
              "bold",
            cursor:
              "pointer",
          }}
        >
          📄 Issue Policy
        </button>
      </div>
    </div>
  );
}
