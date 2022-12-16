import React from "react";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import './ErrorServer.css'

export default function ErrorServer( {noticias} ) {

  return (
    <React.Fragment>
      <Header />
      <section className="error-server-container">
          <h1>Oops!</h1>
          <h2>Algo salió mal.</h2>
          <section className="detalle-error">
            <p>Codigo de Error: {noticias.code}</p>
            <p>Mensaje: {noticias.message}</p>
          </section>
      </section>
      <Footer />
    </React.Fragment>
  );
}