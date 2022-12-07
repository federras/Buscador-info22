const URL = "https://newsapi.org/v2/everything"
const API_KEY = "b8ef57610874454a878df96f9de46988";
const LENGUAJE = "es";
const PAGE_SIZE = "10";
// const PAGE = 1;
// const criterioBusqueda = "pepe"

const getNoticias = async (criterioBusqueda, pagina) => {
    const URL_FINAL = `${URL}?q=${criterioBusqueda}&apiKey=${API_KEY}&language=${LENGUAJE}&pageSize=${PAGE_SIZE}&page=${pagina}`;
    const noticias = await fetch(URL_FINAL);
    return await noticias.json();
}

export default getNoticias;