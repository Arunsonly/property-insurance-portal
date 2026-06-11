import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { database } from "../../lib/firebase";
import { ref, get, update } from "firebase/database";

export default function SendQuotation() {
  const router = useRouter();
  const { id } = router.query;

  const [requestData, setRequestData] =
    useState(null);

  const [premium, setPremium] =
    useState("");

  const [remarks, setRemarks] =
    useState("");

  useEffect(() => {
    if (!id) return;

    const loadData = async () => {
      const snapshot = await get(
        ref(database, `requests/${id}`)
      );

      if (snapshot.exists()) {
        setRequestData(
          snapshot.val()
        );
      }
    };

    loadData();
  }, [id]);

  const handleSubmit = async () => {
    if (!premium) {
      alert("Enter Premium");
      return;
    }

    try {
      await update(
        ref(database, `requests/${id}`),
        {
          quotationPremium: premium,
          quotationRemarks: remarks,
          quotationDate:
            new Date().toISOString(),
          status:
            "Quotation Received",
        }
      );

      alert(
        "Quotation Sent Successfully"
      );

      router.push(
        "/admin/pending-requests"
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
        minHeight: "100vh",
        background: "#f4f7fc",
        padding: "15px",
      }}
    >
      <div
        style={{
          background:
            "linear-gradient(135deg,#16a34a,#22c55e)",
          color: "#fff",
          padding: "20px",
          borderRadius: "15px",
          marginBottom: "15px",
        }}
      >
        <h2
          style={{
            margin: 0,
          }}
        >
          Send Quotation
        </h2>

        <p
          style={{
            marginTop: "5px",
          }}
        >
          Review Request & Send Premium
        </p>
      </div>

      <div
        style={{
          background: "#fff",
          padding: "18px",
          borderRadius: "15px",
          marginBottom: "15px",
        }}
      >
        <h3>Customer Details</h3>

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
          marginBottom: "15px",
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
          <b>Coverage:</b>{" "}
          {requestData.coverage}
        </p>

        <p>
          <b>Sum Insured:</b>{" "}
          {requestData.sumInsured}
        </p>
      </div>

      {requestData.customerReply && (
        <div
          style={{
            background: "#fff",
            padding: "18px",
            borderRadius: "15px",
            marginBottom: "15px",
          }}
        >
          <h3>Customer Reply</h3>

          <div
            style={{
              background:
                "#ecfdf5",
              padding: "15px",
              borderRadius: "10px",
              border:
                "1px solid #86efac",
            }}
          >
            {
              requestData.customerReply
            }
          </div>
        </div>
      )}

      <div
        style={{
          background: "#fff",
          padding: "18px",
          borderRadius: "15px",
        }}
      >
        <h3>Quotation Details</h3>

        <input
          type="number"
          placeholder="Premium Amount"
          value={premium}
          onChange={(e) =>
            setPremium(
              e.target.value
            )
          }
          style={{
            width: "100%",
            padding: "14px",
            borderRadius: "10px",
            border:
              "1px solid #ddd",
            marginBottom: "15px",
            boxSizing:
              "border-box",
          }}
        />

        <textarea
          placeholder="Remarks"
          value={remarks}
          onChange={(e) =>
            setRemarks(
              e.target.value
            )
          }
          rows="5"
          style={{
            width: "100%",
            padding: "14px",
            borderRadius: "10px",
            border:
              "1px solid #ddd",
            marginBottom: "15px",
            boxSizing:
              "border-box",
          }}
        />

        <button
          onClick={handleSubmit}
          style={{
            width: "100%",
            padding: "15px",
            border: "none",
            borderRadius: "10px",
            background:
              "#22c55e",
            color: "#fff",
            fontSize: "16px",
            fontWeight: "bold",
            cursor: "pointer",
          }}
        >
          Send Quotation
        </button>
      </div>
    </div>
  );
}
