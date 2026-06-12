import { useState } from "react";

import {
  ref,
  push,
  set
} from "firebase/database";

import {
  ref as storageRef,
  uploadBytes,
  getDownloadURL
} from "firebase/storage";

import {
  database,
  storage
} from "../../lib/firebase";

import AuthProtection from "../auth-protection";

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

  const [proposalFile,
    setProposalFile] =
    useState(null);

  const [riskPhotoFile,
    setRiskPhotoFile] =
    useState(null);

  const [previousPolicyFile,
    setPreviousPolicyFile] =
    useState(null);

  const [loading,
    setLoading] =
    useState(false);

  const handleRiskType = (
    value
  ) => {

    setRiskType(value);

    switch (value) {

      case "Manufacturing Unit":

        setBusinessActivity(
          "Name of goods manufacturing"
        );

        break;

      case "Godown (Open)":

        setBusinessActivity(
          "Name of goods storage"
        );

        break;

      case "Godown (Closed)":

        setBusinessActivity(
          "Name of goods storage"
        );

        break;

      case "Retail Shop":

        setBusinessActivity(
          "Name of goods selling (kirana, electric, puncture shop etc)"
        );

        break;

      case "Other":

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
          .replace(/\s/g, "")
          .substring(0, 8)
          .toUpperCase();

      const now =
        new Date();

      const mm =
        String(
          now.getMonth() + 1
        ).padStart(2, "0");

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
const uploadFile = async (
    file,
    folder
  ) => {

    if (!file)
      return "";

    const fileRef =
      storageRef(
        storage,
        `${folder}/${Date.now()}_${
          file.name
        }`
      );

    await uploadBytes(
      fileRef,
      file
    );

    return await getDownloadURL(
      fileRef
    );
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
        !sumInsured
      ) {

        alert(
          "Please fill all mandatory fields"
        );

        return;
      }

      try {

        setLoading(true);

        const proposalUrl =
          await uploadFile(
            proposalFile,
            "proposalForms"
          );

        const riskPhotoUrl =
          await uploadFile(
            riskPhotoFile,
            "riskPhotos"
          );

        const previousPolicyUrl =
          await uploadFile(
            previousPolicyFile,
            "previousPolicies"
          );

        const requestNo =
          generateRequestNo();

        const requestRef =
          push(
            ref(
              database,
              "requests"
            )
          );

        const requestData =
          {

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

            proposalUrl,

            riskPhotoUrl,

            previousPolicyUrl,

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

        setProposalFile(
          null
        );

        setRiskPhotoFile(
          null
        );

        setPreviousPolicyFile(
          null
        );

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
          background:
            "#f4f7fc",
          minHeight:
            "100vh",
          padding:
            "20px",
          maxWidth:
            "700px",
          margin:
            "0 auto",
        }}
      >

        <div
          style={{
            background:
              "linear-gradient(135deg,#0b3d91,#2563eb)",
            color:
              "#fff",
            padding:
              "30px",
            borderRadius:
              "24px",
            marginBottom:
              "20px",
          }}
        >
          <h1
            style={{
              margin: 0,
            }}
          >
            🏢 New Property Request
          </h1>

          <p
            style={{
              marginTop:
                "10px",
            }}
          >
            Submit Property Insurance Requirement
          </p>
        </div>

        <div
          style={
            cardStyle
          }
        >
          <h2
            style={{
              color:
                "#0b3d91",
            }}
          >
            👤 Basic Details
          </h2>

          <input
            placeholder="Insured Name"
            value={
              insuredName
            }
            onChange={(
              e
            ) =>
              setInsuredName(
                e.target
                  .value
              )
            }
            style={
              inputStyle
            }
          />

          <input
            placeholder="Address"
            value={
              address
            }
            onChange={(
              e
            ) =>
              setAddress(
                e.target
                  .value
              )
            }
            style={
              inputStyle
            }
          />

          <input
            placeholder="Mobile Number"
            value={
              mobile
            }
            onChange={(
              e
            ) =>
              setMobile(
                e.target
                  .value
              )
            }
            style={
              inputStyle
            }
          />
        </div>

        <div
          style={
            cardStyle
          }
        >
          <h2
            style={{
              color:
                "#0b3d91",
            }}
          >
            🏭 Risk Details
          </h2>

          <input
            placeholder="Enter District Name"
            value={
              riskLocation
            }
            onChange={(
              e
            ) =>
              setRiskLocation(
                e.target
                  .value
              )
            }
            style={
              inputStyle
            }
          />

          <select
            value={
              riskType
            }
            onChange={(
              e
            ) =>
              handleRiskType(
                e.target
                  .value
              )
            }
            style={
              inputStyle
            }
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

          <select
            multiple
            value={
              propertyType
            }
            onChange={(
              e
            ) =>
              setPropertyType(
                [
                  ...e.target
                    .selectedOptions,
                ].map(
                  (
                    option
                  ) =>
                    option.value
                )
              )
            }
            style={{
              ...inputStyle,
              height:
                "140px",
            }}
          >
            <option value="Building">
              Building
            </option>

            <option value="Stock/Assets">
              Stock / Assets
            </option>

            <option value="Plant & Machinery">
              Plant & Machinery
            </option>

            <option value="Roof Top Solar">
              Roof Top Solar
            </option>
          </select>

          <textarea
            value={
              businessActivity
            }
            onChange={(
              e
            ) =>
              setBusinessActivity(
                e.target
                  .value
              )
            }
            placeholder="Business Activity"
            style={
              textareaStyle
            }
          />

          <select
            value={
              coverage
            }
            onChange={(
              e
            ) =>
              setCoverage(
                e.target
                  .value
              )
            }
            style={
              inputStyle
            }
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
            placeholder="Enter Total Sum Insured"
            value={
              sumInsured
            }
            onChange={(
              e
            ) =>
              setSumInsured(
                e.target
                  .value
              )
            }
            style={
              inputStyle
            }
          />
        </div>
<div
          style={cardStyle}
        >
          <h2
            style={{
              color:
                "#0b3d91",
            }}
          >
            📎 Upload Documents
          </h2>

          <div
            style={uploadBox}
          >
            <strong>
              Proposal Form
            </strong>

            <input
              type="file"
              onChange={(
                e
              ) =>
                setProposalFile(
                  e.target
                    .files[0]
                )
              }
              style={
                fileStyle
              }
            />
          </div>

          <div
            style={uploadBox}
          >
            <strong>
              Risk Photos
            </strong>

            <input
              type="file"
              onChange={(
                e
              ) =>
                setRiskPhotoFile(
                  e.target
                    .files[0]
                )
              }
              style={
                fileStyle
              }
            />
          </div>

          <div
            style={uploadBox}
          >
            <strong>
              Previous Policy
              (Optional)
            </strong>

            <input
              type="file"
              onChange={(
                e
              ) =>
                setPreviousPolicyFile(
                  e.target
                    .files[0]
                )
              }
              style={
                fileStyle
              }
            />
          </div>
        </div>

        <button
          onClick={
            handleSubmit
          }
          disabled={
            loading
          }
          style={{
            width:
              "100%",
            padding:
              "18px",
            border:
              "none",
            borderRadius:
              "16px",
            background:
              "linear-gradient(135deg,#16a34a,#22c55e)",
            color:
              "#fff",
            fontSize:
              "18px",
            fontWeight:
              "700",
            cursor:
              "pointer",
          }}
        >
          {loading
            ? "Uploading..."
            : "🚀 Submit Request"}
        </button>

      </div>
    </>
  );
}

const cardStyle = {
  background:
    "#fff",

  padding:
    "25px",

  borderRadius:
    "24px",

  marginBottom:
    "20px",

  boxShadow:
    "0 10px 25px rgba(0,0,0,0.08)",
};

const inputStyle = {
  width:
    "100%",

  boxSizing:
    "border-box",

  padding:
    "15px",

  marginTop:
    "12px",

  marginBottom:
    "12px",

  borderRadius:
    "12px",

  border:
    "1px solid #ddd",

  fontSize:
    "16px",

  background:
    "#fafafa",
};

const textareaStyle = {
  width:
    "100%",

  boxSizing:
    "border-box",

  minHeight:
    "120px",

  padding:
    "15px",

  marginTop:
    "12px",

  marginBottom:
    "12px",

  borderRadius:
    "12px",

  border:
    "1px solid #ddd",

  fontSize:
    "16px",

  background:
    "#fafafa",
};

const fileStyle = {
  width:
    "100%",

  marginTop:
    "10px",
};

const uploadBox = {
  border:
    "2px dashed #d1d5db",

  borderRadius:
    "16px",

  padding:
    "15px",

  marginBottom:
    "15px",

  background:
    "#fafafa",
};
