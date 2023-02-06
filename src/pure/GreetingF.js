import React, { useState } from 'react'
import PropTypes from 'prop-types'

const GreetingF = props => {

    const [age, setAge] = useState(25);
    const handleClick = () => {
        setAge(age + 1);
    }
  return (
    <div>
        <p>Edad: {age}</p>
        <button onClick={handleClick}>Sumar edad</button>
    </div>
  )
}

GreetingF.propTypes = {}

export default GreetingF;