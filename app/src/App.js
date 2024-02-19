import React, { useState } from "react";

export default function App() {
  const [password, setPassword] = useState("");
  const [fullname, setFullname] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [confirmpassword, setConfirmpassword] = useState("");

  function login(event) {
    event.preventDefault(); // Prevenir la recarga de la página

    fetch("https://srmacaback.fly.dev/auth/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email: email, password: password }),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        // Aquí podrías redirigir al usuario o manejar la respuesta de la API como necesites
      })
      .catch((error) => {
        console.error(error);
      });
  }

  function register(event) {
    event.preventDefault(); // Prevenir la recarga de la página
    fetch("https://srmacaback.fly.dev/auth/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        fullname: fullname,
        email: email,
        password: password,
        confirmpassword: confirmpassword,
        phone: phone,
        address: address,
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        // Aquí podrías redirigir al usuario o manejar la respuesta de la API como necesites
      })
      .catch((error) => {
        console.error(error);
      });
  }

  return (
    <div>
      <h1> Hello World </h1>
      <form onSubmit={login}>
        <input
          id="name"
          type="email"
          placeholder="Enter your name"
          value={name}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          id="password"
          type="password"
          placeholder="Enter your password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">Submit</button>
      </form>

      <form onSubmit={register}>
        <input
          id="fullname"
          type="text"
          placeholder="Enter your fullname"
          value={fullname}
          onChange={(e) => setFullname(e.target.value)}
        />
        <input
          id="email"
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          id="password"
          type="password"
          placeholder="Enter your password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <input
          id="confirmpassword"
          type="password"
          placeholder="Enter your confirmpassword"
          value={confirmpassword}
          onChange={(e) => setConfirmpassword(e.target.value)}
        />
        <input
          id="phone"
          type="text"
          placeholder="Enter your phone"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
        />
        <input
          id="address"
          type="text"
          placeholder="Enter your address"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
        />

        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
