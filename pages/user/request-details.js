import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { database } from "../../lib/firebase";
import {
  ref,
  onValue,
  update,
} from "firebase/database";
import AuthProtection from "../auth-protection";

export default function RequestDetails() {

  const router =
    useRouter();

  const { id } =
    router.query;

  const [requestData,
    setRequestData] =
    useState(null);

  useEffect(() => {

    if (!id)
      return;

    const requestRef =
      ref(
        database,
        `requests/${id}`
      );

    onValue(
      requestRef,
      (snapshot) => {

        const data =
          snapshot.val();

        if (!data)
          return;

        const currentUserId =
          localStorage.getItem(
            "userId"
          );

        if (
          data.userId &&
          data.userId !==
            currentUserId
        ) {

          alert(
            "Unauthorized Access"
          );

          router.push(
            "/user/dashboard"
          );

          return;

        }

        setRequestData(
          data
        );

      }
    );

  }, [id]);

  const updateStatus =
    async (status) => {

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

        alert("Error");

      }

    };

  const handleCancel =
    async () => {

      const confirmCancel =
        window.confirm(
          "Are you sure you want to cancel this request?"
        );

      if (!confirmCancel)
        return;

      await update(
        ref(
          database,
          `requests/${id}`
        ),
        {
          status:
            "Cancelled By User",
        }
      );

      alert(
        "Request Cancelled Successfully"
      );

    };

  if (!requestData) {

    return (
      <>
        <AuthProtection role="user" />
        <div style={{padding:"20px"}}>
          Loading...
        </div>
      </>
    );
  }
return (
    <>
      <AuthProtection
        role="user"
      />

      <div
        style={{
          background:"#f4f7fc",
          minHeight:"100vh",
          padding:"20px",
          maxWidth:"700px",
          margin:"0 auto",
        }}
      >

        <div
          style={{
            background:
              "linear-gradient(135deg,#0b3d91,#2563eb)",
            color:"#fff",
            padding:"30px",
            borderRadius:"24px",
            marginBottom:"20px",
          }}
        >
          <h1>
            📄 Request Details
          </h1>

          <p>
            Track your insurance request
          </p>
        </div>

        <div
          style={{
            background:"#fff",
            padding:"24px",
            borderRadius:"24px",
            marginBottom:"20px",
          }}
        >
          <h2>
            {requestData.requestNo}
          </h2>

          <p>
            <strong>Status:</strong>{" "}
            {requestData.status}
          </p>

          <p>
            <strong>Insured Name:</strong>{" "}
            {requestData.insuredName}
          </p>

          <p>
            <strong>Mobile:</strong>{" "}
            {requestData.mobile}
          </p>

          <p>
            <strong>Risk Location:</strong>{" "}
            {requestData.riskLocation}
          </p>

          <p>
            <strong>Coverage:</strong>{" "}
            {requestData.coverage}
          </p>

          <p>
            <strong>Sum Insured:</strong>{" "}
            {requestData.sumInsured}
          </p>

        </div>

        {requestData.quotationPremium &&
          requestData.status !==
            "Policy Issued" && (

          <div
            style={{
              background:"#fff",
              padding:"24px",
              borderRadius:"24px",
              marginBottom:"20px",
            }}
          >

            <h2>
              💰 Quotation Details
            </h2>

            <p>
              <strong>Premium:</strong>
              {" "}
              ₹
              {
                requestData.quotationPremium
              }
            </p>

            <p>
              <strong>Remarks:</strong>
              {" "}
              {
                requestData.quotationRemarks ||
                "-"
              }
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
                >
                  ✅ Accept Quotation
                </button>

                <button
                  onClick={() =>
                    updateStatus(
                      "Quotation Rejected"
                    )
                  }
                >
                  ❌ Reject Quotation
                </button>
              </>
            )}

            {requestData.status ===
              "Quotation Rejected" && (

              <button
                onClick={() =>
                  updateStatus(
                    "Re-Submitted"
                  )
                }
              >
                🔄 Review Again
              </button>

            )}

          </div>
        )}

        {(requestData.status === "Pending" ||
          requestData.status === "Query Raised" ||
          requestData.status === "Reply Submitted") && (

          <button
            onClick={
              handleCancel
            }
            style={{
              width:"100%",
              background:"#ef4444",
              color:"#fff",
              border:"none",
              padding:"16px",
              borderRadius:"14px",
              fontWeight:"700",
              marginBottom:"20px",
            }}
          >
            🗑 Cancel Request
          </button>

        )}

        <div
          style={{
            background:"#fff",
            padding:"24px",
            borderRadius:"24px",
          }}
        >
          <h2>
            📌 Timeline
          </h2>

          <p>
            Current Status :
            {" "}
            {requestData.status}
          </p>

          {requestData.status ===
            "Re-Submitted" && (
            <p>
              🔄 Re-Submitted
            </p>
          )}

          {requestData.status ===
            "Cancelled By User" && (
            <p>
              🗑 Cancelled By User
            </p>
          )}

        </div>

      </div>
    </>
  );
  }
