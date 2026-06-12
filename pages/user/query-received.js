import { useEffect, useState } from "react";
import Link from "next/link";
import { database } from "../../lib/firebase";
import { ref, onValue } from "firebase/database";
import AuthProtection from "../auth-protection";

export default function QueryReceived() {

  const [requests, setRequests] =
    useState([]);

  useEffect(() => {

    const requestsRef =
      ref(database, "requests");

    onValue(
      requestsRef,
      (snapshot) => {

        const data =
          snapshot.val();

        if (!data) {

          setRequests([]);

          return;

        }

        const currentUserId =
          localStorage.getItem(
            "userId"
          );

        const loadedRequests =
          Object.keys(data)

            .map((key) => ({
              id: key,
              ...data[key],
            }))

            .filter(
              (item) =>
                item.status ===
                  "Query Raised" &&
                item.userId ===
                  currentUserId
            );

        setRequests(
          loadedRequests.reverse()
        );

      }
    );

  }, []);

  return (
    <>
      <AuthProtection
        role="user"
      />

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
          <h1>
            Query Received
          </h1>

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

        {requests.map(
          (item) => (

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
                href={`/user/reply-query?id=${item.id}`}
                style={{
                  color: "#2563eb",
                  fontWeight: "bold",
                  textDecoration:
                    "none",
                }}
              >
                View Request →
              </Link>

            </div>

          )
        )}

      </div>
    </>
  );
}
