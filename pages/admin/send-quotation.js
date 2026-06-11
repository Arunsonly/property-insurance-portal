import { useRouter } from "next/router";
import { useState } from "react";
import { database } from "../../lib/firebase";
import { ref, update } from "firebase/database";

export default function SendQuotation() {
  const router = useRouter();
  const { id } = router.query;

  const [premium, setPremium] = useState("");
  const [remarks, setRemarks] = useState("");

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
          quotationDate: new Date().toISOString(),
          status: "Quotation Received",
        }
      );

      alert("Quotation Sent Successfully");

      router.push("/admin/pending-requests");
    } catch (error) {
      console.error(error);
      alert("Error Sending Quotation");
    }
  };

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
          padding: "25px",
          borderRadius: "20px",
          marginBottom: "20px",
          boxShadow: "0 10px 25px rgba(34,197,94,.25)",
        }}
      >
        <h1 style={{ margin: 0 }}>
          💰 Send Quotation
        </h1>

        <p style={{ marginTop: "8px" }}>
          Send quotation to customer
        </p>
      </div>

      <div
        style={{
          background: "#fff",
          padding: "20px",
          borderRadius: "20px",
          boxShadow:
            "0 5px 15px rgba(0,0,0,0.08)",
        }}
      >
        <input
          type="number"
          placeholder="Premium Amount"
          value={premium}
          onChange={(e) =>
            setPremium(e.target.value)
          }
          style={{
            width: "100%",
            padding: "15px",
            borderRadius: "12px",
            border: "1px solid #ddd",
            marginBottom: "15px",
            fontSize: "16px",
            boxSizing: "border-box",
          }}
        />

        <textarea
          placeholder="Remarks"
          value={remarks}
          onChange={(e) =>
            setRemarks(e.target.value)
          }
          rows="6"
          style={{
            width: "100%",
            padding: "15px",
            borderRadius: "12px",
            border: "1px solid #ddd",
            marginBottom: "20px",
            fontSize: "16px",
            resize: "none",
            boxSizing: "border-box",
          }}
        />

        <button
          onClick={handleSubmit}
          style={{
            width: "100%",
            background: "#22c55e",
            color: "#fff",
            border: "none",
            padding: "16px",
            borderRadius: "12px",
            fontSize: "17px",
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
