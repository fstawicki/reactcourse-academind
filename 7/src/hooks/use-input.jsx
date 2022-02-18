import { useState } from 'react'

function useInput(validationLogic) {
  
    const [enteredValue, setEnteredValue] = useState('');
    const [isTouched, setIsTouched] = useState(false);

    const isValid = validationLogic(enteredValue);
    const hasError = !isValid && isTouched

    const enteredValueChangeHandler = (event) => {
        setEnteredValue(event.target.value);
    }

    const enteredValueBlurHandler = (event) => {
        setIsTouched(true);
    } 

    const reset = () => {
        setEnteredValue('');
        setIsTouched(false);
    }


    return{
        enteredValue,
        isValid,
        hasError,
        enteredValueChangeHandler,
        enteredValueBlurHandler,
        reset
    }


}

export default useInput;