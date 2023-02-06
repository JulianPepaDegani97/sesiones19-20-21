import React from 'react'
import { useState } from 'react'

const Ejemplo1 = () => {
    
    const valorInicial = 0;
    const personaInicial = {
        nombre: 'Julián',
        email: 'julianpepadegani97@gmail.com'
    }
    const [contador, setContador] = useState(valorInicial);
    const [persona, setPersona] = useState(personaInicial);

    const contadorHandler = () => {
        setContador(contador + 1);
    }
    const personaHandler = () => {
        setPersona({
            nombre: 'Otro nombre',
            email: 'abde@gmail.com'
        })
    }
  return (
    <div>
        <h1>Nombre: {persona.nombre}</h1>
        <h2>Email: {persona.email}</h2>
        <h3>{contador}</h3>
        <button onClick={contadorHandler}>Incrementar</button>
        <button onClick={personaHandler}>Cambiar persona</button>
    </div>
  )
}

export default Ejemplo1