import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { database } from "../../lib/firebase";
import { ref, get, update } from "firebase/database";
import AuthProtection from "../auth-protection";

export default function ReplyQuery() {

  const router = useRouter();
  const { id } = router.query;

  const [requestData, setRequestData] =
    useState(null);

  const [reply, setReply] =
    useState("");

  useEffect(() => {

    if (!id) return;

    const loadData = async () => {

      const snapshot = await get(
        ref(
          database,
          `requests/${id}`
        )
      );

      if (snapshot.exists()) {

        const data =
          snapshot.val();

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

        setRequestData(data);
      }
    };

    loadData();

  }, [id]);

  const handleSubmit =
    async () => {

      if (!reply.trim()) {

        alert("Enter Reply");
        return;

      }

      try {

        await update(
          ref(
            database,
            `requests/${id}`
          ),
          {
            customerReply: reply,
            replyDate:
              new Date()
                .toISOString(),
            status:
              "Reply Submitted",
          }
        );

        alert(
          "Reply Submitted Successfully"
        );

        router.push(
          "/user/my-requests"
        );

      } catch (error) {

        console.error(error);
        alert("Error");

      }
    };

  if (!requestData) {

    return (
      <>
        <AuthProtection role="user" />

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
      <AuthProtection role="user" />

      <div
        style={{
          minHeight:"100vh",
          background:"#f4f7fc",
          padding:"20px",
        }}
      >

        <div
          style={{
            background:
              "linear-gradient(135deg,#7c3aed,#9333ea)",
            color:"#fff",
            padding:"25px",
            borderRadius:"20px",
            marginBottom:"20px",
          }}
        >
          <h1>
            Reply Query
          </h1>
        </div>
<div
          style={{
            background:"#fff",
            padding:"20px",
            borderRadius:"15px",
            marginBottom:"20px",
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
            <b>Admin Query:</b>
          </p>

          <div
            style={{
              background:"#faf5ff",
              padding:"15px",
              borderRadius:"10px",
              border:
                "1px solid #d8b4fe",
            }}
          >
            {requestData.queryMessage}
          </div>
        </div>

        <div
          style={{
            background:"#fff",
            padding:"20px",
            borderRadius:"15px",
            marginBottom:"20px",
          }}
        >
          <h3>
            Your Reply
          </h3>

          <textarea
            value={reply}
            onChange={(e) =>
              setReply(
                e.target.value
              )
            }
            rows="8"
            placeholder="Type your reply..."
            style={{
              width:"100%",
              padding:"12px",
              borderRadius:"10px",
              border:
                "1px solid #ddd",
              resize:"none",
              boxSizing:
                "border-box",
            }}
          />
        </div>

        <button
          onClick={handleSubmit}
          style={{
            width:"100%",
            padding:"16px",
            border:"none",
            borderRadius:"12px",
            background:"#22c55e",
            color:"#fff",
            fontSize:"17px",
            fontWeight:"bold",
            cursor:"pointer",
          }}
        >
          Submit Reply
        </button>

      </div>
    </>
  );
            }
