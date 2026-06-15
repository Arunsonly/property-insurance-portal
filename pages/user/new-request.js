import { useState, useEffect } from "react";

import {
  ref,
  push,
  set
} from "firebase/database";

import { database }
from "../../lib/firebase";

import AuthProtection
from "../auth-protection";

export default function NewRequest() {

  const [insuredName,
    setInsuredName] =
    useState("");

  const [address,
    setAddress] =
    useState("");

  const [mobile,
    setMobile] =
    useState("");

  const [riskLocation,
    setRiskLocation] =
    useState("");

  const [riskType,
    setRiskType] =
    useState("");

  const [propertyType,
    setPropertyType] =
    useState([]);

  const [businessActivity,
    setBusinessActivity] =
    useState("");

  const [coverage,
    setCoverage] =
    useState("");

  const [sumInsured,
    setSumInsured] =
    useState("");

  const [buildingSI,
    setBuildingSI] =
    useState("");

  const [stockSI,
    setStockSI] =
    useState("");

  const [plantSI,
    setPlantSI] =
    useState("");

  const [solarSI,
    setSolarSI] =
    useState("");

  const [othersSI,
    setOthersSI] =
    useState("");

  const [additionalInfo,
    setAdditionalInfo] =
    useState("");

  const [loading,
    setLoading] =
    useState(false);

  useEffect(() => {

    const total =

      Number(
        buildingSI || 0
      ) +

      Number(
        stockSI || 0
      ) +

      Number(
        plantSI || 0
      ) +

      Number(
        solarSI || 0
      ) +

      Number(
        othersSI || 0
      );

    setSumInsured(
      total.toString()
    );

  }, [

    buildingSI,
    stockSI,
    plantSI,
    solarSI,
    othersSI

  ]);

  const handleRiskType =
    (value) => {

      setRiskType(value);

      switch (value) {

        case
          "Manufacturing Unit":

          setBusinessActivity(
            "Name of goods manufacturing"
          );

          break;

        case
          "Godown (Open)":

          setBusinessActivity(
            "Name of goods storage"
          );

          break;

        case
          "Godown (Closed)":

          setBusinessActivity(
            "Name of goods storage"
          );

          break;

        case
          "Retail Shop":

          setBusinessActivity(
            "Name of goods selling (kirana, electric, puncture shop etc)"
          );

          break;

        case
          "Other":

          setBusinessActivity(
            "Enter business activity details"
          );

          break;

        default:

          setBusinessActivity("");

      }

    };

  const generateRequestNo =
    () => {

      const userName =

        (
          localStorage.getItem(
            "userName"
          ) || "USER"
        )

        .replace(
          /\s/g,
          ""
        )

        .substring(
          0,
          8
        )

        .toUpperCase();

      const now =
        new Date();

      const mm =
        String(
          now.getMonth() + 1
        ).padStart(
          2,
          "0"
        );

      const yy =
        String(
          now.getFullYear()
        ).slice(-2);

      const serial =
        Math.floor(
          100 +
          Math.random() *
          900
        );

      return `${userName}_${mm}${yy}_${serial}`;

    };
const handleSubmit =
    async () => {

      if (
        !insuredName ||
        !mobile ||
        !riskLocation ||
        !riskType ||
        propertyType.length === 0 ||
        !coverage ||
        Number(sumInsured) <= 0
      ) {

        alert(
          "Please fill all mandatory fields"
        );

        return;

      }

      try {

        setLoading(true);

        const requestNo =
          generateRequestNo();

        const requestRef =
          push(
            ref(
              database,
              "requests"
            )
          );

        const requestData = {

          requestNo,

          userId:
            localStorage.getItem(
              "userId"
            ),

          userName:
            localStorage.getItem(
              "userName"
            ),

          insuredName,

          address,

          mobile,

          riskLocation,

          riskType,

          propertyType,

          businessActivity,

          coverage,

          sumInsured,

          buildingSI,

          stockSI,

          plantSI,

          solarSI,

          othersSI,

          additionalInfo,

          status:
            "Pending",

          createdAt:
            new Date()
              .toISOString(),

        };

        await set(
          requestRef,
          requestData
        );

        alert(
          "Request Submitted Successfully"
        );

        setInsuredName("");
        setAddress("");
        setMobile("");
        setRiskLocation("");
        setRiskType("");
        setPropertyType([]);
        setBusinessActivity("");
        setCoverage("");
        setSumInsured("");

        setBuildingSI("");
        setStockSI("");
        setPlantSI("");
        setSolarSI("");
        setOthersSI("");

        setAdditionalInfo("");

      } catch (error) {

        console.error(
          error
        );

        alert(
          "Error Submitting Request"
        );

      } finally {

        setLoading(false);

      }
    };

  return (
    <>
      <AuthProtection
        role="user"
      />

      <div
        style={{
          background:"#f4f7fc",
          minHeight:"100vh",
          padding:"20px",
          maxWidth:"700px",
          margin:"0 auto",
        }}
      >

        <div
          style={{
            background:
              "linear-gradient(135deg,#0b3d91,#2563eb)",
            color:"#fff",
            padding:"30px",
            borderRadius:"24px",
            marginBottom:"20px",
          }}
        >
          <h1>
            🏢 New Property Request
          </h1>

          <p>
            Submit Property Insurance Requirement
          </p>
        </div>

        <div style={cardStyle}>

          <h2
            style={{
              color:"#0b3d91",
            }}
          >
            👤 Basic Details
          </h2>

          <input
            placeholder="Insured Name"
            value={insuredName}
            onChange={(e)=>
              setInsuredName(
                e.target.value
              )
            }
            style={inputStyle}
          />

          <input
            placeholder="Address"
            value={address}
            onChange={(e)=>
              setAddress(
                e.target.value
              )
            }
            style={inputStyle}
          />

          <input
            placeholder="Mobile Number"
            value={mobile}
            onChange={(e)=>
              setMobile(
                e.target.value
              )
            }
            style={inputStyle}
          />

        </div>

        <div style={cardStyle}>

          <h2
            style={{
              color:"#0b3d91",
            }}
          >
            🏭 Risk Details
          </h2>

          <input
            placeholder="Enter District Name"
            value={riskLocation}
            onChange={(e)=>
              setRiskLocation(
                e.target.value
              )
            }
            style={inputStyle}
          />

          <select
            value={riskType}
            onChange={(e)=>
              handleRiskType(
                e.target.value
              )
            }
            style={inputStyle}
          >
            <option value="">
              Select Risk Type
            </option>

            <option>
              Manufacturing Unit
            </option>

            <option>
              Godown (Open)
            </option>

            <option>
              Godown (Closed)
            </option>

            <option>
              Retail Shop
            </option>

            <option>
              Other
            </option>

          </select>
<div
            style={{
              marginTop:"15px",
              marginBottom:"15px",
              display:"flex",
              flexDirection:"column",
              gap:"10px",
            }}
          >

            <label>
              <input
                type="checkbox"
                checked={propertyType.includes("Building")}
                onChange={(e)=>{

                  if(e.target.checked){

                    setPropertyType([
                      ...propertyType,
                      "Building"
                    ]);

                  } else {

                    setPropertyType(
                      propertyType.filter(
                        x => x !== "Building"
                      )
                    );

                  }

                }}
              />
              {" "}Building
            </label>

            <label>
              <input
                type="checkbox"
                checked={propertyType.includes("Stock/Assets")}
                onChange={(e)=>{

                  if(e.target.checked){

                    setPropertyType([
                      ...propertyType,
                      "Stock/Assets"
                    ]);

                  } else {

                    setPropertyType(
                      propertyType.filter(
                        x => x !== "Stock/Assets"
                      )
                    );

                  }

                }}
              />
              {" "}Stock / Assets
            </label>

            <label>
              <input
                type="checkbox"
                checked={propertyType.includes("Plant & Machinery")}
                onChange={(e)=>{

                  if(e.target.checked){

                    setPropertyType([
                      ...propertyType,
                      "Plant & Machinery"
                    ]);

                  } else {

                    setPropertyType(
                      propertyType.filter(
                        x => x !== "Plant & Machinery"
                      )
                    );

                  }

                }}
              />
              {" "}Plant & Machinery
            </label>

            <label>
              <input
                type="checkbox"
                checked={propertyType.includes("Roof Top Solar")}
                onChange={(e)=>{

                  if(e.target.checked){

                    setPropertyType([
                      ...propertyType,
                      "Roof Top Solar"
                    ]);

                  } else {

                    setPropertyType(
                      propertyType.filter(
                        x => x !== "Roof Top Solar"
                      )
                    );

                  }

                }}
              />
              {" "}Roof Top Solar
            </label>

            <label>
              <input
                type="checkbox"
                checked={propertyType.includes("Others")}
                onChange={(e)=>{

                  if(e.target.checked){

                    setPropertyType([
                      ...propertyType,
                      "Others"
                    ]);

                  } else {

                    setPropertyType(
                      propertyType.filter(
                        x => x !== "Others"
                      )
                    );

                  }

                }}
              />
              {" "}Others
            </label>

          </div>

          {propertyType.includes("Building") && (
            <input
              type="number"
              placeholder="Building Sum Insured"
              value={buildingSI}
              onChange={(e)=>
                setBuildingSI(
                  e.target.value
                )
              }
              style={inputStyle}
            />
          )}

          {propertyType.includes("Stock/Assets") && (
            <input
              type="number"
              placeholder="Stock / Assets Sum Insured"
              value={stockSI}
              onChange={(e)=>
                setStockSI(
                  e.target.value
                )
              }
              style={inputStyle}
            />
          )}

          {propertyType.includes("Plant & Machinery") && (
            <input
              type="number"
              placeholder="Plant & Machinery Sum Insured"
              value={plantSI}
              onChange={(e)=>
                setPlantSI(
                  e.target.value
                )
              }
              style={inputStyle}
            />
          )}

          {propertyType.includes("Roof Top Solar") && (
            <input
              type="number"
              placeholder="Roof Top Solar Sum Insured"
              value={solarSI}
              onChange={(e)=>
                setSolarSI(
                  e.target.value
                )
              }
              style={inputStyle}
            />
          )}

          {propertyType.includes("Others") && (
            <input
              type="number"
              placeholder="Others Sum Insured"
              value={othersSI}
              onChange={(e)=>
                setOthersSI(
                  e.target.value
                )
              }
              style={inputStyle}
            />
          )}

          <textarea
            value={businessActivity}
            onChange={(e)=>
              setBusinessActivity(
                e.target.value
              )
            }
            placeholder="Business Activity"
            style={textareaStyle}
          />

          <select
            value={coverage}
            onChange={(e)=>
              setCoverage(
                e.target.value
              )
            }
            style={inputStyle}
          >
            <option value="">
              Select Coverage Required
            </option>

            <option>
              Fire + STFI + EQ
            </option>

            <option>
              Fire + STFI + EQ + Burglary
            </option>

            <option>
              Fire + STFI + EQ + Terrorism
            </option>

            <option>
              Fire + STFI + EQ + Terrorism + Burglary
            </option>

          </select>

          <input
            value={sumInsured}
            readOnly
            placeholder="Total Sum Insured"
            style={{
              ...inputStyle,
              background:"#e2e8f0",
              fontWeight:"700",
            }}
          />

        </div>

        <div style={cardStyle}>

          <h2
            style={{
              color:"#0b3d91",
            }}
          >
            📝 Additional Information
          </h2>

          <textarea
            value={additionalInfo}
            onChange={(e)=>
              setAdditionalInfo(
                e.target.value
              )
            }
            placeholder="Any special requirement, claim history, security arrangements, special risk details etc."
            style={textareaStyle}
          />

        </div>

        <div style={cardStyle}>

          <h2
            style={{
              color:"#0b3d91",
            }}
          >
            📎 Documents Information
          </h2>

          <p
            style={{
              color:"#64748b",
              lineHeight:"1.7",
            }}
          >
            This portal is used to gather
            information quickly for final
            placement of premium.

            Proposal Form,
            Risk Photos (if required),
            Previous Policy copy and
            other supporting documents
            may be shared separately
            through office mail.
          </p>

        </div>

        <button
          onClick={handleSubmit}
          disabled={loading}
          style={{
            width:"100%",
            padding:"18px",
            border:"none",
            borderRadius:"16px",
            background:
              "linear-gradient(135deg,#16a34a,#22c55e)",
            color:"#fff",
            fontSize:"18px",
            fontWeight:"700",
            cursor:"pointer",
          }}
        >
          {
            loading
            ? "Please Wait..."
            : "🚀 Submit Request"
          }
        </button>

      </div>
    </>
  );
}

const cardStyle = {
  background:"#fff",
  padding:"25px",
  borderRadius:"24px",
  marginBottom:"20px",
  boxShadow:
    "0 10px 25px rgba(0,0,0,0.08)",
};

const inputStyle = {
  width:"100%",
  boxSizing:"border-box",
  padding:"15px",
  marginTop:"12px",
  marginBottom:"12px",
  borderRadius:"12px",
  border:"1px solid #ddd",
  fontSize:"16px",
  background:"#fafafa",
};

const textareaStyle = {
  width:"100%",
  boxSizing:"border-box",
  minHeight:"120px",
  padding:"15px",
  marginTop:"12px",
  marginBottom:"12px",
  borderRadius:"12px",
  border:"1px solid #ddd",
  fontSize:"16px",
  background:"#fafafa",
};
