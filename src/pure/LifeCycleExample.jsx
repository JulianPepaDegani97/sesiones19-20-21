import PropTypes from 'prop-types'
import React, { Component } from 'react'

export default class LifeCycleExample extends Component {

    constructor(props) {
        super(props);
        console.log('CONSTRUCTOR: cuando se instancia el componente');
    }
    componentWillMount() {
        console.log('WillMount: antes del montaje del componente');
    }
    componentDidMount() {
        console.log('DidMount: justo al montaje del componente, antes de pintarlo');
    }
    componentWillReceiveProps(nextProps) {
        console.log('WillReceiveProps: si va a recibir nuevas props');
    }
    shouldComponentUpdate(nextProps, nextState) {
        console.log('WillReceiveProps: si va a recibir nuevas props');
    }

  render() {
    return (
      <div>LifeCycleExample</div>
    )
  }
}
