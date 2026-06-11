import { useEffect, useState } from "react";
import Link from "next/link";
import { database } from "../../lib/firebase";
import { ref, onValue } from "firebase/database";

export default function QuotationSent() {
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
                    "Quotation Accepted" ||
                  item.status ===
                    "Quotation Rejected" ||
                  item.status ===
                    "Revised Quotation"
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
      "Quotation Accepted":
        return "#22c55e";

      case
      "Quotation Rejected":
        return "#ef4444";

      case
      "Revised Quotation":
        return "#8b5cf6";

      default:
        return "#f59e0b";
    }
  };

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
            "linear-gradient(135deg,#16a34a,#22c55e)",
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
          💰 Sent Quotations
        </h1>

        <p
          style={{
            marginTop: "10px",
          }}
        >
          Manage Sent Quotations
        </p>
      </div>

      <input
        type="text"
        placeholder="Search..."
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
          No Quotations Found
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
                "20px",
              padding:
                "20px",
              marginBottom:
                "15px",
              boxShadow:
                "0 2px 10px rgba(0,0,0,0.08)",
            }}
          >
            <h2>
              {
                item.requestNo
              }
            </h2>

            <p>
              <strong>
                Insured:
              </strong>{" "}
              {
                item.insuredName
              }
            </p>

            <p>
              <strong>
                Premium:
              </strong>{" "}
              ₹
              {
                item.quotationPremium
              }
            </p>
<p>
              <strong>
                Status:
              </strong>{" "}
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
                  fontWeight:
                    "bold",
                }}
              >
                {item.status}
              </span>
            </p>

            <div
              style={{
                display: "grid",
                gap: "10px",
                marginTop: "15px",
              }}
            >
              <Link
                href={`/admin/request-details?id=${item.id}`}
                style={{
                  background:
                    "#2563eb",
                  color:
                    "#fff",
                  textDecoration:
                    "none",
                  padding:
                    "12px",
                  textAlign:
                    "center",
                  borderRadius:
                    "10px",
                  fontWeight:
                    "bold",
                }}
              >
                👁 View Details
              </Link>

              {item.status ===
                "Quotation Rejected" && (
                <Link
                  href={`/admin/send-quotation?id=${item.id}`}
                  style={{
                    background:
                      "#f59e0b",
                    color:
                      "#fff",
                    textDecoration:
                      "none",
                    padding:
                      "12px",
                    textAlign:
                      "center",
                    borderRadius:
                      "10px",
                    fontWeight:
                      "bold",
                  }}
                >
                  🔄 Modify
                  Quotation
                </Link>
              )}

              {item.status ===
                "Quotation Accepted" && (
                <Link
                  href={`/admin/issue-policy?id=${item.id}`}
                  style={{
                    background:
                      "#22c55e",
                    color:
                      "#fff",
                    textDecoration:
                      "none",
                    padding:
                      "12px",
                    textAlign:
                      "center",
                    borderRadius:
                      "10px",
                    fontWeight:
                      "bold",
                  }}
                >
                  📄 Issue
                  Policy
                </Link>
              )}
            </div>
          </div>
        )
      )}
</div>
  );
}
