import styled from '@emotion/styled';
import { useEffect, useState } from 'react';
import useInput from "./hook/useInput";
import Noticias from "./component/Noticias";

const Contenedor = styled.div`
  background-color: #1A5276;
  height: 100%;
  width: 100vw;
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

  const APIKEY = "2ea928eac9ce4028bdb66320d4882d30";

  const OnSubmit = async () => {
    const response = await fetch(`https://newsapi.org/v2/top-headlines?country=us&category=${estado}&apiKey=${APIKEY}`);
    const data = await response.json();
    setNoticias(data.articles);
    console.log(data.articles);
  }

  return (
    <Contenedor>
      <h1>Generador de Noticias</h1>
      <Retorno />
      <div>
        <input type="button" value="Buscar Noticias" onClick={(e)=>OnSubmit(e)}/>
      </div>
      {(noticias) ? <Noticias noticias={noticias} /> : "Cargando..."}
    </Contenedor>
  );
}

export default App;
