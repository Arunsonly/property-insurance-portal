import { useEffect, useState } from "react";
import Link from "next/link";
import { database } from "../../lib/firebase";
import { ref, onValue } from "firebase/database";

export default function MyRequests() {
  const [requests, setRequests] = useState([]);

  useEffect(() => {
    const requestsRef = ref(database, "requests");

    onValue(requestsRef, (snapshot) => {
      const data = snapshot.val();

      if (data) {
        const loadedRequests = Object.keys(data).map(
          (key) => ({
            id: key,
            ...data[key],
          })
        );

        setRequests(loadedRequests.reverse());
      } else {
        setRequests([]);
      }
    });
  }, []);

  const getColor = (status) => {
    switch (status) {
      case "Pending":
        return "#f59e0b";

      case "Query Raised":
        return "#8b5cf6";

      case "Reply Received":
        return "#2563eb";

      case "Quotation Sent":
        return "#ea580c";

      case "Policy Issued":
        return "#22c55e";

      default:
        return "#6b7280";
    }
  };

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
      <div
        style={{
          background:
            "linear-gradient(135deg,#0b3d91,#2563eb)",
          color: "#fff",
          padding: "30px",
          borderRadius: "24px",
          marginBottom: "20px",
          boxShadow:
            "0 15px 30px rgba(37,99,235,.25)",
        }}
      >
        <h1 style={{ margin: 0 }}>
          📋 My Requests
        </h1>

        <p
          style={{
            marginTop: "10px",
            opacity: "0.9",
          }}
        >
          View all submitted requests
        </p>
      </div>

      <input
        type="text"
        placeholder="Search by Reference No"
        style={{
          width: "100%",
          boxSizing: "border-box",
          padding: "15px",
          borderRadius: "14px",
          border: "1px solid #ddd",
          marginBottom: "20px",
          fontSize: "16px",
          background: "#fff",
        }}
      />

      {requests.length === 0 && (
        <div
          style={{
            background: "#fff",
            padding: "20px",
            borderRadius: "16px",
            textAlign: "center",
          }}
        >
          No Requests Found
        </div>
      )}

      {requests.map((item) => (
        <div
          key={item.id}
          style={{
            background: "#fff",
            borderRadius: "24px",
            padding: "22px",
            marginBottom: "18px",
            boxShadow:
              "0 10px 25px rgba(0,0,0,0.08)",
          }}
        >
          <h2
            style={{
              marginTop: 0,
              color: "#111827",
            }}
          >
            {item.requestNo}
          </h2>

          <p>
            <strong>Insured:</strong>{" "}
            {item.insuredName}
          </p>

          <p>
            <strong>Location:</strong>{" "}
            {item.riskLocation}
          </p>

          <div
            style={{
              display: "inline-block",
              background: getColor(
                item.status
              ),
              color: "#fff",
              padding: "8px 14px",
              borderRadius: "999px",
              fontWeight: "600",
              marginTop: "10px",
            }}
          >
            {item.status}
          </div>

          <div style={{ marginTop: "18px" }}>
            <Link
              href={`/user/request-details?id=${item.id}`}
              style={{
                color: "#2563eb",
                textDecoration: "none",
                fontWeight: "700",
              }}
            >
              View Details →
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
            }
            onChange={(
              e
            ) =>
              setBusinessActivity(
                e.target
                  .value
              )
            }
            placeholder="Business Activity"
            style={
              textareaStyle
            }
          />

          <select
            value={
              coverage
            }
            onChange={(
              e
            ) =>
              setCoverage(
                e.target
                  .value
              )
            }
            style={
              inputStyle
            }
          >
            <option value="">
              Select Coverage Required
            </option>

            <option>
              Fire + STFI + EQ
            </option>

            <option>
              Fire + STFI + EQ + Burglary
            </option>

            <option>
              Fire + STFI + EQ + Terrorism
            </option>

            <option>
              Fire + STFI + EQ + Terrorism + Burglary
            </option>
          </select>

          <input
            placeholder="Enter Total Sum Insured"
            value={
              sumInsured
            }
            onChange={(
              e
            ) =>
              setSumInsured(
                e.target
                  .value
              )
            }
            style={
              inputStyle
            }
          />
        </div>
<div
          style={cardStyle}
        >
          <h2
            style={{
              color:
                "#0b3d91",
            }}
          >
            📎 Upload Documents
          </h2>

          <div
            style={uploadBox}
          >
            <strong>
              Proposal Form
            </strong>

            <input
              type="file"
              onChange={(
                e
              ) =>
                setProposalFile(
                  e.target
                    .files[0]
                )
              }
              style={
                fileStyle
              }
            />
          </div>

          <div
            style={uploadBox}
          >
            <strong>
              Risk Photos
            </strong>

            <input
              type="file"
              onChange={(
                e
              ) =>
                setRiskPhotoFile(
                  e.target
                    .files[0]
                )
              }
              style={
                fileStyle
              }
            />
          </div>

          <div
            style={uploadBox}
          >
            <strong>
              Previous Policy
              (Optional)
            </strong>

            <input
              type="file"
              onChange={(
                e
              ) =>
                setPreviousPolicyFile(
                  e.target
                    .files[0]
                )
              }
              style={
                fileStyle
              }
            />
          </div>
        </div>

        <button
          onClick={
            handleSubmit
          }
          disabled={
            loading
          }
          style={{
            width:
              "100%",
            padding:
              "18px",
            border:
              "none",
            borderRadius:
              "16px",
            background:
              "linear-gradient(135deg,#16a34a,#22c55e)",
            color:
              "#fff",
            fontSize:
              "18px",
            fontWeight:
              "700",
            cursor:
              "pointer",
          }}
        >
          {loading
            ? "Uploading..."
            : "🚀 Submit Request"}
        </button>

      </div>
    </>
  );
}

const cardStyle = {
  background:
    "#fff",

  padding:
    "25px",

  borderRadius:
    "24px",

  marginBottom:
    "20px",

  boxShadow:
    "0 10px 25px rgba(0,0,0,0.08)",
};

const inputStyle = {
  width:
    "100%",

  boxSizing:
    "border-box",

  padding:
    "15px",

  marginTop:
    "12px",

  marginBottom:
    "12px",

  borderRadius:
    "12px",

  border:
    "1px solid #ddd",

  fontSize:
    "16px",

  background:
    "#fafafa",
};

const textareaStyle = {
  width:
    "100%",

  boxSizing:
    "border-box",

  minHeight:
    "120px",

  padding:
    "15px",

  marginTop:
    "12px",

  marginBottom:
    "12px",

  borderRadius:
    "12px",

  border:
    "1px solid #ddd",

  fontSize:
    "16px",

  background:
    "#fafafa",
};

const fileStyle = {
  width:
    "100%",

  marginTop:
    "10px",
};

const uploadBox = {
  border:
    "2px dashed #d1d5db",

  borderRadius:
    "16px",

  padding:
    "15px",

  marginBottom:
    "15px",

  background:
    "#fafafa",
};
