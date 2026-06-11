import { useEffect, useState } from "react";
import Link from "next/link";
import { database } from "../../lib/firebase";
import { ref, onValue } from "firebase/database";

export default function QuotationReceived() {
  const [requests, setRequests] =
    useState([]);

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
          const loadedRequests =
            Object.keys(data)
              .map((key) => ({
                id: key,
                ...data[key],
              }))
              .filter(
                (item) =>
                  item.status ===
                    "Quotation Received" ||
                  item.status ===
                    "Quotation Rejected" ||
                  item.status ===
                    "Policy Issued"
              );

          setRequests(
            loadedRequests.reverse()
          );
        } else {
          setRequests([]);
        }
      }
    );
  }, []);

  const getColor = (
    status
  ) => {
    switch (status) {
      case
      "Quotation Received":
        return "#22c55e";

      case
      "Quotation Rejected":
        return "#ef4444";

      case
      "Policy Issued":
        return "#2563eb";

      default:
        return "#6b7280";
    }
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "#f4f7fc",
        padding: "15px",
      }}
    >
      <div
        style={{
          background:
            "linear-gradient(135deg,#16a34a,#22c55e)",
          color: "#fff",
          padding: "25px",
          borderRadius: "20px",
          marginBottom: "20px",
        }}
      >
        <h1
          style={{
            margin: 0,
          }}
        >
          💰 Quotations
        </h1>

        <p
          style={{
            marginTop: "8px",
          }}
        >
          View Quotations &
          Policies
        </p>
      </div>

      {requests.length ===
        0 && (
        <div
          style={{
            background:
              "#fff",
            padding:
              "20px",
            borderRadius:
              "15px",
            textAlign:
              "center",
          }}
        >
          No Records Found
        </div>
      )}

      {requests.map(
        (item) => (
          <div
            key={item.id}
            style={{
              background:
                "#fff",
              borderRadius:
                "18px",
              padding:
                "20px",
              marginBottom:
                "15px",
              boxShadow:
                "0 5px 15px rgba(0,0,0,0.08)",
            }}
          >
            <h3>
              {
                item.requestNo
              }
            </h3>

            <p>
              <b>
                Insured:
              </b>{" "}
              {
                item.insuredName
              }
            </p>

            <p>
              <b>
                Location:
              </b>{" "}
              {
                item.riskLocation
              }
            </p>

            <span
              style={{
                background:
                  getColor(
                    item.status
                  ),
                color:
                  "#fff",
                padding:
                  "6px 12px",
                borderRadius:
                  "20px",
                fontSize:
                  "13px",
              }}
            >
              {
                item.status
              }
            </span>

            <div
              style={{
                marginTop:
                  "15px",
              }}
            >
              <Link
                href={`/user/request-details?id=${item.id}`}
                style={{
                  color:
                    "#2563eb",
                  textDecoration:
                    "none",
                  fontWeight:
                    "600",
                }}
              >
                View Details →
              </Link>
            </div>
          </div>
        )
      )}
    </div>
  );
              }
