import React, { useState } from 'react'


const Input = (label, estadoInicial, opciones) => {
    const [estado, setEstado] = useState(estadoInicial);

    const OnClick = (e) => {
        setEstado(e.target.value);
    }

    const Retorno = () => (
        <div>
            <label>{label}</label>
            <select>
                {opciones.map(opcion => (
                    <option key={opcion.value} value={opcion.value} onClick={(e)=>OnClick(e)}>{opcion.label}</option>
                ))}
            </select>
        </div>
    )
    

    return [estado, Retorno, setEstado];
}
 
export default Input;