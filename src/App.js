import { Fragment, useState } from "react";
import './index.css';
import Header from "./components/Header";
import Formulario from "./components/Formulario";
import Resumen from "./components/Resumen";
import Resultado from "./components/Resultado";
import styled from 'styled-components';
import Spinner from './components/Spinner';


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

  const [cargando, guardarCargando] = useState(false);
  
  //Destructuring
  const { datos, cotizacion } = resumen;


  return (
   <Fragment>
    <Contenedor>
      <Header
        titulo = 'Cotizador de Seguros'
      />
      <ContenedorFormulario>
        <Formulario
            guardarResumen = {guardarResumen}
            guardarCargando = {guardarCargando}
        />  
        <Resumen
            datos = {datos}
        />
        { !cargando ? <Resultado
            cotizacion = {cotizacion}
        /> : null }
        <div className='centrar'>
        {cargando ? <Spinner/> : null}
        </div>
      </ContenedorFormulario>
    </Contenedor>
   </Fragment>
  );
}

export default App;
