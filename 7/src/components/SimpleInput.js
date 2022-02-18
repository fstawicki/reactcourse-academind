import {useState} from 'react'



const SimpleInput = (props) => {

  const [enteredName, setEnteredName] = useState('');
  const [enteredNameTouched, setEnteredNameTouched] = useState(false);

  const [enteredEmail, setEnteredEmail] = useState('');
  const [enteredEmailTouched, setEnteredEmailTouched] = useState(false);


  const enteredNameIsValid = enteredName.trim() !== '';
  const nameInputIsInvalid = !enteredNameIsValid && enteredNameTouched;


  const mailFormat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  const enteredEmailisValid = enteredEmail.trim() !== '' && enteredEmail.trim().match(mailFormat);
  const emailInputIsInvalid = !enteredEmailisValid && enteredEmailTouched;


  const emailChangeHandler = (event) => {
    setEnteredEmail(event.target.value);

  }

  const emailInputBlurHandler = (event) => {
    setEnteredEmailTouched(true);
  }


  const nameChangeHandler = (e) => {
    setEnteredName(e.target.value);
  }
  
  const nameInputBlurHandler = event => {
    setEnteredNameTouched(true);
  }

  const submitHandler = (e) => {
    e.preventDefault();
    setEnteredNameTouched(true);
    setEnteredEmailTouched(true);

    if(!enteredNameIsValid || !enteredEmailisValid){
      return;
    }

    setEnteredName('');
    setEnteredNameTouched(false);

    setEnteredEmail('');
    setEnteredEmailTouched(false);
  }

  

  const formClasses = nameInputIsInvalid ? 'form-control invalid' : 'form-control';
  const emailFormClasses = emailInputIsInvalid ? 'form-control invalid' : 'form-control';

  return (
    <form onSubmit={submitHandler}>
      <div className={formClasses}>
        <label htmlFor='name'>Your Name</label>
        <input placeholder='enter name here...' onBlur={nameInputBlurHandler} onChange={nameChangeHandler} value={enteredName} type='text' id='name' />
        { nameInputIsInvalid && <p className='error-text' >Name must not be empty</p>}
      </div>
      <div className={emailFormClasses}>
        <label htmlFor='email'>Your Email</label>
        <input placeholder='enter email here...' onBlur={emailInputBlurHandler} onChange={emailChangeHandler} value={enteredEmail} type='email' id='email' />
        { emailInputIsInvalid && <p className='error-text' >Enter a valid email</p>}
      </div>
      <div className="form-actions">
        <button>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
