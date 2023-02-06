import React, { useEffect, useState, useContext } from 'react'

const miContexto = React.createContext(null);

const Componente1 = () => {   

    const state = useContext(miContexto);

  return (
    <div>
        <h1>
            El token es: {state.token}
        </h1>
        <Componente2 />
    </div>
  )
}

const Componente2 = () => {

    const state = useContext(miContexto);

    return (
      <div>
        <h2>
            La sesión es: {state.sesion}
        </h2>
      </div>
    )
  }

  const ComponenteContexto = () => {
    const estadoInicial = {
        token: 1234567,
        sesion: 1
    }

    const actualizarSesion = () => {
        setSesionData({
            token: 2222222,
            sesion: sesionData.sesion + 1
        })
    }

    const [sesionData, setSesionData] = useState(estadoInicial);
        return (
            <miContexto.Provider value={sesionData} >
                <Componente1 />
                <button onClick={actualizarSesion}>Actualizar Sesión</button>
            </miContexto.Provider>
        )
  }
  export default ComponenteContexto;
