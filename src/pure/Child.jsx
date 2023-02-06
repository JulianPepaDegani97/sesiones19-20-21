import React, { useRef } from 'react'

const Child = ({ name, send, update }) => {

    const messageRef = useRef('');
    const nameRef = useRef('');

    const pressButton = () => {
        const text = messageRef.current;
        console.log(messageRef.current.value);
        //alert('Default text: ' + text);
    }

    const pressButtonParams = (text) => {
        alert(text)
    }
    const onSubmitHandler = (e) => {
        e.preventDefault();
        update(nameRef.current.value);
    }
  return (
    <div>
        <p onMouseOver={() => console.log('Mouse over')}>{name}</p>
        <button onClick={() => pressButtonParams(messageRef.current.value)}>
            Button 1
        </button>
        <button onClick={pressButton}>
            Button 2
        </button>
        <button onClick={() => send(messageRef.current.value)}>
            Send Message
        </button>
        <input autoFocus ref={messageRef} />
        <div>
            <form onSubmit={onSubmitHandler}>
                <input ref={nameRef} placeholder='Add name' />
                <button type='submit'>Update name</button>
            </form>
        </div>
    </div>
  )
}

export default Child