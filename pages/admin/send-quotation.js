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

await update(  
  ref(database, `requests/${id}`),  
  {  
    quotationPremium: premium,  
    quotationRemarks: remarks,  
    quotationDate:  
      new Date().toISOString(),  
    status: "Quotation Received",  
  }  
);  

alert("Quotation Sent");  

router.push(  
  "/admin/pending-requests"  
);

};

return (
<div style={{ padding: 20 }}>
<h2>Send Quotation</h2>

<input  
    placeholder="Premium Amount"  
    value={premium}  
    onChange={(e) =>  
      setPremium(e.target.value)  
    }  
    style={{  
      width: "100%",  
      padding: 12,  
      marginBottom: 15,  
    }}  
  />  

  <textarea  
    placeholder="Remarks"  
    value={remarks}  
    onChange={(e) =>  
      setRemarks(e.target.value)  
    }  
    rows="5"  
    style={{  
      width: "100%",  
      padding: 12,  
      marginBottom: 15,  
    }}  
  />  

  <button  
    onClick={handleSubmit}  
  >  
    Send Quotation  
  </button>  
</div>

);
}
