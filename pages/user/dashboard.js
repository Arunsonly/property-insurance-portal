import { useState, useEffect } from "react";
import Link from "next/link";
import AuthProtection from "../auth-protection";
import { database } from "../../lib/firebase";
import { ref, onValue } from "firebase/database";

export default function UserDashboard() {

  const [menuOpen,setMenuOpen] =
    useState(false);

  const [userName,setUserName] =
    useState("");

  const [myRequests,setMyRequests] =
    useState(0);

  const [queries,setQueries] =
    useState(0);

  const [quotations,setQuotations] =
    useState(0);

  const [policies,setPolicies] =
    useState(0);

  const [recentActivities,
    setRecentActivities] =
    useState([]);

  useEffect(() => {

    const name =
      localStorage.getItem(
        "userName"
      );

    const userId =
      localStorage.getItem(
        "userId"
      );

    if (name) {
      setUserName(name);
    }

    const requestsRef =
      ref(
        database,
        "requests"
      );

    onValue(
      requestsRef,
      (snapshot) => {

        const data =
          snapshot.val();

        if (!data) {

          setMyRequests(0);
          setQueries(0);
          setQuotations(0);
          setPolicies(0);
          setRecentActivities([]);

          return;
        }

        const allRequests =
          Object.keys(data).map(
            (key) => ({
              id:key,
              ...data[key],
            })
          );

        const userRequests =
          allRequests.filter(
            (item) =>
              item.userId ===
              userId
          );

        setMyRequests(
          userRequests.length
        );

        setQueries(
          userRequests.filter(
            (x) =>
              x.status ===
              "Query Raised"
          ).length
        );
setQuotations(
          userRequests.filter(
            (x) =>
              x.status ===
              "Quotation Received"
          ).length
        );

        setPolicies(
          userRequests.filter(
            (x) =>
              x.status ===
              "Policy Issued"
          ).length
        );

        setRecentActivities(
          userRequests
            .sort(
              (a,b) =>
                new Date(
                  b.createdAt || 0
                ) -
                new Date(
                  a.createdAt || 0
                )
            )
            .slice(0,5)
        );

      }
    );

  }, []);

  const stats = [

    {
      title:"New Request",
      count:"+",
      icon:"➕",
      color:"#2563eb",
      link:"/user/new-request",
    },

    {
      title:"My Requests",
      count:myRequests,
      icon:"📋",
      color:"#f59e0b",
      link:"/user/my-requests",
    },

    {
      title:"Queries",
      count:queries,
      icon:"❓",
      color:"#8b5cf6",
      link:"/user/query-received",
    },

    {
      title:"Quotations",
      count:quotations,
      icon:"💰",
      color:"#10b981",
      link:"/user/quotation-received",
    },

  ];

  return (
    <>
      <AuthProtection
        role="user"
      />

      <div
        style={{
          minHeight:"100vh",
          background:"#f4f7fc",
          fontFamily:
            "Arial,sans-serif",
        }}
      >
{/* Dashboard ka baaki UI wahi rahega
            jo tumhare original code me tha */}

        {/* Important Logic Updated */}

        {/* Queries Count */}
        {/* Sirf Query Raised */}

        {/* Quotations Count */}
        {/* Sirf Quotation Received */}

        {/* Accepted, Rejected,
            Re-Submitted,
            Policy Issued
            count nahi honge */}

        {/* Recent Activities */}
        {/* createdAt missing hone par
            crash nahi karega */}

      </div>
    </>
  );
}

const menuLink = {
  color:"#fff",
  textDecoration:"none",
  padding:"12px",
  borderRadius:"10px",
  background:
    "rgba(255,255,255,0.08)",
};

const quickLink = {
  textDecoration:"none",
  background:"#f8fafc",
  padding:"15px",
  borderRadius:"12px",
  textAlign:"center",
  color:"#0f172a",
  fontWeight:"600",
  border:
    "1px solid #e2e8f0",
};

const activityRow = {
  display:"flex",
  justifyContent:
    "space-between",
  background:"#f8fafc",
  padding:"12px",
  borderRadius:"10px",
};
