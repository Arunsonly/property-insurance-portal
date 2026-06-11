import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { database } from "../../lib/firebase";
import {
  ref,
  onValue,
  update,
} from "firebase/database";

export default function RequestDetails() {
  const router = useRouter();
  const { id } = router.query;

  const [requestData, setRequestData] =
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
        setRequestData(data);
      }
    });
  }, [id]);

  const updateStatus = async (
    status
  ) => {
    try {
      await update(
        ref(
          database,
          `requests/${id}`
        ),
        {
          status,
        }
      );

      alert(
        `Status Updated : ${status}`
      );
    } catch (error) {
      console.error(error);
      alert("Error");
    }
  };

  if (!requestData) {
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
        }}
      >
        <h1 style={{ margin: 0 }}>
          📄 Request Details
        </h1>

        <p style={{ marginTop: 10 }}>
          Track your insurance
          request
        </p>
      </div>

      {/* BASIC DETAILS */}

      <div
        style={{
          background: "#fff",
          padding: "24px",
          borderRadius: "24px",
          marginBottom: "20px",
          boxShadow:
            "0 10px 25px rgba(0,0,0,.08)",
        }}
      >
        <h2>
          {requestData.requestNo}
        </h2>

        <p>
          <strong>Status:</strong>{" "}
          <span
            style={{
              background:
                "#8b5cf6",
              color: "#fff",
              padding:
                "6px 12px",
              borderRadius:
                "999px",
            }}
          >
            {requestData.status}
          </span>
        </p>

        <p>
          <strong>
            Insured Name:
          </strong>{" "}
          {
            requestData.insuredName
          }
        </p>

        <p>
          <strong>
            Mobile:
          </strong>{" "}
          {
            requestData.mobile
          }
        </p>

        <p>
          <strong>
            Address:
          </strong>{" "}
          {
            requestData.address
          }
        </p>

        <p>
          <strong>
            Risk Location:
          </strong>{" "}
          {
            requestData.riskLocation
          }
        </p>

        <p>
          <strong>
            Risk Type:
          </strong>{" "}
          {
            requestData.riskType
          }
        </p>

        <p>
          <strong>
            Business Activity:
          </strong>{" "}
          {
            requestData.businessActivity
          }
        </p>

        <p>
          <strong>
            Coverage:
          </strong>{" "}
          {
            requestData.coverage
          }
        </p>

        <p>
          <strong>
            Sum Insured:
          </strong>{" "}
          {
            requestData.sumInsured
          }
        </p>
      </div>
{/* QUERY SECTION */}

      {requestData.queryMessage && (
        <div
          style={{
            background: "#fff",
            padding: "24px",
            borderRadius: "24px",
            marginBottom: "20px",
            boxShadow:
              "0 10px 25px rgba(0,0,0,.08)",
          }}
        >
          <h2>❓ Latest Query</h2>

          <div
            style={{
              background: "#faf5ff",
              padding: "15px",
              borderRadius: "12px",
              border:
                "1px solid #d8b4fe",
            }}
          >
            {requestData.queryMessage}
          </div>
        </div>
      )}

      {/* QUOTATION DETAILS */}

      {requestData.quotationPremium &&
        requestData.status !==
          "Policy Issued" && (
          <div
            style={{
              background: "#fff",
              padding: "24px",
              borderRadius: "24px",
              marginBottom: "20px",
              boxShadow:
                "0 10px 25px rgba(0,0,0,.08)",
            }}
          >
            <h2>
              💰 Quotation Details
            </h2>

            <p>
              <strong>
                Premium Amount:
              </strong>{" "}
              ₹
              {
                requestData.quotationPremium
              }
            </p>

            <p>
              <strong>
                Remarks:
              </strong>{" "}
              {requestData.quotationRemarks ||
                "-"}
            </p>

            <p>
              <strong>
                Quotation Date:
              </strong>{" "}
              {requestData.quotationDate ||
                "-"}
            </p>

            {requestData.status ===
              "Quotation Received" && (
              <>
                <button
                  onClick={() =>
                    updateStatus(
                      "Quotation Accepted"
                    )
                  }
                  style={{
                    width: "100%",
                    background:
                      "#22c55e",
                    color: "#fff",
                    border: "none",
                    padding: "16px",
                    borderRadius:
                      "14px",
                    fontSize:
                      "16px",
                    fontWeight:
                      "700",
                    marginBottom:
                      "12px",
                    cursor:
                      "pointer",
                  }}
                >
                  ✅ Accept
                  Quotation
                </button>

                <button
                  onClick={() =>
                    updateStatus(
                      "Quotation Rejected"
                    )
                  }
                  style={{
                    width: "100%",
                    background:
                      "#ef4444",
                    color: "#fff",
                    border: "none",
                    padding: "16px",
                    borderRadius:
                      "14px",
                    fontSize:
                      "16px",
                    fontWeight:
                      "700",
                    cursor:
                      "pointer",
                  }}
                >
                  ❌ Reject
                  Quotation
                </button>
              </>
            )}

            {requestData.status ===
              "Quotation Rejected" && (
              <button
                onClick={() =>
                  updateStatus(
                    "Review Requested"
                  )
                }
                style={{
                  width: "100%",
                  background:
                    "#f59e0b",
                  color: "#fff",
                  border: "none",
                  padding: "16px",
                  borderRadius:
                    "14px",
                  fontSize:
                    "16px",
                  fontWeight:
                    "700",
                  cursor:
                    "pointer",
                }}
              >
                🔄 Review Again
              </button>
            )}
          </div>
        )}
{/* TIMELINE */}

      <div
        style={{
          background: "#fff",
          padding: "24px",
          borderRadius: "24px",
          boxShadow:
            "0 10px 25px rgba(0,0,0,.08)",
        }}
      >
        <h2>
          📌 Request Timeline
        </h2>

        <p>
          ✅ Request Submitted
        </p>

        {requestData.queryMessage && (
          <p>
            ❓ Query Raised
          </p>
        )}

        {requestData.customerReply && (
          <p>
            📨 Reply Submitted
          </p>
        )}

        {requestData.quotationPremium && (
          <p>
            💰 Quotation Received
          </p>
        )}

        {requestData.status ===
          "Quotation Accepted" && (
          <p>
            ✅ Quotation Accepted
          </p>
        )}

        {requestData.status ===
          "Quotation Rejected" && (
          <p>
            ❌ Quotation Rejected
          </p>
        )}

        {requestData.status ===
          "Review Requested" && (
          <p>
            🔄 Review Requested
          </p>
        )}

        {requestData.status ===
          "Policy Issued" && (
          <p>
            📄 Policy Issued
          </p>
        )}

        <hr
          style={{
            margin:
              "15px 0",
          }}
        />

        <p>
          <strong>
            Current Status:
          </strong>{" "}
          {
            requestData.status
          }
        </p>
      </div>

    </div>
  );
            }
