import useInput from '../hooks/use-inputold';

const SimpleInput = (props) => {

  const mailFormat = /^\w+([-]?\w+)*@\w+([-]?\w+)*(\.\w{2,3})+$/;

  const {
    value: enteredName,
    isValid: enteredNameIsValid,
    hasError: nameInputHasError,
    valueChangeHandler: nameChangeHandler,
    valueInputBlurHandler: nameInputBlurHandler,
    reset: resetNameInput
  } = useInput((value) => value.trim() !== '');

  const {
    value: enteredEmail,
    isValid: enteredEmailisValid,
    hasError: emailInputHasError,
    valueChangeHandler: emailChangeHandler,
    valueInputBlurHandler: emailInputBlurHandler,
    reset: resetEmailInput
  } = useInput((value) => value.trim() !== '' && value.trim().match(mailFormat));


  const submitHandler = (e) => {
    e.preventDefault();

    if(!enteredNameIsValid || !enteredEmailisValid){
      return;
    }

    resetNameInput();
    resetEmailInput();
  }


  const formClasses = nameInputHasError ? 'form-control invalid' : 'form-control';
  const emailFormClasses = emailInputHasError ? 'form-control invalid' : 'form-control';

  return (
    <form onSubmit={submitHandler}>
      <div className={formClasses}>
        <label htmlFor='name'>Your Name</label>
        <input placeholder='enter name here...' onBlur={nameInputBlurHandler} onChange={nameChangeHandler} value={enteredName} type='text' id='name' />
        { nameInputHasError && <p className='error-text' >Name must not be empty</p>}
      </div>
      <div className={emailFormClasses}>
        <label htmlFor='email'>Your Email</label>
        <input placeholder='enter email here...' onBlur={emailInputBlurHandler} onChange={emailChangeHandler} value={enteredEmail} type='email' id='email' />
        { emailInputHasError && <p className='error-text' >Enter a valid email</p>}
      </div>
      <div className="form-actions">
        <button>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
