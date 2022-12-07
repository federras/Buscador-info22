import { Pagination } from '@mui/material';

const Paginador = ( {cantidadPaginas, onPaginacion, paginaActual} ) => {

    return <Pagination
        count={cantidadPaginas}
        color="success"
        page={paginaActual}
        onChange={(_e, v) => onPaginacion(v)}
        sx={{ 
            display: 'flex',
            justifyContent: 'center',
            paddingBottom: 3,
        }}
    />
}

export default Paginador;