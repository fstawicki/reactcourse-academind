import useInput from "../hooks/use-input";
import '../App.css'



const BasicForm = (props) => {

  const validateEmpty = enteredValue => enteredValue.trim() !== '';
  const validateEmail = enteredValue => enteredValue.trim().match(/^\w+([-]?\w+)*@\w+([-]?\w+)*(\.\w{2,3})+$/);

  const {
    enteredValue: enteredFirstName,
    isValid: enteredFirstNameisValid,
    hasError: enteredFirstNameHasError,
    enteredValueChangeHandler: enteredFirstNameChangeHandler,
    enteredValueBlurHandler: enteredFirstNameBlurHandler,
    reset: enteredFirstNameReset
  } = useInput(validateEmpty)

  const {
    enteredValue: enteredLastName,
    isValid: enteredLastNameisValid,
    hasError: enteredLastNameHasError,
    enteredValueChangeHandler: enteredLastNameChangeHandler,
    enteredValueBlurHandler: enteredLastNameBlurHandler,
    reset: enteredLastNameReset
  } = useInput(validateEmpty)



  const {
    enteredValue: enteredEmail,
    isValid: enteredEmailisValid,
    hasError: enteredEmailHasError,
    enteredValueChangeHandler: enteredEmailChangeHandler,
    enteredValueBlurHandler: enteredEmailBlurHandler,
    reset: enteredEmailReset
  } = useInput(validateEmpty && validateEmail)




  const formSubmitHandler = (event) => {

    event.preventDefault();

    if(!enteredFirstNameisValid || !enteredLastNameisValid || !enteredEmailisValid){
      alert('Please, enter valid information')
      return;
    }

    console.log(enteredFirstName, enteredLastName,enteredEmail);

    enteredFirstNameReset();
    enteredLastNameReset();
    enteredEmailReset();
  } 


  const firstNameCss = enteredFirstNameHasError ? 'form-control invalid' : 'form-control';
  const lastNameCss = enteredLastNameHasError ? 'form-control invalid' : 'form-control';
  const emailCss = enteredEmailHasError ? 'form-control invalid' : 'form-control';



  return (
    <form onSubmit={formSubmitHandler}>
      <div className='control-group'>
        <div className={firstNameCss}>
          <label htmlFor='firstName'>First Name</label>
          <input onBlur={enteredFirstNameBlurHandler} onChange={enteredFirstNameChangeHandler} value={enteredFirstName} type='text' id='firstName' />
          {enteredFirstNameHasError && <p>please enter valid first name</p>}
        </div>
        <div className={lastNameCss}>
          <label htmlFor='lastName'>Last Name</label>
          <input onBlur={enteredLastNameBlurHandler} onChange={enteredLastNameChangeHandler} value={enteredLastName} type='text' id='lastName' />
          {enteredLastNameHasError && <p>please enter valid last name</p>}
        </div>
      </div>
      <div className={emailCss}>
        <label htmlFor='email'>E-Mail Address</label>
        <input onBlur={enteredEmailBlurHandler} onChange={enteredEmailChangeHandler} value={enteredEmail} type='email' id='email' />
        {enteredEmailHasError && <p>please enter valid email</p>}
      </div>
      <div className='form-actions'>
        <button>Submit</button>
      </div>
    </form>
  );
};

export default BasicForm;
