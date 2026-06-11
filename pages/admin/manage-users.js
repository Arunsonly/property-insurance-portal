import { useEffect, useState } from "react";

import {
ref,
push,
set,
onValue,
update,
remove,
} from "firebase/database";

import { database } from "../../lib/firebase";

export default function ManageUsers() {
const [users, setUsers] =
useState([]);

const [search, setSearch] =
useState("");

const [showForm, setShowForm] =
useState(false);

const [name, setName] =
useState("");

const [mobile, setMobile] =
useState("");

const [email, setEmail] =
useState("");

const [username, setUsername] =
useState("");

const [password, setPassword] =
useState("");

useEffect(() => {
const usersRef = ref(
database,
"users"
);

onValue(usersRef, (snapshot) => {  
  const data =  
    snapshot.val();  

  if (!data) {  
    setUsers([]);  
    return;  
  }  

  const arr =  
    Object.keys(data).map(  
      (key) => ({  
        id: key,  
        ...data[key],  
      })  
    );  

  setUsers(arr);  
});

}, []);

const addUser = async () => {
if (
!name ||
!mobile ||
!username ||
!password
) {
alert(
"Please fill all required fields"
);
return;
}

const userRef = push(  
  ref(database, "users")  
);  

await set(userRef, {  
  name,  
  mobile,  
  email,  
  username,  
  password,  
  status: "Active",  
  totalRequests: 0,  
  totalPolicies: 0,  
  lastLogin: "Never",  
  createdAt:  
    new Date().toLocaleString(),  
});  

setName("");  
setMobile("");  
setEmail("");  
setUsername("");  
setPassword("");  

setShowForm(false);  

alert(  
  "User Added Successfully"  
);

};

const toggleStatus = async (
user
) => {
await update(
  ref(
    database,
    `users/${user.id}`
  ),
  
{
status:
user.status ===
"Active"
? "Inactive"
: "Active",
}
);
};

const deleteUser = async (
id
) => {
if (
!confirm(
"Delete User?"
)
)
return;

await remove(  
  ref(  
    database,  
    `users/${id}`  
  )  
);

};
const resetPassword = async (
  userId
) => {
  const newPassword =
    prompt(
      "Enter New Password"
    );

  if (!newPassword) return;

  await update(
    ref(
      database,
      `users/${userId}`
    ),
    {
      password:
        newPassword,
    }
  );

  alert(
    "Password Reset Successfully"
  );
};

const editUser = async (
  user
) => {
  const newName =
    prompt(
      "Enter Name",
      user.name
    );

  if (!newName) return;

  await update(
    ref(
      database,
      `users/${user.id}`
    ),
    {
      name: newName,
    }
  );

  alert(
    "User Updated"
  );
};

const viewUser = (
  user
) => {
  alert(
`Name: ${user.name}

Mobile: ${user.mobile}

Email: ${user.email}

Username: ${user.username}

Status: ${user.status}

Requests: ${user.totalRequests}

Policies: ${user.totalPolicies}

Last Login: ${user.lastLogin}

Created At: ${user.createdAt}`
  );
};

const filteredUsers =
users.filter((u) =>
${u.name} ${u.mobile} ${u.username}
.toLowerCase()
.includes(
search.toLowerCase()
)
);

return (
<div
style={{
background: "#f4f7fc",
minHeight: "100vh",
padding: "20px",
}}
>
<div
style={{
background:
"linear-gradient(135deg,#0b3d91,#2563eb)",
color: "#fff",
padding: "30px",
borderRadius: "20px",
marginBottom: "20px",
}}
>
<h1 style={{ margin: 0 }}>
👥 Manage Users
</h1>
</div>

<button  
    onClick={() =>  
      setShowForm(  
        !showForm  
      )  
    }  
    style={{  
      width: "100%",  
      background:  
        "#7c3aed",  
      color: "#fff",  
      border: "none",  
      padding: "14px",  
      borderRadius:  
        "12px",  
      fontSize: "16px",  
      fontWeight:  
        "bold",  
      marginBottom:  
        "20px",  
      cursor:  
        "pointer",  
    }}  
  >  
    ➕ Add User  
  </button>

{showForm && (
<div
style={{
background: "#fff",
padding: "20px",
borderRadius: "20px",
marginBottom: "20px",
boxShadow:
"0 2px 10px rgba(0,0,0,.08)",
}}
>
<h2>Add New User</h2>

<input  
        placeholder="Full Name"  
        value={name}  
        onChange={(e) =>  
          setName(  
            e.target.value  
          )  
        }  
        style={inputStyle}  
      />  

      <input  
        placeholder="Mobile"  
        value={mobile}  
        onChange={(e) =>  
          setMobile(  
            e.target.value  
          )  
        }  
        style={inputStyle}  
      />  

      <input  
        placeholder="Email"  
        value={email}  
        onChange={(e) =>  
          setEmail(  
            e.target.value  
          )  
        }  
        style={inputStyle}  
      />  

      <input  
        placeholder="Username"  
        value={username}  
        onChange={(e) =>  
          setUsername(  
            e.target.value  
          )  
        }  
        style={inputStyle}  
      />  

      <input  
        placeholder="Password"  
        value={password}  
        onChange={(e) =>  
          setPassword(  
            e.target.value  
          )  
        }  
        style={inputStyle}  
      />  

      <button  
        onClick={addUser}  
        style={{  
          width: "100%",  
          background:  
            "#16a34a",  
          color: "#fff",  
          border: "none",  
          padding: "14px",  
          borderRadius:  
            "12px",  
          fontWeight:  
            "bold",  
          cursor:  
            "pointer",  
        }}  
      >  
        Save User  
      </button>  
    </div>  
  )}  

  <input  
    type="text"  
    placeholder="Search User"  
    value={search}  
    onChange={(e) =>  
      setSearch(  
        e.target.value  
      )  
    }  
    style={{  
      width: "100%",  
      padding: "15px",  
      borderRadius: "12px",  
      border: "1px solid #ddd",  
      marginBottom: "20px",  
      fontSize: "16px",  
      boxSizing:  
        "border-box",  
    }}  
  />  

  {filteredUsers.map(  
    (user) => (  
      <div  
        key={user.id}  
        style={{  
          background:  
            "#fff",  
          borderRadius:  
            "20px",  
          padding:  
            "20px",  
          marginBottom:  
            "15px",  
          boxShadow:  
            "0 2px 10px rgba(0,0,0,.08)",  
        }}  
      >  
        <h2>  
          {user.name}  
        </h2>  

        <p>  
          <strong>  
            Mobile:  
          </strong>{" "}  
          {user.mobile}  
        </p>  

        <p>  
          <strong>  
            Email:  
          </strong>{" "}  
          {user.email}  
        </p>  

        <p>  
          <strong>  
            Username:  
          </strong>{" "}  
          {user.username}  
        </p>  

        <p>  
          <strong>  
            Requests:  
          </strong>{" "}  
          {  
            user.totalRequests  
          }  
        </p>  

        <p>  
          <strong>  
            Policies:  
          </strong>{" "}  
          {  
            user.totalPolicies  
          }  
        </p>  

        <p>  
          <strong>  
            Last Login:  
          </strong>{" "}  
          {  
            user.lastLogin  
          }  
        </p>  

        <span  
          style={{  
            background:  
              user.status ===  
              "Active"  
                ? "#22c55e"  
                : "#ef4444",  
            color:  
              "#fff",  
            padding:  
              "8px 14px",  
            borderRadius:  
              "20px",  
            display:  
              "inline-block",  
            marginBottom:  
              "15px",  
          }}  
        >  
          {user.status}  
        </span>  

        <div  
          style={{  
            display:  
              "flex",  
            gap: "10px",  
            flexWrap:  
              "wrap",  
          }}  
        >

          <button
  onClick={() =>
    viewUser(user)
  }
  style={{
    flex: 1,
    background:
      "#2563eb",
    color: "#fff",
    border: "none",
    padding: "12px",
    borderRadius:
      "10px",
    cursor:
      "pointer",
  }}
>
  👁 View
</button>

<button
  onClick={() =>
    editUser(user)
  }
  style={{
    flex: 1,
    background:
      "#7c3aed",
    color: "#fff",
    border: "none",
    padding: "12px",
    borderRadius:
      "10px",
    cursor:
      "pointer",
  }}
>
  ✏️ Edit
</button>

    <button
  onClick={() =>
    resetPassword(
      user.id
    )
  }
  style={{
    flex: 1,
    background:
      "#f59e0b",
    color: "#fff",
    border: "none",
    padding: "12px",
    borderRadius:
      "10px",
    cursor:
      "pointer",
  }}
>
  🔑 Reset Password
</button>
    
<button
onClick={() =>
toggleStatus(user)
}
style={{
flex: 1,
background:
user.status ===
"Active"
? "#ef4444"
: "#22c55e",
color: "#fff",
border: "none",
padding: "12px",
borderRadius: "10px",
cursor: "pointer",
}}
>
{user.status ===
"Active"
? "❌ Deactivate"
: "✅ Activate"}
</button>

<button  
            onClick={() =>  
              deleteUser(  
                user.id  
              )  
            }  
            style={{  
              flex: 1,  
              background:  
                "#991b1b",  
              color: "#fff",  
              border: "none",  
              padding: "12px",  
              borderRadius:  
                "10px",  
              cursor:  
                "pointer",  
            }}  
          >  
            🗑 Delete  
          </button>  
        </div>  
      </div>  
    )  
  )}  
</div>

);
}

const inputStyle = {
width: "100%",
padding: "12px",
marginBottom: "12px",
borderRadius: "10px",
border: "1px solid #ddd",
boxSizing: "border-box",
};

Manage user r ka dena hai,
