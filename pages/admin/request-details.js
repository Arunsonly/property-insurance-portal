import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import { database } from "../../lib/firebase";
import { ref, onValue } from "firebase/database";

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
        minHeight: "100vh",
        background: "#f4f7fc",
        padding: "15px",
      }}
    >
      <div
        style={{
          background: "#0b3d91",
          color: "#fff",
          padding: "18px",
          borderRadius: "12px",
          marginBottom: "15px",
        }}
      >
        <h2>Request Details</h2>
      </div>

      <div
        style={{
          background: "#fff",
          padding: "18px",
          borderRadius: "15px",
          marginBottom: "15px",
        }}
      >
        <p>
          <b>Reference No:</b>{" "}
          {requestData.requestNo}
        </p>

        <p>
          <b>Insured Name:</b>{" "}
          {requestData.insuredName}
        </p>

        <p>
          <b>Mobile:</b>{" "}
          {requestData.mobile}
        </p>

        <p>
          <b>Address:</b>{" "}
          {requestData.address}
        </p>
      </div>

      <div
        style={{
          background: "#fff",
          padding: "18px",
          borderRadius: "15px",
          marginBottom: "20px",
        }}
      >
        <h3>Risk Details</h3>

        <p>
          <b>Risk Location:</b>{" "}
          {requestData.riskLocation}
        </p>

        <p>
          <b>Risk Type:</b>{" "}
          {requestData.riskType}
        </p>

        <p>
          <b>Business Activity:</b>{" "}
          {requestData.businessActivity}
        </p>

        <p>
          <b>Sum Insured:</b>{" "}
          {requestData.sumInsured}
        </p>

        <p>
          <b>Coverage:</b>{" "}
          {requestData.coverage}
        </p>
      </div>
{requestData.customerReply && (
  <div
    style={{
      background: "#fff",
      padding: "18px",
      borderRadius: "15px",
      marginBottom: "20px",
    }}
  >
    <h3>Customer Reply</h3>

    <div
      style={{
        background: "#ecfdf5",
        border: "1px solid #86efac",
        padding: "15px",
        borderRadius: "10px",
      }}
    >
      {requestData.customerReply}
    </div>

    <p
      style={{
        marginTop: "10px",
        color: "#666",
        fontSize: "14px",
      }}
    >
      Reply Date:
      {" "}
      {requestData.replyDate}
    </p>
  </div>
)}
      <div
        style={{
          display: "grid",
          gap: "12px",
        }}
      >
        <Link
  href={`/admin/raise-query?id=${id}`}
>
  <button
    style={{
      width: "100%",
      padding: "15px",
      border: "none",
      borderRadius: "10px",
      background: "#6f42c1",
      color: "#fff",
      fontSize: "16px",
      cursor: "pointer",
    }}
  >
    Raise Query
  </button>
</Link>

        <Link href={`/admin/send-quotation?id=${id}`}>
          <button
            style={{
              width: "100%",
              padding: "15px",
              border: "none",
              borderRadius: "10px",
              background: "#28a745",
              color: "#fff",
              fontSize: "16px",
              cursor: "pointer",
            }}
          >
            Send Quotation
          </button>
        </Link>

        <button
          style={{
            width: "100%",
            padding: "15px",
            border: "none",
            borderRadius: "10px",
            background: "#dc3545",
            color: "#fff",
            fontSize: "16px",
            cursor: "pointer",
          }}
        >
          Reject Request
        </button>
      </div>
    </div>
  );
}
