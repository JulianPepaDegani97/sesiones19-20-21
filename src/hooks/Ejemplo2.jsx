import React, { useEffect, useRef, useState } from 'react'

const Ejemplo2 = () => {

    const [contador1, setContador1] = useState(0);
    const [contador2, setContador2] = useState(0);

    const miRef = useRef();

    const incrementar1 = () => {
        setContador1(contador1 + 1);
    }
    const incrementar2 = () => {
        setContador2(contador2 + 1);
    }

    useEffect(() => {
        console.log(miRef);
    }, [contador1, contador2])
  return (
    <div>
        <h2>Contador 1: {contador1}</h2>
        <h2>Contador 2: {contador2}</h2>
        <h4 ref={miRef}>
            Ejemplo de elemento referenciado
        </h4>
        <button onClick={incrementar1}>Contador 1</button>
        <button onClick={incrementar2}>Contador 2</button>
    </div>
  )
}

export default Ejemplo2