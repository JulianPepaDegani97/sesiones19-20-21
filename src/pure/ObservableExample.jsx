import React, {useState} from 'react';
import { getNumber } from '../services/observableService';

const ObservableExample = () => {

    const [number, setNumber] = useState(0);

    const obtainNewNumber = () => {
        console.log('INICIO');
        console.log(getNumber);
        getNumber.subscribe({
            next(x) {
              console.log('got value ' + x);
              setNumber(x);
            },
            error(err) {
              console.error('something wrong occurred: ' + err);
            },
            complete() {
              console.log('done');
            },
          });
        console.log('FIN');
    }

  return (
    <div>
        <h2>{number}</h2>
        <button onClick={obtainNewNumber}>New Number</button>
    </div>
  )
}

export default ObservableExample