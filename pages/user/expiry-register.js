import { useEffect, useState } from "react";
import Link from "next/link";
import { database } from "../../lib/firebase";
import { ref, onValue } from "firebase/database";
import AuthProtection from "../auth-protection";

export default function ExpiryRegister() {

  const [policies, setPolicies] =
    useState([]);

  const [month, setMonth] =
    useState(
      String(
        new Date().getMonth() + 1
      ).padStart(2, "0")
    );

  const [year, setYear] =
    useState(
      String(
        new Date().getFullYear()
      )
    );

  useEffect(() => {

    const requestsRef =
      ref(database, "requests");

    onValue(
      requestsRef,
      (snapshot) => {

        const data =
          snapshot.val();

        if (!data) {

          setPolicies([]);

          return;
        }

        const currentUserId =
          localStorage.getItem(
            "userId"
          );

        const loadedPolicies =
          Object.keys(data)
            .map((key) => ({
              id: key,
              ...data[key],
            }))
            .filter(
              (item) =>
                item.status ===
                  "Policy Issued" &&
                item.userId ===
                  currentUserId
            );

        setPolicies(
          loadedPolicies
        );
      }
    );

  }, []);
const filteredPolicies =
    policies
      .filter((item) => {

        if (
          !item.policyExpiryDate
        )
          return false;

        const expiry =
          new Date(
            item.policyExpiryDate
          );

        return (
          String(
            expiry.getMonth() + 1
          ).padStart(2, "0") ===
            month &&
          String(
            expiry.getFullYear()
          ) === year
        );
      })

      .sort(
        (a, b) =>
          new Date(
            a.policyExpiryDate
          ) -
          new Date(
            b.policyExpiryDate
          )
      );

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
        }}
      >

        <div
          style={{
            background:
              "linear-gradient(135deg,#0b3d91,#2563eb)",
            color:"#fff",
            padding:"30px",
            borderRadius:"20px",
            marginBottom:"20px",
          }}
        >
          <h1>
            ⏳ Expiry Register
          </h1>

          <p>
            Month Wise Policy Expiry
          </p>
        </div>

        <div
          style={{
            display:"flex",
            gap:"10px",
            marginBottom:"20px",
          }}
        >
<input
            value={month}
            onChange={(e)=>
              setMonth(
                e.target.value
              )
            }
            placeholder="MM"
            style={{
              flex:1,
              padding:"12px",
            }}
          />

          <input
            value={year}
            onChange={(e)=>
              setYear(
                e.target.value
              )
            }
            placeholder="YYYY"
            style={{
              flex:1,
              padding:"12px",
            }}
          />

        </div>

        {filteredPolicies.length === 0 && (

          <div
            style={{
              background:"#fff",
              padding:"20px",
              borderRadius:"15px",
              textAlign:"center",
            }}
          >
            No Expiry Found
          </div>

        )}

        {filteredPolicies.map(
          (policy) => (

            <div
              key={policy.id}
              style={{
                background:"#fff",
                padding:"20px",
                borderRadius:"20px",
                marginBottom:"15px",
                boxShadow:
                  "0 2px 10px rgba(0,0,0,.08)",
              }}
            >

              <h3>
                {policy.policyNo}
              </h3>

              <p>
                <b>Reference:</b>
                {" "}
                {policy.requestNo}
              </p>

              <p>
                <b>Insured:</b>
                {" "}
                {policy.insuredName}
              </p>

              <p>
                <b>Expiry:</b>
                {" "}
                {policy.policyExpiryDate}
              </p>

              <Link
                href={`/user/policy-details?id=${policy.id}`}
                style={{
                  background:"#2563eb",
                  color:"#fff",
                  textDecoration:"none",
                  padding:"10px 15px",
                  borderRadius:"10px",
                  display:"inline-block",
                }}
              >
                View Policy
              </Link>

            </div>

          )
        )}

      </div>
    </>
  );
              }
