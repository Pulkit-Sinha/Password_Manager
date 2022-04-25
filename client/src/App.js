import "./App.css";
import { useState, useEffect } from "react";
import Axios from "axios";

function App() {
  const [password, setPassword] = useState("-1");
  const [getpassword, setgetPassword] = useState("");
  const [website, setWebsite] = useState("-1");
  const [username, setUsername] = useState("-1");
  const [notes, setNotes] = useState("");
  const [memo, setMemo] = useState("");
  const [pin, setPin] = useState("");
  const [passwordList, setPasswordList] = useState([]);
  const [masterP, setMasterP] = useState("");
  const [masterU, setMasterU] = useState("");


  

  useEffect(() => {
    Axios.get("http://localhost:3001/showpasswords").then((response) => {
      setPasswordList(response.data);
    });
  }, []);

  const addPassword = () => {
    if(website === "-1" || username === "-1" || password === "-1"){
      alert('You must enter website, username and password');
    }
    else{
    Axios.post("http://localhost:3001/addpassword", {
      username: username,
      password: password,
      website: website,
      notes: notes,
      memo: memo,

    });
  }
  };


  const login = () => {
    if(masterP === "PR18" && masterU === "DBS Project"){
      alert('Your Pin is  "BITS"');
    }
    else{
      alert('Login Failed');
    }
  };

  const decryptPassword = (encryption) => {
    Axios.post("http://localhost:3001/decryptpassword", {
      password: encryption.password,
      iv: encryption.iv,
    }).then((response) => {
      setPasswordList(
        passwordList.map((val) => {
          return val.id === encryption.id
            ? {
                id: val.id,
                password: val.password,
                getpassword: response.data,
                website: val.website,
                username: val.username,
                memo: val.memo,
                notes: val.notes,
                iv: val.iv,
              }
            : val;
        })
      );
    });
  };

  return (

    <div className="App">
        <h1><center><bold>Password Manager</bold></center> </h1>
      <div className="AddingPassword">
        <input
          required = "true"
          type="text"
          placeholder="Website"
          onChange={(event) => {
            setWebsite(event.target.value);
          }}
        />
      <input
          required = "true" 
          type="text"
          placeholder="Username"
          onChange={(event) => {
            setUsername(event.target.value);
          }}
        />
        <input
          required = "true"
          type="text"
          placeholder="Password"
          onChange={(event) => {
            setPassword(event.target.value);
          }}
        />
        
        <input
          type="text"
          placeholder="Notes"
          onChange={(event) => {
            setNotes(event.target.value);
          }}
        />
        <input
          type="text"
          placeholder="Memo"
          onChange={(event) => {
            setMemo(event.target.value);
          }}
        />
        
      </div>
<button onClick={addPassword}> Add Password</button>


<div className="MasterPassword">
        <input
          type="text"
          placeholder="MasterUsername"
          onChange={(event) => {
            setMasterU(event.target.value);
          }}
        />
      <input
          type="text"
          placeholder="MasterPassword"
          onChange={(event) => {
            setMasterP(event.target.value);
          }}
        />
        
        
      </div>
      <button onClick={login}> Login</button>



      <div className="Passwords">
        {passwordList.map((val, key) => {
          return (
            <div
              className="password"
              onKeyPress={(e) => {
                if (e.key === "Enter" && pin === "BITS") {
                  
                  decryptPassword({
                    password: val.password,
                    iv: val.iv,
                    id: val.id,
                  });  
                }
                else if(e.key === "Enter" && pin !== "BITS"){
                  // ERROR MESSAGE 
                  alert('Wrong Pin');
                }
                
            }}
              key={key}
              
            >
              
              <pre><h3>Website: {val.website}</h3>
              <h3>Username: {val.username}</h3>
              <h3>Notes: {val.notes}</h3>
              <h3>Memo: {val.memo}</h3>
              <div className ="Pin"> <input
                type="text"
                placeholder="Pin"
                onChange={(event) => {
                setPin(event.target.value);
                 }}
               />
               </div>
              <h3>Password: {val.getpassword}
                  </h3>
                  <button 
                    onClick={() =>  navigator.clipboard.writeText(val.getpassword)}
                  >Copy to Clipboard </button> </pre>

            </div>
          );
        })}
      </div>
    </div>
  );
}

export default App;
