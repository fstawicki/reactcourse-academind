import {useState, useEffect} from "react";

// hook need to start with use keyword
const useCounter = (direction) => {

    const [counter, setCounter] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
        if(direction === true){
            setCounter((prevCounter) => prevCounter + 1);
        }else{
            setCounter((prevCounter) => prevCounter - 1);
        }
    }, 1000);

    return () => clearInterval(interval);
  }, [direction]);


  return counter;

}

export default useCounter;