import React, { useState } from "react";
import "./App.css";


function App(){
    
    const [fname,setFname]=useState("");
    const [lname,setLname]=useState("");
    const [phone,setPhone]=useState("");

    const handleSubmit=(e)=>{


        const Dataobj={
            fname:fname,
            lname:lname,
            phone:phone
        };

        fetch("https://backend-five-inky.vercel.app/insert",{
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(Dataobj), 
          }).then(()=>{
            if (response.ok) {
                console.log("Connected successfully...");
                alert("Data sent successfully!");
              } else {
                console.error("Server error:", response.statusText);
                alert("Failed to send data. Please try again.");
              }
           

        }).catch((err)=>{
            e.preventDefault();
            console.log("error"+err);
        })
    }



    return(<>
    <sectin className="container">
        <form onSubmit={handleSubmit}>
            <h1>Register from</h1>
            <input type="text" placeholder="first name" name="firstname" onChange={(e)=>{setFname(e.target.value)}} required></input>
            <input type="text" placeholder="last name" name="lastname" onChange={(e)=>{setLname(e.target.value)}}required></input>
            <input type="text" placeholder="phone" name="myphone" onChange={(e)=>{setPhone(e.target.value)}}required></input>
            <button type="submit">Submit</button>
        </form>
    </sectin>
    </>);
}

export default App;