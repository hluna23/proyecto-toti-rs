import React from "react";
import Header from "../Components/Header-NavMenu";
import "../assets/styles/NewAcount.css";
import login1 from "../img/login1.png";

export default function () {
  return (
    <div className="App">
      <header className="App-header">
        <Header />
      </header>

      {/*crear conta */}

      <h1 className="title">Crear Conta</h1>
      <div className="nwAcoun">

      <div className="nwAcoun-img">
        <img src={login1} alt="logo" className="img-nwAcoun" />
      </div>
        <div className="nwAcoun-form">
          <input
            id="email"
            className="btn-name"
            type="text"
            placeholder="Nome e Sobre nome"
          />
          <input
            id="pswd"
            className="btn-email"
            type="email"
            placeholder="Igresa seu Email"
          />
          <input
            id="pswd"
            className="btn-pwsd"
            type="email"
            placeholder="Igresa seu senha"
          />

          <button className="btn-nwAcoun">crear conta</button>
        </div>
      </div>
      <footer></footer>
    </div>
  );
}
