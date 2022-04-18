import React, {useState} from 'react'
import Output from './Output';


const Greeting = () => {

  const [changedText,setChangedText] = useState(false);

  const changeTextHandler = () => {
    setChangedText(true);
  }

  return (
    <div>
        <h2>hello world</h2>
        {!changedText && <Output>its good to see u</Output>}
        {changedText && <Output>changed</Output>}
        <button onClick={changeTextHandler}>CHANGE</button>
        
    </div>
  )
}

export default Greeting