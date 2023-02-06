import PropTypes from 'prop-types'
import React, { Component } from 'react'

export default class Greetings extends Component {
 
    constructor (props) {
        super(props);
        this.state = {
            age: 29,
        }

    }

   

  render() {
    return (
      <div>
        <p>Mi edad es {this.state.age}</p>
        <button onClick={this.birthday} >Sumar año</button>
      </div>
    )
  }
  birthday = () => {
    this.setState(prevState => ( 
        {
          age: prevState.age + 1
        }
    ))
}
}
Greetings.propTypes = {
    age: PropTypes.number,
}

