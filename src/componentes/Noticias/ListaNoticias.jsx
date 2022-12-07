import './ListaNoticias.css'
import { DateTime } from 'luxon';
import { Container } from '@mui/system';

const Noticia = ({ articulo }) => {

    const formatearFecha = () => {
        const fecha = DateTime.fromISO(articulo.publishedAt)
            .setLocale('system')
            .toFormat("dd-LL-yyyy 'a las' T 'hs.'");
        return fecha;
    }

    return (
        <a className='link-noticia' href={articulo.url} target="_blank">
            <article className='articulo-noticia'>
                <section className='info-izquierda'>
                    <p className='source'>{articulo.source.name}</p>
                    <h3>{articulo.title}</h3>
                    <p className='description'>{articulo.description}</p>
                    <p className='fecha'>Publicado el: {formatearFecha()}</p>
                </section>
                <figure className="img-derecha">
                    <img src={articulo.urlToImage} />
                </figure>
            </article>
        </a>
    )
}

const ListaNoticias = ({ articulos, totalResults }) => {
    return (
        <Container>
            <p className='parrafo-total-results'>Está viendo 10 noticias de {totalResults} resultados</p>
            {articulos.map((articulo, index) => {
                return (
                <Noticia
                    key={index}
                    articulo={articulo}
                    />
                )
            })}
        </Container>
    )
}

export default ListaNoticias;
export { Noticia };
