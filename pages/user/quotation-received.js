import { useEffect, useState } from "react";
import Link from "next/link";
import { database } from "../../lib/firebase";
import { ref, onValue, update } from "firebase/database";
import AuthProtection from "../auth-protection";

export default function QuotationReceived() {

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
                item.userId ===
                  currentUserId &&
                (
                  item.status ===
                    "Quotation Sent" ||

                  item.status ===
                    "Quotation Accepted" ||

                  item.status ===
                    "Quotation Rejected"
                )
            );

        setRequests(
          loadedRequests.reverse()
        );

      }
    );

  }, []);
const reviewAgain =
    async (id) => {

      await update(
        ref(
          database,
          `requests/${id}`
        ),
        {
          status:
            "Re-Submitted",
        }
      );

      alert(
        "Request Re-Submitted Successfully"
      );

    };

  const getColor =
    (status) => {

      switch (status) {

        case
        "Quotation Sent":
          return "#2563eb";

        case
        "Quotation Accepted":
          return "#22c55e";

        case
        "Quotation Rejected":
          return "#ef4444";

        default:
          return "#6b7280";

      }

    };

  return (
    <>
      <AuthProtection
        role="user"
      />

      <div
        style={{
          minHeight:"100vh",
          background:"#f4f7fc",
          padding:"15px",
        }}
      >

        <div
          style={{
            background:
              "linear-gradient(135deg,#16a34a,#22c55e)",
            color:"#fff",
            padding:"25px",
            borderRadius:"20px",
            marginBottom:"20px",
          }}
        >
          <h1
            style={{
              margin:0,
            }}
          >
            💰 Quotations
          </h1>

          <p
            style={{
              marginTop:"8px",
            }}
          >
            View Quotations
          </p>
        </div>

        {requests.length === 0 && (

          <div
            style={{
              background:"#fff",
              padding:"20px",
              borderRadius:"15px",
              textAlign:"center",
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
                background:"#fff",
                borderRadius:"18px",
                padding:"20px",
                marginBottom:"15px",
                boxShadow:
                  "0 5px 15px rgba(0,0,0,0.08)",
              }}
            >
              <h3>
                {item.requestNo}
              </h3>

              <p>
                <b>Insured:</b>{" "}
                {item.insuredName}
              </p>

              <p>
                <b>Location:</b>{" "}
                {item.riskLocation}
              </p>

              <span
                style={{
                  background:
                    getColor(
                      item.status
                    ),
                  color:"#fff",
                  padding:"6px 12px",
                  borderRadius:"20px",
                  fontSize:"13px",
                }}
              >
                {item.status ===
                "Quotation Accepted"
                  ? "Accepted By You"
                  : item.status ===
                    "Quotation Rejected"
                  ? "Review Again"
                  : "Quotation Sent"}
              </span>

              <div
                style={{
                  marginTop:"15px",
                }}
              >
                <Link
                  href={`/user/quotation-details?id=${item.id}`}
                  style={{
                    color:"#2563eb",
                    textDecoration:"none",
                    fontWeight:"600",
                  }}
                >
                  View Details →
                </Link>
              </div>

              {item.status ===
                "Quotation Rejected" && (

                <button
                  onClick={() =>
                    reviewAgain(
                      item.id
                    )
                  }
                  style={{
                    marginTop:"12px",
                    background:"#f59e0b",
                    color:"#fff",
                    border:"none",
                    padding:"10px 15px",
                    borderRadius:"10px",
                    cursor:"pointer",
                  }}
                >
                  Review Again
                </button>

              )}

            </div>

          )
        )}

      </div>
    </>
  );
}
