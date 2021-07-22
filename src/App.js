import { Fragment, useState } from "react";
import './index.css';
import Header from "./components/Header";
import Formulario from "./components/Formulario";
import Resumen from "./components/Resumen";
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

  const [resumen, guardarResumen] = useState({
    cotizacion: 0,
    datos: {
      marca:'',
      year: '',
      plan: ''
    }
  });
  
  //Destructuring
  const { datos } = resumen;



  return (
   <Fragment>
    <Contenedor>
      <Header
        titulo = 'Cotizador de Seguros'
      />
      <ContenedorFormulario>
        <Formulario
            guardarResumen = {guardarResumen}
        />
        <Resumen
            datos = {datos}
        />
      </ContenedorFormulario>
    </Contenedor>
   </Fragment>
  );
}

export default App;
