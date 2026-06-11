import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { database } from "../../lib/firebase";
import { ref, onValue } from "firebase/database";

export default function PolicyDetails() {
  const router = useRouter();
  const { id } = router.query;

  const [policyData, setPolicyData] =
    useState(null);

  useEffect(() => {
    if (!id) return;

    const requestRef = ref(
      database,
      `requests/${id}`
    );

    onValue(requestRef, (snapshot) => {
      const data = snapshot.val();

      if (data) {
        setPolicyData(data);
      }
    });
  }, [id]);

  if (!policyData) {
    return (
      <div
        style={{
          padding: "20px",
        }}
      >
        Loading...
      </div>
    );
  }

  return (
    <div
      style={{
        background: "#f4f7fc",
        minHeight: "100vh",
        padding: "20px",
        maxWidth: "700px",
        margin: "0 auto",
      }}
    >
      {/* HEADER */}

      <div
        style={{
          background:
            "linear-gradient(135deg,#0b3d91,#2563eb)",
          color: "#fff",
          padding: "30px",
          borderRadius: "24px",
          marginBottom: "20px",
          boxShadow:
            "0 15px 30px rgba(37,99,235,.25)",
        }}
      >
        <h1
          style={{
            margin: 0,
          }}
        >
          🛡️ Policy Details
        </h1>

        <p
          style={{
            marginTop: "10px",
          }}
        >
          Your Insurance Policy
        </p>
      </div>

      {/* STATUS */}

      <div
        style={{
          background: "#dcfce7",
          color: "#166534",
          padding: "15px",
          borderRadius: "14px",
          fontWeight: "700",
          textAlign: "center",
          marginBottom: "20px",
          border:
            "1px solid #86efac",
        }}
      >
        ✅ Policy Active
      </div>

      {/* POLICY INFO */}

      <div
        style={{
          background: "#fff",
          borderRadius: "24px",
          padding: "24px",
          marginBottom: "20px",
          boxShadow:
            "0 10px 25px rgba(0,0,0,.08)",
        }}
      >
        <h2>
          Policy Information
        </h2>

        <p>
          <strong>
            Policy Number:
          </strong>
          <br />
          {
            policyData.policyNo
          }
        </p>

        <p>
          <strong>
            Reference No:
          </strong>
          <br />
          {
            policyData.requestNo
          }
        </p>

        <p>
          <strong>
            Insured Name:
          </strong>
          <br />
          {
            policyData.insuredName
          }
        </p>

        <p>
          <strong>
            Risk Location:
          </strong>
          <br />
          {
            policyData.riskLocation
          }
        </p>
      </div>
{/* COVERAGE DETAILS */}

      <div
        style={{
          background: "#fff",
          borderRadius: "24px",
          padding: "24px",
          marginBottom: "20px",
          boxShadow:
            "0 10px 25px rgba(0,0,0,.08)",
        }}
      >
        <h2>
          Coverage Details
        </h2>

        <p>
          <strong>
            Coverage:
          </strong>
          <br />
          {
            policyData.coverage
          }
        </p>

        <p>
          <strong>
            Sum Insured:
          </strong>
          <br />
          ₹
          {
            policyData.sumInsured
          }
        </p>

        <p>
          <strong>
            Premium Paid:
          </strong>
          <br />
          ₹
          {
            policyData.quotationPremium
          }
        </p>

        <p>
          <strong>
            Risk Type:
          </strong>
          <br />
          {
            policyData.riskType
          }
        </p>

        <p>
          <strong>
            Business Activity:
          </strong>
          <br />
          {
            policyData.businessActivity
          }
        </p>
      </div>

      {/* POLICY PERIOD */}

      <div
        style={{
          background: "#fff",
          borderRadius: "24px",
          padding: "24px",
          marginBottom: "20px",
          boxShadow:
            "0 10px 25px rgba(0,0,0,.08)",
        }}
      >
        <h2>
          Policy Period
        </h2>

        <p>
          <strong>
            Start Date:
          </strong>
          <br />
          {
            policyData.policyStartDate
          }
        </p>

        <p>
          <strong>
            Expiry Date:
          </strong>
          <br />
          {
            policyData.policyExpiryDate
          }
        </p>

        <p>
          <strong>
            Policy Issued:
          </strong>
          <br />
          {
            policyData.policyIssuedDate
          }
        </p>
      </div>
{/* ACTION BUTTONS */}

      <button
        style={{
          width: "100%",
          background: "#2563eb",
          color: "#fff",
          border: "none",
          padding: "16px",
          borderRadius: "14px",
          fontSize: "17px",
          fontWeight: "700",
          marginBottom: "15px",
          cursor: "pointer",
        }}
      >
        📄 Download Policy PDF
      </button>

      <button
        style={{
          width: "100%",
          background: "#16a34a",
          color: "#fff",
          border: "none",
          padding: "16px",
          borderRadius: "14px",
          fontSize: "17px",
          fontWeight: "700",
          cursor: "pointer",
        }}
      >
        🧾 Download Receipt
      </button>

    </div>
  );
            }
