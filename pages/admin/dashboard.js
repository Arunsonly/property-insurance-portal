import { useState, useEffect } from "react";
import Link from "next/link";

import { database } from "../../lib/firebase";
import { ref, onValue } from "firebase/database";

export default function AdminDashboard() {

const [menuOpen, setMenuOpen] =
useState(false);

const [stats, setStats] =
useState({
pending: 0,
query: 0,
quotation: 0,
policy: 0,
});

const [activities, setActivities] =
useState([]);

useEffect(() => {

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
      setStats({  
        pending: 0,  
        query: 0,  
        quotation: 0,  
        policy: 0,  
      });  

      setActivities([]);  

      return;  
    }  

    const requests =  
      Object.keys(data).map(  
        (key) => ({  
          id: key,  
          ...data[key],  
        })  
      );  

    setStats({  

      pending:  
        requests.filter(  
          (item) =>  
            !item.status ||  
            item.status ===  
              "Pending"  
        ).length,  

      query:  
        requests.filter(  
          (item) =>  
            item.status ===  
              "Query Raised" ||  
            item.status ===  
              "Reply Submitted"  
        ).length,  

      quotation:  
        requests.filter(  
          (item) =>  
            item.status ===  
              "Quotation Received" ||  
            item.status ===  
              "Quotation Accepted" ||  
            item.status ===  
              "Quotation Rejected" ||  
            item.status ===  
              "Revised Quotation"  
        ).length,  

      policy:  
        requests.filter(  
          (item) =>  
            item.status ===  
            "Policy Issued"  
        ).length,  
    });  

    setActivities(  
      [...requests]  
        .reverse()  
        .slice(0, 5)  
    );  
  }  
);

}, []);

