import { useEffect, useState } from "react";
import Link from "next/link";
import { database } from "../../lib/firebase";
import { ref, onValue } from "firebase/database";

export default function PolicyRegister() {
  const [policies, setPolicies] =
    useState([]);

  const [search, setSearch] =
    useState("");

  useEffect(() => {
    const requestsRef = ref(
      database,
      "requests"
    );

    onValue(
      requestsRef,
      (snapshot) => {
        const data =
          snapshot.val();

        if (data) {
          const loadedPolicies =
            Object.keys(data)
              .map((key) => ({
                id: key,
                ...data[key],
              }))
              .filter(
                (item) =>
                  item.status ===
                  "Policy Issued"
              );

          setPolicies(
            loadedPolicies.reverse()
          );
        } else {
          setPolicies([]);
        }
      }
    );
  }, []);

  const filteredPolicies =
    policies.filter(
      (item) =>
        item.policyNo
          ?.toLowerCase()
          .includes(
            search.toLowerCase()
          ) ||
        item.insuredName
          ?.toLowerCase()
          .includes(
            search.toLowerCase()
          ) ||
        item.requestNo
          ?.toLowerCase()
          .includes(
            search.toLowerCase()
          )
    );

  return (
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
        <h1
          style={{
            margin: 0,
          }}
        >
          📄 My Policies
        </h1>

        <p
          style={{
            marginTop: "10px",
          }}
        >
          View Active Policies
        </p>
      </div>

      <input
        type="text"
        placeholder="Search Policy / Ref No"
        value={search}
        onChange={(e) =>
          setSearch(
            e.target.value
          )
        }
        style={{
          width: "100%",
          padding: "15px",
          borderRadius: "12px",
          border: "1px solid #ddd",
          marginBottom: "20px",
          fontSize: "16px",
          boxSizing:
            "border-box",
        }}
      />

      {filteredPolicies.map(
        (policy) => (
<div
            key={policy.id}
            style={{
              background: "#fff",
              borderRadius: "20px",
              padding: "20px",
              marginBottom: "15px",
              boxShadow:
                "0 2px 10px rgba(0,0,0,0.08)",
            }}
          >
            <h2>
              {policy.policyNo}
            </h2>

            <p>
              <strong>
                Reference No:
              </strong>{" "}
              {policy.requestNo}
            </p>

            <p>
              <strong>
                Insured Name:
              </strong>{" "}
              {policy.insuredName}
            </p>

            <p>
              <strong>
                Premium:
              </strong>{" "}
              ₹
              {
                policy.quotationPremium
              }
            </p>

            <p>
              <strong>
                Expiry Date:
              </strong>{" "}
              {
                policy.policyExpiryDate
              }
            </p>

            <div
              style={{
                marginTop:
                  "15px",
              }}
            >
              <Link
                href={`/user/policy-details?id=${policy.id}`}
                style={{
                  background:
                    "#2563eb",
                  color:
                    "#fff",
                  textDecoration:
                    "none",
                  padding:
                    "12px 18px",
                  borderRadius:
                    "10px",
                  display:
                    "inline-block",
                  fontWeight:
                    "bold",
                }}
              >
                📄 View Policy
              </Link>
            </div>
          </div>
        )
      )}
</div>
  );
}
