import { useEffect, useState } from "react";
import Link from "next/link";
import { database } from "../../lib/firebase";
import { ref, onValue } from "firebase/database";
import AuthProtection from "../auth-protection";

export default function MyRequests() {

  const [requests,
    setRequests] =
    useState([]);

  const [search,
    setSearch] =
    useState("");

  const [statusFilter,
    setStatusFilter] =
    useState("All");

  useEffect(() => {

    const requestsRef =
      ref(
        database,
        "requests"
      );

    const unsubscribe =
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
                id:key,
                ...data[key],
              }))
              .filter(
                (item) =>
                  item.userId ===
                  currentUserId
              );

          setRequests(
            loadedRequests.reverse()
          );

        }
      );

    return () =>
      unsubscribe();

  }, []);

  const getColor =
    (status) => {

      switch (status) {

        case "Pending":
          return "#f59e0b";

        case "Query Raised":
          return "#8b5cf6";

        case "Reply Submitted":
          return "#2563eb";

        case "Quotation Received":
          return "#22c55e";

        case "Quotation Accepted":
          return "#16a34a";

        case "Quotation Rejected":
          return "#ef4444";

        case "Re-Submitted":
          return "#64748b";

        case "Policy Issued":
          return "#22c55e";

        case "Cancelled By User":
          return "#374151";

        default:
          return "#6b7280";
      }

    };

  const getLabel =
    (status) => {

      switch (status) {

        case "Pending":
          return "Pending";

        case "Query Raised":
          return "Query Raised";

        case "Reply Submitted":
          return "Query Replied";

        case "Quotation Received":
          return "Quotation Received";

        case "Quotation Accepted":
          return "Accepted By You";

        case "Quotation Rejected":
          return "Rejected By You";

        case "Re-Submitted":
          return "Re-Submitted";

        case "Policy Issued":
          return "Policy Issued";

        case "Cancelled By User":
          return "Cancelled By User";

        default:
          return status;
      }

    };
const filteredRequests =
    requests.filter(
      (item) => {

        const searchMatch =

          item.requestNo
            ?.toLowerCase()
            .includes(
              search.toLowerCase()
            ) ||

          item.policyNo
            ?.toLowerCase()
            .includes(
              search.toLowerCase()
            ) ||

          item.insuredName
            ?.toLowerCase()
            .includes(
              search.toLowerCase()
            );

        const statusMatch =

          statusFilter === "All"
            ? true
            : item.status ===
              statusFilter;

        return (
          searchMatch &&
          statusMatch
        );

      }
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
            📋 My Requests
          </h1>

          <p>
            View all submitted requests
          </p>
        </div>

        <input
          type="text"
          placeholder="Search Request No / Policy No / Insured Name"
          value={search}
          onChange={(e) =>
            setSearch(
              e.target.value
            )
          }
          style={{
            width:"100%",
            padding:"14px",
            border:"1px solid #ddd",
            borderRadius:"12px",
            marginBottom:"12px",
            fontSize:"15px",
          }}
        />

        <select
          value={statusFilter}
          onChange={(e) =>
            setStatusFilter(
              e.target.value
            )
          }
          style={{
            width:"100%",
            padding:"14px",
            border:"1px solid #ddd",
            borderRadius:"12px",
            marginBottom:"20px",
            fontSize:"15px",
          }}
        >
          <option value="All">
            All Status
          </option>

          <option value="Pending">
            Pending
          </option>

          <option value="Query Raised">
            Query Raised
          </option>

          <option value="Reply Submitted">
            Query Replied
          </option>

          <option value="Quotation Received">
            Quotation Received
          </option>

          <option value="Quotation Accepted">
            Accepted By You
          </option>

          <option value="Quotation Rejected">
            Rejected By You
          </option>

          <option value="Re-Submitted">
            Re-Submitted
          </option>

          <option value="Policy Issued">
            Policy Issued
          </option>

          <option value="Cancelled By User">
            Cancelled By User
          </option>
        </select>

        {filteredRequests.length === 0 && (

          <div
            style={{
              background:"#fff",
              padding:"20px",
              borderRadius:"16px",
              textAlign:"center",
            }}
          >
            No Requests Found
          </div>

        )}
{filteredRequests.map(
          (item) => (

            <div
              key={item.id}
              style={{
                background:"#fff",
                borderRadius:"24px",
                padding:"22px",
                marginBottom:"18px",
                boxShadow:
                  "0 10px 25px rgba(0,0,0,0.08)",
              }}
            >

              <h2>
                {item.requestNo}
              </h2>

              <p>
                <strong>
                  Insured :
                </strong>{" "}
                {item.insuredName}
              </p>

              <p>
                <strong>
                  Mobile :
                </strong>{" "}
                {item.mobile || "-"}
              </p>

              <p>
                <strong>
                  Location :
                </strong>{" "}
                {item.riskLocation}
              </p>

              {item.policyNo && (
                <p>
                  <strong>
                    Policy No :
                  </strong>{" "}
                  {item.policyNo}
                </p>
              )}

              <div
                style={{
                  display:"inline-block",
                  background:
                    getColor(
                      item.status
                    ),
                  color:"#fff",
                  padding:"8px 14px",
                  borderRadius:"999px",
                  fontWeight:"600",
                  marginTop:"10px",
                }}
              >
                {
                  getLabel(
                    item.status
                  )
                }
              </div>

              <div
                style={{
                  marginTop:"18px",
                }}
              >
                <Link
                  href={`/user/request-details?id=${item.id}`}
                  style={{
                    color:"#2563eb",
                    textDecoration:"none",
                    fontWeight:"700",
                  }}
                >
                  View Details →
                </Link>
              </div>

            </div>

          )
        )}

      </div>
    </>
  );
                }
