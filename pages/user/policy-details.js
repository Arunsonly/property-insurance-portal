import { useEffect, useState } from "react";

import { useRouter }
from "next/router";

import { database }
from "../../lib/firebase";

import {
  ref,
  onValue
} from "firebase/database";

import AuthProtection
from "../auth-protection";

export default function PolicyDetails() {

  const router =
    useRouter();

  const { id } =
    router.query;

  const [policyData,
    setPolicyData] =
    useState(null);

  useEffect(() => {

    if (!id)
      return;

    const requestRef =
      ref(
        database,
        `requests/${id}`
      );

    const unsubscribe =
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

          setPolicyData(
            data
          );
        }
      );

    return () =>
      unsubscribe();

  }, [id, router]);

  if (!policyData) {

    return (
      <>
        <AuthProtection
          role="user"
        />

        <div
          style={{
            padding: "20px",
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
          background:
            "#f4f7fc",
          minHeight:
            "100vh",
          padding:
            "20px",
          maxWidth:
            "700px",
          margin:
            "0 auto",
        }}
      >
<div
          style={{
            background:
              "#dcfce7",
            color:
              "#166534",
            padding:
              "15px",
            borderRadius:
              "14px",
            fontWeight:
              "700",
            textAlign:
              "center",
            marginBottom:
              "20px",
            border:
              "1px solid #86efac",
          }}
        >
          ✅ Policy Active
        </div>

        <div
          style={{
            background:
              "#fff",
            borderRadius:
              "24px",
            padding:
              "24px",
            marginBottom:
              "20px",
            boxShadow:
              "0 10px 25px rgba(0,0,0,.08)",
          }}
        >
          <h2>
            Policy Information
          </h2>

          <p>
            <strong>
              Policy Number:
            </strong>
            <br />
            {
              policyData.policyNo ||
              "-"
            }
          </p>

          <p>
            <strong>
              Reference No:
            </strong>
            <br />
            {
              policyData.requestNo ||
              "-"
            }
          </p>

          <p>
            <strong>
              Insured Name:
            </strong>
            <br />
            {
              policyData.insuredName ||
              "-"
            }
          </p>

          <p>
            <strong>
              Risk Location:
            </strong>
            <br />
            {
              policyData.riskLocation ||
              "-"
            }
          </p>

          <p>
            <strong>
              Status:
            </strong>
            <br />
            {
              policyData.status ||
              "-"
            }
          </p>

        </div>

        <div
          style={{
            background:
              "#fff",
            borderRadius:
              "24px",
            padding:
              "24px",
            marginBottom:
              "20px",
            boxShadow:
              "0 10px 25px rgba(0,0,0,.08)",
          }}
        >
          <h2>
            Coverage Details
          </h2>

          <p>
            <strong>
              Coverage:
            </strong>
            <br />
            {
              policyData.coverage ||
              "-"
            }
          </p>

          <p>
            <strong>
              Sum Insured:
            </strong>
            <br />
            ₹{
              policyData.sumInsured ||
              "-"
            }
          </p>

          <p>
            <strong>
              Premium Paid:
            </strong>
            <br />
            ₹{
              policyData.quotationPremium ||
              "-"
            }
          </p>

          <p>
            <strong>
              Risk Type:
            </strong>
            <br />
            {
              policyData.riskType ||
              "-"
            }
          </p>

          <p>
            <strong>
              Property Type:
            </strong>
            <br />
            {
              Array.isArray(
                policyData.propertyType
              )
                ? policyData.propertyType.join(
                    ", "
                  )
                : "-"
            }
          </p>

          <p>
            <strong>
              Business Activity:
            </strong>
            <br />
            {
              policyData.businessActivity ||
              "-"
            }
          </p>
        </div>
<div
          style={{
            background:
              "#fff",
            borderRadius:
              "24px",
            padding:
              "24px",
            marginBottom:
              "20px",
            boxShadow:
              "0 10px 25px rgba(0,0,0,.08)",
          }}
        >
          <h2>
            Policy Period
          </h2>

          <p>
            <strong>
              Start Date:
            </strong>
            <br />
            {
              policyData.policyStartDate ||
              "-"
            }
          </p>

          <p>
            <strong>
              Expiry Date:
            </strong>
            <br />
            {
              policyData.policyExpiryDate ||
              "-"
            }
          </p>

          <p>
            <strong>
              Policy Issued Date:
            </strong>
            <br />
            {
              policyData.policyIssuedDate ||
              "-"
            }
          </p>
        </div>

        <button
          onClick={() => {

            if (
              policyData.policyPdfUrl
            ) {

              window.open(
                policyData.policyPdfUrl,
                "_blank"
              );

            } else {

              alert(
                "Policy PDF Not Uploaded Yet"
              );

            }

          }}
          style={{
            width:
              "100%",
            background:
              "#2563eb",
            color:
              "#fff",
            border:
              "none",
            padding:
              "16px",
            borderRadius:
              "14px",
            fontSize:
              "17px",
            fontWeight:
              "700",
            marginBottom:
              "15px",
            cursor:
              "pointer",
          }}
        >
          📄 Download Policy PDF
        </button>

        <button
          onClick={() => {

            if (
              policyData.receiptUrl
            ) {

              window.open(
                policyData.receiptUrl,
                "_blank"
              );

            } else {

              alert(
                "Receipt Not Uploaded Yet"
              );

            }

          }}
          style={{
            width:
              "100%",
            background:
              "#16a34a",
            color:
              "#fff",
            border:
              "none",
            padding:
              "16px",
            borderRadius:
              "14px",
            fontSize:
              "17px",
            fontWeight:
              "700",
            cursor:
              "pointer",
          }}
        >
          🧾 Download Receipt
        </button>

      </div>
    </>
  );
          }
