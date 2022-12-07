import React, { useEffect } from "react";
import { useState } from "react";
import Buscador from "../componentes/Buscador/Buscador";
import Footer from "../componentes/Footer/Footer";
import ErrorServer from "../componentes/Errores/ErrorSerrver";
import Header from "../componentes/Header/Header"
import Loading from "../componentes/Loading/Loading";
import LogoGrande from "../componentes/LogoGrande/LogoGrande";
import ListaNoticias from "../componentes/Noticias/ListaNoticias";
import Paginador from "../componentes/Paginador/Paginador";
import getNoticias from "../servicios/noticias";
import './PaginaHome.css'
import { Container } from "@mui/system";
import { useSearchParams } from "react-router-dom";


const PaginaHome = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [noticias, setNoticias] = useState();
    const [criterioBusqueda, setCriterioBusqueda] = useState();
    const [cantidadPaginas, setCantidadPaginas] = useState();
    const [paginaActual, setPaginaActual] = useState(1);
    const [searchParams, setSearchParams] = useSearchParams();

    useEffect(() => {
        if (searchParams.get('q')) {
            onBuscar();
        }
    },[searchParams]);

    const calcularCantidadPaginas = (cantNoticias) => {
        const cantPag = Math.ceil(cantNoticias/10);
        setCantidadPaginas(cantPag);
    }

    const onBuscar = async (pagina=1) => {
        setIsLoading(true);
        if (criterioBusqueda) {
            setSearchParams( { q: criterioBusqueda });        
        }
        const noticiasDelServidor = await (getNoticias(searchParams.get('q'), pagina));
        setNoticias(noticiasDelServidor);
        if (noticiasDelServidor.status === "ok") {
            calcularCantidadPaginas(noticiasDelServidor.totalResults);
        }
        setIsLoading(false);
    }


    const onPaginacion = async (value) => {
        setPaginaActual(value);
        await onBuscar(value);
    }

    if (noticias && noticias.status === "error") {
        return (
            <ErrorServer noticias={noticias}/>
        )
    }

    return(
            <React.Fragment>
                <Header />
                <section className="body-container">
                    {!noticias && <LogoGrande />}
                    <Buscador
                        criterioBusqueda={criterioBusqueda}
                        setCriterioBusqueda={setCriterioBusqueda}
                        onBuscar={onBuscar}
                        />
                    {isLoading && <Loading />}
                    {(noticias && noticias.totalResults == 0) &&
                                    <Container>
                                        <h3 className="sin-resultado-busqueda">Búsqueda Sin Resultados</h3>
                                    </Container>
                                    }
                    {(noticias && noticias.totalResults > 0 )&& <ListaNoticias
                                    articulos={noticias.articles}
                                    totalResults={noticias.totalResults}
                                    />}
                    {(noticias && noticias.totalResults > 0 ) && <Paginador
                                    cantidadPaginas={cantidadPaginas}
                                    onPaginacion={onPaginacion}
                                    paginaActual={paginaActual}
                                    />}

                </section>
                <Footer />

            </React.Fragment>
    )
}

export default PaginaHome;