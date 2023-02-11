import React from 'react'

const AsyncExample = () => {

    const saveSessionStorage = async(key, value) => {
       await sessionStorage.setItem(key, value);
       return Promise.resolve(sessionStorage.getItem(key));
    }

    const showStorage = () => {
        saveSessionStorage('name', 'Julián')
        .then((response) => {
            let value = response;
            alert(value);
        }).catch(error => alert(error))
        .finally(() => console.log('done'));
    }

    const obtainMessage = async() => {
        let promise = new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve('Hello World');
            }, 2000);
        })
        let message = await promise;
        await alert('Message is: ' + message);
    }

  return (
    <div>
        <button onClick={showStorage}>Session</button>
        <button onClick={obtainMessage}>Send message</button>
    </div>
  )
}

export default AsyncExample