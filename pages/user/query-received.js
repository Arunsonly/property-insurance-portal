import { useEffect, useState } from "react";
import Link from "next/link";
import { database } from "../../lib/firebase";
import { ref, onValue } from "firebase/database";

export default function QueryReceived() {
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
              item.status ===
              "Query Raised"
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
            "linear-gradient(135deg,#7c3aed,#9333ea)",
          color: "#fff",
          padding: "25px",
          borderRadius: "20px",
          marginBottom: "20px",
        }}
      >
        <h1>Query Received</h1>
        <p>
          Queries received from admin
        </p>
      </div>

      {requests.length === 0 && (
        <div
          style={{
            background: "#fff",
            padding: "20px",
            borderRadius: "15px",
            textAlign: "center",
          }}
        >
          No Queries Found
        </div>
      )}

      {requests.map((item) => (
        <div
          key={item.id}
          style={{
            background: "#fff",
            padding: "20px",
            borderRadius: "15px",
            marginBottom: "15px",
            boxShadow:
              "0 2px 10px rgba(0,0,0,0.08)",
          }}
        >
          <h3>
            {item.requestNo}
          </h3>

          <p>
            <b>Name:</b>{" "}
            {item.insuredName}
          </p>

          <p>
            <b>Query:</b>{" "}
            {item.queryMessage}
          </p>

          <Link
            href={`/user/request-details?id=${item.id}`}
            style={{
              color: "#2563eb",
              fontWeight: "bold",
            }}
          >
            View Request →
          </Link>
        </div>
      ))}
    </div>
  );
              }
