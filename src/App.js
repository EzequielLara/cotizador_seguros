import { Fragment } from "react";
import './index.css';
import Header from "./components/Header";
import Formulario from "./components/Formulario";
import styled from 'styled-components';

const Contenedor = styled.div`
  max-width: 600px;
  margin: 0 auto;
`;
const ContenedorFormulario = styled.div`
  background-color: #FFF;
  padding: 3rem;
`;


function App() {
  return (
   <Fragment>
    <Contenedor>
      <Header
        titulo = 'Cotizador de Seguros'
      />
      <ContenedorFormulario>
        <Formulario/>
      </ContenedorFormulario>
    </Contenedor>
   </Fragment>
  );
}

export default App;
