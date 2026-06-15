import { useEffect, useState } from "react";
import Link from "next/link";
import { database } from "../../lib/firebase";
import { ref, onValue } from "firebase/database";
import AuthProtection from "../auth-protection";
export default function QueryStatus() {
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
    item.status === "Query Raised" ||
    item.status === "Reply Received"
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
      style={{
        minHeight: "100vh",
        background: "#f4f7fc",
        padding: "15px",
      }}
    >
      <div
        style={{
          background: "#6f42c1",
          color: "#fff",
          padding: "18px",
          borderRadius: "12px",
          marginBottom: "15px",
        }}
      >
        <h2 style={{ margin: 0 }}>
          Query Status
        </h2>

        <p style={{ marginTop: "5px" }}>
          Query Raised Requests
        </p>
      </div>

      <input
        placeholder="Search by Ref No / Insured Name"
        style={{
          width: "100%",
          padding: "12px",
          borderRadius: "10px",
          border: "1px solid #ddd",
          marginBottom: "15px",
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
          No Query Raised Requests
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
              borderRadius: "12px",
              padding: "15px",
              marginBottom: "12px",
              boxShadow:
                "0 2px 8px rgba(0,0,0,0.08)",
              color: "#111",
            }}
          >
            <p>
              <b>
                {item.requestNo}
              </b>
            </p>

            <p>
              {item.insuredName}
            </p>

            <p>
              Query:
              {" "}
              {item.queryMessage}
            </p>

            <span
  style={{
    background:
      item.status === "Reply Recieved"
        ? "#2563eb"
        : "#6f42c1",
    color: "#fff",
    padding: "5px 10px",
    borderRadius: "20px",
    fontSize: "12px",
  }}
>
  {item.status}
</span>
          </div>
        </Link>
      ))}
    </div>
</>
  );
}
