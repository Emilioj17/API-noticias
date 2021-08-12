import styled from '@emotion/styled';
import { useEffect, useState } from 'react';
import useInput from "./hook/useInput";
import Noticias from "./component/Noticias";

const Contenedor = styled.div`
  background-color: #1A5276;
  height: 100vh;
  widht: 100vw;
  text-align:center;
  color: white;
  display: grid;

  h1{
    margin:0;
    padding:0;
  }
`

function App() {
  const [noticias, setNoticias]= useState([])
  const opciones = [
    { value: 'general', label: 'General' },
    { value: 'business', label: 'Negocios' },
    { value: 'entertainment', label: 'Entretenimiento' },
    { value: 'health', label: 'Salud' },
    { value: 'science', label: 'Ciencia' },
    { value: 'sports', label: 'Deportes' },
    { value: 'technology', label: 'Tecnología' },
  ];

  const [estado, Retorno] = useInput("Eligue Tipo de Noticia", "everything", opciones);

  const OnSubmit = () => {
    
  }

  return (
    <Contenedor>
      <h1>Generador de Noticias</h1>
      <Retorno />
      <div>
          <input type="button" value="Buscar Noticias" />
      </div>
      <Noticias />
    </Contenedor>
  );
}

export default App;
