import React from 'react';
import styled from '@emotion/styled';

const ContenedorNoticias = styled.div`
    display: grid;
    width: 100vw;
    grid-template-columns: auto auto auto;

    div{
        max-width: 33vw;

        img{
            max-width:30vw;
        }
    }
`

const Noticias = ({ noticias }) => {
    const Cuerpo = noticias.map((noticia) => {
        return (
            <div>
                <h3>{noticia.title}</h3>
                <p>{noticia.description}</p>
                <img src={noticia.urlToImage} alt="" />
            </div>
        )
    })

    return (
        <ContenedorNoticias>{Cuerpo}</ContenedorNoticias>
    )
}

export default Noticias;