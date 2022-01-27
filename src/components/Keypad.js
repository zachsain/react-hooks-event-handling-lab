
import React from 'react';

function consoleLog(){
    return console.log('Entering password...')
}

function Keypad() {
    return (
        <input 
        type="password"
        
        onChange={() => console.log('Entering password...')}>

        </input>
    )
    
}


export default Keypad;