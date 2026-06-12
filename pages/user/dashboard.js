import { useState, useEffect } from "react";
import Link from "next/link";
import AuthProtection from "../auth-protection";
import { database } from "../../lib/firebase";
import { ref, onValue } from "firebase/database";

export default function UserDashboard() {

const [menuOpen,
setMenuOpen] =
useState(false);

const [userName,
setUserName] =
useState("");

const [myRequests,
setMyRequests] =
useState(0);

const [queries,
setQueries] =
useState(0);

const [quotations,
setQuotations] =
useState(0);

const [policies,
setPolicies] =
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

{
title:"Policies",
count:policies,
icon:"📄",
color:"#2563eb",
link:"/user/policy-register",
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
  >    <div    
  style={{    
    background:    
      "linear-gradient(135deg,#0b3d91,#2563eb)",    
    color:"#fff",    
    padding:"15px 20px",    
    display:"flex",    
    justifyContent:    
      "space-between",    
    alignItems:"center",    
  }}    
>    
  <div    
    style={{    
      display:"flex",    
      alignItems:"center",    
      gap:"15px",    
    }}    
  >    
    <button    
      onClick={() =>    
        setMenuOpen(true)    
      }    
      style={{    
        background:"none",    
        border:"none",    
        color:"#fff",    
        fontSize:"26px",    
        cursor:"pointer",    
      }}    
    >    
      ☰    
    </button>    

    <div>    
      <div    
        style={{    
          fontSize:"20px",    
          fontWeight:"bold",    
        }}    
      >    
        Property Insurance    
      </div>    

      <div    
        style={{    
          fontSize:"12px",    
          opacity:0.9,    
        }}    
      >    
        Customer Portal    
      </div>    
    </div>    
  </div>    

  <Link    
    href="/user/profile"    
    style={{    
      color:"#fff",    
      textDecoration:"none",    
      fontSize:"28px",    
    }}    
  >    
    👤    
  </Link>    
</div>

{menuOpen && (
<>

<div  
onClick={() =>  
setMenuOpen(false)  
}  
style={{  
position:"fixed",  
inset:0,  
background:  
"rgba(0,0,0,0.4)",  
zIndex:999,  
}}  
/>  <div    
          style={{    
            position:"fixed",    
            top:0,    
            left:0,    
            width:"270px",    
            height:"100%",    
            background:"#0f172a",    
            color:"#fff",    
            padding:"20px",    
            zIndex:1000,    
          }}    
        >    
          <h3>Customer Menu</h3>    <div    
        style={{    
          display:"flex",    
          flexDirection:"column",    
          gap:"15px",    
        }}    
      >    
        <Link href="/user/dashboard" style={menuLink}>🏠 Dashboard</Link>    
        <Link href="/user/new-request" style={menuLink}>➕ New Request</Link>    
        <Link href="/user/my-requests" style={menuLink}>📋 My Requests</Link>    
        <Link href="/user/query-received" style={menuLink}>❓ Query Received</Link>    
        <Link href="/user/quotation-received" style={menuLink}>💰 Quotations</Link>    
        <Link href="/user/policy-register" style={menuLink}>📄 Policies</Link>    
        <Link href="/user/expiry-register" style={menuLink}>⏳ Expiry Register</Link>    
        <Link href="/user/profile" style={menuLink}>👤 Profile</Link>    

        <button    
          onClick={() => {    

            localStorage.removeItem("role");    
            localStorage.removeItem("userId");    
            localStorage.removeItem("userName");    

            window.location.href = "/";    

          }}    
          style={{    
            ...menuLink,    
            color:"#fca5a5",    
            border:"none",    
            cursor:"pointer",    
            textAlign:"left",    
          }}    
        >    
          🚪 Logout    
        </button>    
      </div>    
    </div>    
  </>    
)}    

<div    
  style={{    
    background:    
      "linear-gradient(135deg,#0b3d91,#2563eb)",    
    color:"#fff",    
    padding:"25px 20px 35px",    
  }}    
>    
  <h2>    
    Welcome {userName} 👋    
  </h2>    

  <p>    
    Manage your requests,    
    quotations and policies.    
  </p>    
</div>    

<div    
  style={{    
    padding:"20px",    
    display:"grid",    
    gridTemplateColumns:    
      "repeat(auto-fit,minmax(160px,1fr))",    
    gap:"15px",    
    marginTop:"-20px",    
  }}    
>    
  {stats.map(    
    (item,index) => (    
      <Link    
        key={index}    
        href={item.link}    
        style={{    
          textDecoration:"none",    
        }}    
      >    
        <div    
          style={{    
            background:"#fff",    
            borderRadius:"18px",    
            padding:"20px",    
            boxShadow:    
              "0 8px 20px rgba(0,0,0,0.08)",    
            borderTop:    
              `5px solid ${item.color}`,    
          }}    
        >    
          <div style={{fontSize:"32px"}}>    
            {item.icon}    
          </div>    

          <div    
            style={{    
              color:"#64748b",    
              fontSize:"13px",    
            }}    
          >    
            {item.title}    
          </div>    

          <div    
            style={{    
              fontSize:"28px",    
              fontWeight:"bold",    
            }}    
          >    
            {item.count}    
          </div>    
        </div>    
      </Link>    
    )    
  )}    
</div>    

<div    
  style={{    
    margin:"0 20px 20px",    
    background:"#fff",    
    borderRadius:"18px",    
    padding:"20px",    
  }}    
>    
  <h3>Quick Access</h3>    

  <div    
    style={{    
      display:"grid",    
      gridTemplateColumns:    
        "1fr 1fr",    
      gap:"12px",    
    }}    
  >    
    <Link href="/user/new-request" style={quickLink}>➕ New Request</Link>    
    <Link href="/user/my-requests" style={quickLink}>📋 My Requests</Link>    
    <Link href="/user/query-received" style={quickLink}>❓ Query Received</Link>    
    <Link href="/user/quotation-received" style={quickLink}>💰 Quotations</Link>    
    <Link href="/user/expiry-register" style={quickLink}>⏳ Expiry Register</Link>    
  </div>    
</div>    

<div    
  style={{    
    margin:"0 20px 20px",    
    background:"#fff",    
    borderRadius:"18px",    
    padding:"20px",    
  }}    
>    
  <h3>Recent Activities</h3>    

  {recentActivities.length === 0 ? (    

    <div style={activityRow}>    
      <span>-</span>    
      <span>No Activity</span>    
    </div>    

  ) : (    

    recentActivities.map(    
      (item) => (    
        <div    
          key={item.id}    
          style={activityRow}    
        >    
          <span>    
            {item.requestNo}    
          </span>    

          <span>    
            {item.status}    
          </span>    
        </div>    
      )    
    )    

  )}    
</div>

  </div>    
</>  );
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
border:"1px solid #e2e8f0",
};

const activityRow = {
display:"flex",
justifyContent:"space-between",
background:"#f8fafc",
padding:"12px",
borderRadius:"10px",
};
