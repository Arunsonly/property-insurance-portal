import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import { database } from "../../lib/firebase";
import { ref, onValue } from "firebase/database";
import AuthProtection from "../auth-protection";

export default function RequestDetails() {

const router = useRouter();
const { id } = router.query;

const [requestData, setRequestData] =
useState(null);

useEffect(() => {

if (!id) return;

const requestRef =
ref(
database,
`requests/${id}`
);

const unsubscribe =
onValue(
requestRef,
(snapshot) => {

const data =  
    snapshot.val();  

  if (data) {  
    setRequestData(data);  
  }  

}

);

return () =>
unsubscribe();

}, [id]);

if (!requestData) {

return (

  <div  
    style={{  
      minHeight:"100vh",  
      display:"flex",  
      alignItems:"center",  
      justifyContent:"center",  
      background:"#f4f7fc",  
      fontSize:"18px",  
      fontWeight:"600",  
    }}  
  >  
    Loading...  
  </div>  
);  }

return (
<>
<AuthProtection role="admin" />

  <div  
    style={{  
      minHeight:"100vh",  
      background:"#f4f7fc",  
      padding:"15px",  
    }}  
  >  <div  
  style={{  
    background:  
      "linear-gradient(135deg,#0b3d91,#2563eb)",  
    color:"#fff",  
    padding:"22px",  
    borderRadius:"18px",  
    marginBottom:"15px",  
  }}  
>  
  <h2 style={{ margin:0 }}>  
    📋 Request Details  
  </h2>  

  <p  
    style={{  
      marginTop:"8px",  
      opacity:0.9,  
    }}  
  >  
    Complete Proposal Information  
  </p>  
</div>  

<div  
  style={{  
    background:"#fff",  
    padding:"20px",  
    borderRadius:"18px",  
    marginBottom:"15px",  
    boxShadow:  
      "0 4px 15px rgba(0,0,0,0.08)",  
  }}  
>  

  <div  
    style={{  
      display:"flex",  
      justifyContent:"space-between",  
      alignItems:"center",  
      marginBottom:"15px",  
    }}  
  >  
    <h3 style={{ margin:0 }}>  
      Basic Details  
    </h3>  

    <span  
      style={{  
        background:"#fef3c7",  
        color:"#92400e",  
        padding:"8px 14px",  
        borderRadius:"999px",  
        fontSize:"13px",  
        fontWeight:"600",  
      }}  
    >  
      {
        requestData.status === "Reply Submitted"
          ? "Replied By User"
          : (requestData.status || "Pending")
      }  
    </span>  

  </div>  

  <p><b>Reference No:</b> {requestData.requestNo}</p>  
  <p><b>Customer Name:</b> {requestData.userName}</p>  
  <p><b>Insured Name:</b> {requestData.insuredName}</p>  
  <p><b>Mobile:</b> {requestData.mobile}</p>  
  <p><b>Address:</b> {requestData.address}</p>  

  <p>  
    <b>Created On:</b>{" "}  
    {  
      requestData.createdAt  
        ? new Date(  
            requestData.createdAt  
          ).toLocaleString()  
        : "-"  
    }  
  </p>  

</div>

<div  
          style={{  
            background:"#fff",  
            padding:"20px",  
            borderRadius:"18px",  
            marginBottom:"15px",  
            boxShadow:  
              "0 4px 15px rgba(0,0,0,0.08)",  
          }}  
        >      <h3  
        style={{  
          marginTop:0,  
        }}  
      >  
        🏭 Risk Details  
      </h3>  <p>  
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
    <b>Coverage Required:</b>{" "}  
    {requestData.coverage}  
  </p>  

  <p>  
    <b>Property Type:</b>{" "}  
    {Array.isArray(requestData.propertyType)  
      ? requestData.propertyType.join(", ")  
      : requestData.propertyType}  
  </p>  

</div>  

<div  
  style={{  
    background:"#fff",  
    padding:"20px",  
    borderRadius:"18px",  
    marginBottom:"15px",  
    boxShadow:  
      "0 4px 15px rgba(0,0,0,0.08)",  
  }}  
>  

  <h3  
    style={{  
      marginTop:0,  
    }}  
  >  
    💰 Sum Insured Breakup  
  </h3>  

  <table  
    style={{  
      width:"100%",  
      borderCollapse:"collapse",  
    }}  
  >  
    <tbody>  

      <tr>  
        <td style={tableCell}>  
          Building  
        </td>  
        <td style={tableCell}>  
          ₹ {requestData.buildingSI || 0}  
        </td>  
      </tr>  

      <tr>  
        <td style={tableCell}>  
          Stock / Assets  
        </td>  
        <td style={tableCell}>  
          ₹ {requestData.stockSI || 0}  
        </td>  
      </tr>  

      <tr>  
        <td style={tableCell}>  
          Plant & Machinery  
        </td>  
        <td style={tableCell}>  
          ₹ {requestData.plantSI || 0}  
        </td>  
      </tr>  

      <tr>  
        <td style={tableCell}>  
          Roof Top Solar  
        </td>  
        <td style={tableCell}>  
          ₹ {requestData.solarSI || 0}  
        </td>  
      </tr>  

      <tr>  
        <td style={tableCell}>  
          Others  
        </td>  
        <td style={tableCell}>  
          ₹ {requestData.othersSI || 0}  
        </td>  
      </tr>  

      <tr  
        style={{  
          background:"#ecfdf5",  
          fontWeight:"700",  
        }}  
      >  
        <td style={tableCell}>  
          Total Sum Insured  
        </td>  

        <td style={tableCell}>  
          ₹ {requestData.sumInsured}  
        </td>  
      </tr>  

    </tbody>  
  </table>  

</div>

<div  
          style={{  
            background:"#fff",  
            padding:"20px",  
            borderRadius:"18px",  
            marginBottom:"15px",  
            boxShadow:  
              "0 4px 15px rgba(0,0,0,0.08)",  
          }}  
        >      <h3 style={{marginTop:0}}>  
        📝 Additional Information  
      </h3>  <div  
    style={{  
      background:"#f8fafc",  
      padding:"15px",  
      borderRadius:"12px",  
      border:"1px solid #e5e7eb",  
      lineHeight:"1.7",  
    }}  
  >  
    {  
      requestData.additionalInfo ||  
      "No Additional Information Provided"  
    }  
  </div>  

</div>

{requestData.queryMessage && (

  <div  
    style={{  
      background:"#fff",  
      padding:"20px",  
      borderRadius:"18px",  
      marginBottom:"15px",  
      boxShadow:"0 4px 15px rgba(0,0,0,0.08)",  
    }}  
  >  <h3 style={{marginTop:0}}>  
  ❓ Query Raised  
</h3>  

<div  
  style={{  
    background:"#fef3c7",  
    border:"1px solid #fcd34d",  
    padding:"15px",  
    borderRadius:"12px",  
  }}  
>  
  {requestData.queryMessage}  
</div>  

<p  
  style={{  
    marginTop:"10px",  
    color:"#666",  
    fontSize:"14px",  
  }}  
>  
  Query Date: {requestData.queryDate || "-"}  
</p>

  </div>  )}

{requestData.customerReply && (  

  <div  
    style={{  
      background:"#fff",  
      padding:"20px",  
      borderRadius:"18px",  
      marginBottom:"15px",  
      boxShadow:  
        "0 4px 15px rgba(0,0,0,0.08)",  
    }}  
  >  

    <h3 style={{marginTop:0}}>  
      💬 Customer Reply  
    </h3>  

    <div  
      style={{  
        background:"#ecfdf5",  
        border:"1px solid #86efac",  
        padding:"15px",  
        borderRadius:"12px",  
        lineHeight:"1.7",  
      }}  
    >  
      {requestData.customerReply}  
    </div>  

    <p  
      style={{  
        marginTop:"10px",  
        color:"#666",  
        fontSize:"14px",  
      }}  
    >  
      Reply Date:{" "}  
      {requestData.replyDate || "-"}  
    </p>  

  </div>  

)}  

<div  
  style={{  
    display:"grid",  
    gap:"12px",  
    marginBottom:"20px",  
  }}  
>

{(!requestData.status ||
requestData.status === "Pending") && (
<>

<Link href={`/admin/raise-query?id=${id}`}>  
        <button  
          style={{  
            width:"100%",  
            padding:"15px",  
            border:"none",  
            borderRadius:"12px",  
            background:"#7c3aed",  
            color:"#fff",  
            fontSize:"16px",  
            fontWeight:"600",  
            cursor:"pointer",  
          }}  
        >  
          ❓ Raise Query  
        </button>  
      </Link>  

      <Link href={`/admin/send-quotation?id=${id}`}>  
        <button  
          style={{  
            width:"100%",  
            padding:"15px",  
            border:"none",  
            borderRadius:"12px",  
            background:"#16a34a",  
            color:"#fff",  
            fontSize:"16px",  
            fontWeight:"600",  
            cursor:"pointer",  
          }}  
        >  
          💰 Send Quotation  
        </button>  
      </Link>  

      <button  
        style={{  
          width:"100%",  
          padding:"15px",  
          border:"none",  
          borderRadius:"12px",  
          background:"#dc2626",  
          color:"#fff",  
          fontSize:"16px",  
          fontWeight:"600",  
          cursor:"pointer",  
        }}  
      >  
        ❌ Reject Request  
      </button>  

    </>  
  )}  

  {requestData.status === "Query Raised" && (  
    <Link href={`/admin/raise-query?id=${id}`}>  
      <button  
        style={{  
          width:"100%",  
          padding:"15px",  
          border:"none",  
          borderRadius:"12px",  
          background:"#7c3aed",  
          color:"#fff",  
          fontSize:"16px",  
          fontWeight:"600",  
          cursor:"pointer",  
        }}  
      >  
        ✏️ Edit Query  
      </button>  
    </Link>  
  )}  

  {requestData.status === "Reply Submitted" && (  
    <>  

      <Link href={`/admin/raise-query?id=${id}`}>  
        <button  
          style={{  
            width:"100%",  
            padding:"15px",  
            border:"none",  
            borderRadius:"12px",  
            background:"#7c3aed",  
            color:"#fff",  
            fontSize:"16px",  
            fontWeight:"600",  
            cursor:"pointer",  
          }}  
        >  
          ❓ Raise Query  
        </button>  
      </Link>  

      <Link href={`/admin/send-quotation?id=${id}`}>  
        <button  
          style={{  
            width:"100%",  
            padding:"15px",  
            border:"none",  
            borderRadius:"12px",  
            background:"#16a34a",  
            color:"#fff",  
            fontSize:"16px",  
            fontWeight:"600",  
            cursor:"pointer",  
          }}  
        >  
          💰 Send Quotation  
        </button>  
      </Link>  

      <button  
        style={{  
          width:"100%",  
          padding:"15px",  
          border:"none",  
          borderRadius:"12px",  
          background:"#dc2626",  
          color:"#fff",  
          fontSize:"16px",  
          fontWeight:"600",  
          cursor:"pointer",  
        }}  
      >  
        ❌ Reject Request  
      </button>  

    </>  
  )}

{requestData.status === "Quotation Sent" && (

<Link href={`/admin/send-quotation?id=${id}`}>  
<button  
style={{  
width:"100%",  
padding:"15px",  
border:"none",  
borderRadius:"12px",  
background:"#f59e0b",  
color:"#fff",  
fontSize:"16px",  
fontWeight:"600",  
cursor:"pointer",  
}}  
>  
✏️ Modify Quotation  
</button>  
</Link>  
)}  {requestData.status === "Quotation Accepted" && (

  <Link href={`/admin/issue-policy?id=${id}`}>  
    <button  
      style={{  
        width:"100%",  
        padding:"15px",  
        border:"none",  
        borderRadius:"12px",  
        background:"#22c55e",  
        color:"#fff",  
        fontSize:"16px",  
        fontWeight:"600",  
        cursor:"pointer",  
      }}  
    >  
      📄 Issue Policy  
    </button>  
  </Link>  
)}  {requestData.status === "Policy Issued" && (  
    <Link href={`/admin/send-quotation?id=${id}`}>  
      <button  
        style={{  
          width:"100%",  
          padding:"15px",  
          border:"none",  
          borderRadius:"12px",  
          background:"#2563eb",  
          color:"#fff",  
          fontSize:"16px",  
          fontWeight:"600",  
          cursor:"pointer",  
        }}  
      >  
        🔄 Send Renewal Quotation  
      </button>  
    </Link>  
  )}  

</div>

  </div>  </>

);

}

const tableCell = {
border:"1px solid #e5e7eb",
padding:"12px",
textAlign:"left",
};
        
