import * as React from 'react';
import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';

const Buscador = ( {criterioBusqueda, setCriterioBusqueda, onBuscar} ) => {

  const onEnter = (e) => {
    if (e.keyCode === 13 && !e.shiftKey && criterioBusqueda.length > 2) {
      onBuscar();
    }
  }

  return (
    <Paper
      component="div"
      sx={{ p: '2px 4px',
            display: 'flex',
            alignItems: 'center',
            width: 400,
            marginTop: 8,
            marginLeft: 'auto',
            marginRight: 'auto' }}
    >
      <InputBase
        sx={{ ml: 1, flex: 1 }}
        placeholder="Buscar Noticia"
        // inputProps={{ 'aria-label': 'search google maps' }}
        role='searchbox'
        onChange={(event) => setCriterioBusqueda(event.target.value)}
        onKeyDownCapture={(e) => onEnter(e)}
      />
      {(criterioBusqueda && criterioBusqueda.length > 2)
        ? <Stack direction="row" spacing={1}>
            <Button
              color='success'
              variant="contained"
              title="button"
              role="boton-ok"
              onClick={onBuscar}
              > Buscar
            </Button>
          </Stack>   
        : <Stack direction="row" spacing={1}>
              <Button
                variant="contained"
                disabled
                role="boton-no"
                >
              Buscar
            </Button>
          </Stack>
      }
    </Paper>
  );
}

export default Buscador;