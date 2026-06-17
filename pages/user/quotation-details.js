import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { database } from "../../lib/firebase";
import {
  ref,
  onValue,
  update
} from "firebase/database";
import AuthProtection from "../auth-protection";

export default function QuotationDetails() {

  const router =
    useRouter();

  const { id } =
    router.query;

  const [quotationData,
    setQuotationData] =
    useState(null);

  useEffect(() => {

    if (!id)
      return;

    const quotationRef =
      ref(
        database,
        `requests/${id}`
      );

    onValue(
      quotationRef,
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

        setQuotationData(
          data
        );

      }
    );

  }, [id]);

  const handleAccept =
    async () => {

      await update(
        ref(
          database,
          `requests/${id}`
        ),
        {
          status:
            "Quotation Accepted",
        }
      );

      alert(
        "Quotation Accepted"
      );

    };

  const handleReject =
    async () => {

      await update(
        ref(
          database,
          `requests/${id}`
        ),
        {
          status:
            "Quotation Rejected",
        }
      );

      alert(
        "Quotation Rejected"
      );

    };

  if (!quotationData) {

    return (
      <>
        <AuthProtection
          role="user"
        />

        <div
          style={{
            padding:"20px",
          }}
        >
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
            💰 Quotation Details
          </h1>

          <p>
            Review quotation received
          </p>
        </div>

        <div
          style={{
            background:"#fff",
            borderRadius:"24px",
            padding:"24px",
            marginBottom:"20px",
          }}
        >
          <h2>
            {quotationData.requestNo}
          </h2>

          <p>
            <strong>Insured Name:</strong>
            <br />
            {quotationData.insuredName}
          </p>

          <p>
            <strong>Risk Location:</strong>
            <br />
            {quotationData.riskLocation}
          </p>

          <p>
            <strong>Sum Insured:</strong>
            <br />
            ₹{quotationData.sumInsured}
          </p>
        </div>

        <div
          style={{
            background:"#fff",
            borderRadius:"24px",
            padding:"24px",
            marginBottom:"20px",
          }}
        >
          <h2>
            Quotation Offered
          </h2>

          <p>
            <strong>Insurance Company:</strong>
            <br />
            {
              quotationData.insuranceCompany ||
              "-"
            }
          </p>

          <p>
            <strong>Coverage:</strong>
            <br />
            {quotationData.coverage}
          </p>

          <p>
            <strong>Premium Amount:</strong>
            <br />
            ₹
            {
              quotationData.quotationPremium ||
              "-"
            }
          </p>

          <p>
            <strong>Validity:</strong>
            <br />
            {
              quotationData.quotationValidity ||
              "-"
            }
          </p>
        </div>
<div
          style={{
            background:"#fff",
            borderRadius:"24px",
            padding:"24px",
            marginBottom:"20px",
          }}
        >
          <h2>
            Remarks
          </h2>

          <div
            style={{
              background:"#f8fafc",
              padding:"15px",
              borderRadius:"12px",
            }}
          >
            {
              quotationData.quotationRemarks ||
              "No Remarks"
            }
          </div>

          <p
            style={{
              marginTop:"15px",
              fontWeight:"700",
            }}
          >
            Status :
            {" "}
            {
              quotationData.status ||
              "Quotation Received"
            }
          </p>
        </div>

        {(
  quotationData.status === "Quotation Received" ||
  quotationData.status === "Quotation Sent"
) && (

          <>
            <button
              onClick={handleAccept}
              style={{
                width:"100%",
                background:"#22c55e",
                color:"#fff",
                border:"none",
                padding:"16px",
                borderRadius:"14px",
                fontSize:"17px",
                fontWeight:"700",
                marginBottom:"15px",
              }}
            >
              ✅ Accept Quotation
            </button>

            <button
              onClick={handleReject}
              style={{
                width:"100%",
                background:"#ef4444",
                color:"#fff",
                border:"none",
                padding:"16px",
                borderRadius:"14px",
                fontSize:"17px",
                fontWeight:"700",
              }}
            >
              ❌ Reject Quotation
            </button>
          </>

        )}

      </div>
    </>
  );
          }
