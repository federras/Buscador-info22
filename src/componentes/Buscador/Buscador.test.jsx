import { fireEvent, render, waitFor } from '@testing-library/react'
import Buscador from "./Buscador";

const onBuscar = jest.fn();
const criterioBusqueda = jest.fn();
const setCriterioBusqueda = jest.fn();

const renderBuscador = () => {
    const component = render(<Buscador
                                onBuscar={onBuscar}
                                criterioBusqueda={criterioBusqueda}
                                setCriterioBusqueda={setCriterioBusqueda}
                                />);
    return component;
}

describe('<Buscador />', () => {
    test('Se debe renderizar el componente', () => {
        const component = renderBuscador();
        expect(component.container).toBeInTheDocument();
    })

    test('NO se debe llamar a onBuscar cuando el usuario haga click en buscar con menos de 2 caracteres', async () => {
        const component = renderBuscador();
        const button = component.getByRole('boton-no');
        fireEvent.click(button);
        expect(onBuscar).not.toBeCalled(); 
    })

    test('SÍ se debe llamar a onBuscar cuando el usuario haga click en el buscar, con más de 2 caracteres', async () => {
        const component = renderBuscador();
        const input = component.getByRole('searchbox').querySelector("input");
        fireEvent.change(input, {target: {value: 'test'}});

        const button = rerender.getByRole('boton-ok');
       
        expect(button).not.toBeInTheDocument();
                                    
        waitFor(() => {
            console.log("si")
            
        })
    })
})