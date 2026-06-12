import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { database } from "../../lib/firebase";
import { ref, get, update } from "firebase/database";
import AuthProtection from "../auth-protection";
export default function RaiseQuery() {
  const router = useRouter();
  const { id } = router.query;

  const [query, setQuery] = useState("");
  const [requestData, setRequestData] =
    useState(null);

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
    if (!query.trim()) {
      alert("Enter Query");
      return;
    }

    try {
      await update(
        ref(database, `requests/${id}`),
        {
          status: "Query Raised",
          queryMessage: query,
          queryDate:
            new Date().toISOString(),
        }
      );

      alert(
        "Query Raised Successfully"
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
    <>
    <AuthProtection role="admin" />
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
        <h2 style={{ margin: 0 }}>
          Raise Query
        </h2>
      </div>

      <div
        style={{
          background: "#fff",
          padding: "15px",
          borderRadius: "12px",
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
      </div>

      <div
        style={{
          background: "#fff",
          padding: "15px",
          borderRadius: "12px",
          marginBottom: "15px",
        }}
      >
        <label>
          <b>Query Message</b>
        </label>

        <textarea
          value={query}
          onChange={(e) =>
            setQuery(
              e.target.value
            )
          }
          placeholder="Type your query here..."
          rows="8"
          style={{
            width: "100%",
            marginTop: "10px",
            padding: "12px",
            borderRadius: "10px",
            border:
              "1px solid #ddd",
            resize: "none",
            fontSize: "15px",
          }}
        />
      </div>

      <button
        onClick={handleSubmit}
        style={{
          width: "100%",
          padding: "16px",
          border: "none",
          borderRadius: "12px",
          background: "#6f42c1",
          color: "#fff",
          fontSize: "17px",
          fontWeight: "bold",
          cursor: "pointer",
        }}
      >
        Send Query
      </button>
    </div>
</>
  );
}
