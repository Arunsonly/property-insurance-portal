import { useEffect, useState } from "react";
import Link from "next/link";
import { database } from "../../lib/firebase";
import { ref, onValue } from "firebase/database";
import AuthProtection from "../auth-protection";
export default function PendingRequests() {
  const [requests, setRequests] = useState([]);

  useEffect(() => {
    const requestsRef = ref(database, "requests");

    onValue(requestsRef, (snapshot) => {
      const data = snapshot.val();

      if (data) {
        const loadedRequests = Object.keys(data)
          .map((key) => ({
            id: key,
            ...data[key],
          }))
          .filter(
            (item) =>
              !item.status ||
              item.status === "Pending"
          );

        setRequests(
          loadedRequests.reverse()
        );
      } else {
        setRequests([]);
      }
    });
  }, []);

  return (
    <>
    <AuthProtection role="admin" />

    <div
    <div
      style={{
        minHeight: "100vh",
        background: "#f4f7fc",
        padding: "15px",
      }}
    >
      <div
        style={{
          background: "#0b3d91",
          color: "#fff",
          padding: "18px",
          borderRadius: "12px",
          marginBottom: "15px",
        }}
      >
        <h2 style={{ margin: 0 }}>
          Pending Requests
        </h2>

        <p style={{ marginTop: "5px" }}>
          Review all newly submitted
          requests
        </p>
      </div>

      <input
        type="text"
        placeholder="Search by Ref No / Insured Name / Mobile"
        style={{
          width: "100%",
          padding: "14px",
          borderRadius: "10px",
          border: "1px solid #ddd",
          marginBottom: "15px",
          fontSize: "15px",
        }}
      />

      {requests.length === 0 && (
        <div
          style={{
            background: "#fff",
            padding: "20px",
            borderRadius: "12px",
            textAlign: "center",
          }}
        >
          No Pending Requests Found
        </div>
      )}

      {requests.map((item) => (
        <Link
          key={item.id}
          href={`/admin/request-details?id=${item.id}`}
          style={{
            textDecoration: "none",
          }}
        >
          <div
            style={{
              background: "#fff",
              padding: "15px",
              borderRadius: "12px",
              marginBottom: "12px",
              boxShadow:
                "0 2px 10px rgba(0,0,0,0.08)",
              color: "#111",
            }}
          >
            <div
              style={{
                display: "flex",
                justifyContent:
                  "space-between",
                marginBottom: "10px",
              }}
            >
              <strong>
                {item.requestNo}
              </strong>

              <span
                style={{
                  background: "#fff3cd",
                  color: "#856404",
                  padding: "4px 10px",
                  borderRadius: "20px",
                  fontSize: "12px",
                }}
              >
                Pending
              </span>
            </div>

            <p>
              <strong>
                Insured Name:
              </strong>{" "}
              {item.insuredName}
            </p>

            <p>
              <strong>Mobile:</strong>{" "}
              {item.mobile}
            </p>

            <p>
              <strong>
                Risk Location:
              </strong>{" "}
              {item.riskLocation}
            </p>

            <p>
              <strong>
                Risk Type:
              </strong>{" "}
              {item.riskType}
            </p>

            <div
              style={{
                textAlign: "right",
                color: "#0b3d91",
                fontWeight: "bold",
              }}
            >
              View Details →
            </div>
          </div>
        </Link>
      ))}
    </div>
</>
  );
            }
