import React from 'react'
import { useState } from 'react';
import { useContext } from 'react';

const login = () => {
    let [email, setEmail] = useState("");
  let [password, setPassword] = useState("");

  const sendLogin = async (e) => {
    e.preventDefault();
  
    // Enviam dades a l'aPI i recollim resultat
    try {
      const data = await fetch("http://localhost:3004/users", {
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json"
        },
        method: "GET",
      });


      const resposta = await data.json();
      console.log(resposta)
      


    } catch {
      console.log("Error");
      alert("catch");
    }
  };
  

  return (
<button
          onClick={(e) => {
            sendLogin(e);
          }}
        >
          Login      </button>  )
}

export default login