return (
<div
style={{
minHeight: "100vh",
background: "#f4f7fc",
fontFamily:
"Arial,sans-serif",
}}
>

<div  
    style={{  
      background:  
        "linear-gradient(135deg,#021024,#032d6a,#0f3f9c)",  
      color: "#fff",  
      padding: "15px 20px",  
      display: "flex",  
      justifyContent:  
        "space-between",  
      alignItems: "center",  
    }}  
  >

<div  
          style={{  
            display: "flex",  
            alignItems: "center",  
            gap: "15px",  
          }}  
        >  
          <button  
            onClick={() =>  
              setMenuOpen(true)  
            }  
            style={{  
              background: "none",  
              border: "none",  
              color: "#fff",  
              fontSize: "26px",  
              cursor: "pointer",  
            }}  
          >  
            ☰  
          </button>  <div>  
        <div  
          style={{  
            fontSize: "20px",  
            fontWeight:  
              "bold",  
          }}  
        >  
          Property Insurance  
          Portal  
        </div>  

        <div  
          style={{  
            fontSize: "12px",  
            opacity: 0.9,  
          }}  
        >  
          Admin Panel  
        </div>  
      </div>  
    </div>  

    <div  
      style={{  
        position:  
          "relative",  
        fontSize: "24px",  
      }}  
    >  
      🔔  

      <span  
        style={{  
          position:  
            "absolute",  
          top: "-5px",  
          right: "-8px",  
          background:  
            "#ef4444",  
          width: "18px",  
          height: "18px",  
          borderRadius:  
            "50%",  
          display: "flex",  
          alignItems:  
            "center",  
          justifyContent:  
            "center",  
          fontSize: "10px",  
        }}  
      >  
        {stats.pending}  
      </span>  
    </div>  
  </div>  

  {menuOpen && (  
    <>  
      <div  
        onClick={() =>  
          setMenuOpen(false)  
        }  
        style={{  
          position:  
            "fixed",  
          inset: 0,  
          background:  
            "rgba(0,0,0,0.4)",  
          zIndex: 999,  
        }}  
      />  

      <div  
        style={{  
          position:  
            "fixed",  
          top: 0,  
          left: 0,  
          width: "270px",  
          height: "100%",  
          background:  
            "#0f172a",  
          color: "#fff",  
          padding: "20px",  
          zIndex: 1000,  
        }}  
      >  
        <div  
          style={{  
            display: "flex",  
            justifyContent:  
              "space-between",  
            alignItems:  
              "center",  
            marginBottom:  
              "25px",  
          }}  
        >  
          <h3  
            style={{  
              margin: 0,  
            }}  
          >  
            Admin Menu  
          </h3>  

          <button  
            onClick={() =>  
              setMenuOpen(false)  
            }  
            style={{  
              background:  
                "none",  
              border: "none",  
              color: "#fff",  
              fontSize: "22px",  
              cursor:  
                "pointer",  
            }}  
          >  
            ✕  
          </button>  
        </div>  

        <div  
          style={{  
            display: "flex",  
            flexDirection:  
              "column",  
            gap: "18px",  
          }}  
        >  
          <Link href="/admin/dashboard" style={menuLink}>📊 Dashboard</Link>  

          <Link href="/admin/pending-requests" style={menuLink}>  
            📋 Pending Requests  
          </Link>  

          <Link href="/admin/query-status" style={menuLink}>  
            ❓ Query Status  
          </Link>  

          <Link href="/admin/quotation-sent" style={menuLink}>  
            💰 Sent Quotations  
          </Link>  

          <Link href="/admin/policy-register" style={menuLink}>  
            📄 Policy Issued  
          </Link>  

          <Link href="/admin/profile" style={menuLink}>  
            👤 Profile  
          </Link>  

          <Link href="/admin/manage-users" style={menuLink}>  
            👥 Manage Users  
          </Link>  

          <Link  
            href="/login"  
            style={{  
              ...menuLink,  
              color:  
                "#fca5a5",  
            }}  
          >  
            🚪 Logout  
          </Link>  
        </div>  
      </div>  
    </>  
  )}  

  <div  
    style={{  
      background:  
        "linear-gradient(135deg,#021024,#032d6a,#0f3f9c)",  
      color: "#fff",  
      padding: "25px 20px 35px",  
    }}  
  >  
    <h2  
      style={{  
        margin: 0,  
      }}  
    >  
      Welcome, Admin 👋  
    </h2>  

    <p  
      style={{  
        marginTop: "10px",  
        opacity: 0.9,  
      }}  
    >  
      Manage requests, quotations  
      and issued policies from one place.  
    </p>  
  </div>  

  <div  
    style={{  
      padding: "20px",  
      display: "grid",  
      gridTemplateColumns:  
        "repeat(auto-fit,minmax(160px,1fr))",  
      gap: "15px",  
      marginTop: "-20px",  
    }}  
  >  
    {[  
      {  
        title: "Pending Requests",  
        count: stats.pending,  
        icon: "📋",  
        color: "#f59e0b",  
        link: "/admin/pending-requests",  
      },  

      {  
        title: "Query Status",  
        count: stats.query,  
        icon: "❓",  
        color: "#8b5cf6",  
        link: "/admin/query-status",  
      },  

      {  
        title: "Sent Quotations",  
        count: stats.quotation,  
        icon: "💰",  
        color: "#10b981",  
        link: "/admin/quotation-sent",  
      },  

      {  
        title: "Policy Issued",  
        count: stats.policy,  
        icon: "📄",  
        color: "#2563eb",  
        link: "/admin/policy-register",  
      },  
    ].map((item, index) => (  
      <Link  
        key={index}  
        href={item.link}  
        style={{  
          textDecoration:  
            "none",  
        }}  
      >

<div  
              style={{  
                background: "#fff",  
                borderRadius: "18px",  
                padding: "20px",  
                boxShadow:  
                  "0 8px 20px rgba(0,0,0,0.08)",  
                borderTop: `5px solid ${item.color}`,  
              }}  
            >  
              <div  
                style={{  
                  fontSize: "32px",  
                  marginBottom: "10px",  
                }}  
              >  
                {item.icon}  
              </div>  <div  
            style={{  
              color: "#64748b",  
              fontSize: "13px",  
              marginBottom: "8px",  
            }}  
          >  
            {item.title}  
          </div>  

          <div  
            style={{  
              fontSize: "28px",  
              fontWeight: "bold",  
              color: "#0f172a",  
            }}  
          >  
            {item.count}  
          </div>  
        </div>  
      </Link>  
    ))}  
  </div>  

  <div  
    style={{  
      margin: "0 20px 20px",  
      background: "#fff",  
      borderRadius: "18px",  
      padding: "20px",  
      boxShadow:  
        "0 8px 20px rgba(0,0,0,0.08)",  
    }}  
  >  
    <h3  
      style={{  
        marginTop: 0,  
        color: "#0f172a",  
      }}  
    >  
      Recent Activities  
    </h3>  

    <div  
      style={{  
        display: "flex",  
        flexDirection: "column",  
        gap: "12px",  
      }}  
    >  
      {activities.map(  
        (item) => (  
          <div  
            key={item.id}  
            style={activityRow}  
          >  
            <span>  
              {item.requestNo}  
            </span>  

            <span>  
              {item.status ||  
                "Pending"}  
            </span>  
          </div>  
        )  
      )}  
    </div>  
  </div>  
</div>

);
}

const menuLink = {
color: "#fff",
textDecoration: "none",
padding: "12px",
borderRadius: "10px",
background:
"rgba(255,255,255,0.08)",
};

const activityRow = {
display: "flex",
justifyContent:
"space-between",
background: "#f8fafc",
padding: "12px",
borderRadius: "10px",
};
