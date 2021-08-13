import React from 'react';
import styled from '@emotion/styled';

const ContenedorNoticias = styled.div`
    display: grid;
    width: 100vw;
    grid-template-columns: auto auto auto;
    margin: 0;
    padding: 0;

    div{
        max-width: 33vw;
        border-style: groove;
        padding: 1vw;

        img{
            max-width:30vw;
            height: 300px;
        }
    }
`

const Noticias = ({ noticias }) => {
    const Cuerpo = noticias.map((noticia) => {
        return (
            <div>
                <h3>{noticia.title.slice(0,40)}</h3>
                <img src={noticia.urlToImage} alt="" />
                <p>{noticia.content}</p>
                <span><a href={noticia.url}> ...VER MAS</a></span>
            </div>
        )
    })

    return (
        <ContenedorNoticias>{Cuerpo}</ContenedorNoticias>
    )
}

export default Noticias;