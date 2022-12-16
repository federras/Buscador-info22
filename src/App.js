import './App.css';
import React from "react";
import {
  createBrowserRouter,
  RouterProvider,
  // Route,
} from "react-router-dom";
import PaginaHome from './paginas/PaginaHome';
import ErrorPage from './componentes/Errores/ErrorPage';

const router = createBrowserRouter([
  {
    path: "/",
    element: <PaginaHome />,
    errorElement: <ErrorPage />
  },
  {
    path: "/buscador",
    element: <PaginaHome />,
    errorElement: <ErrorPage />
  },
]);

function App() {
  return (
      <RouterProvider router={router} />
  );
}

export default App;
