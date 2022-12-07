import React from "react";
import { useRouteError } from "react-router-dom";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import './ErrorServer.css'

export default function ErrorPage() {
  const error = useRouteError();
  console.log(error);

  return (
    <React.Fragment>
      <Header />
      <section className="error-server-container">
          <h1>Oops!</h1>
          <h2>Código Error {error.status}</h2>
          <section className="detalle-error">
            <h4>
              <i>{error.statusText || error.message}</i>
            </h4>
          </section>
      </section>
      <Footer />
    </React.Fragment>
  );
}