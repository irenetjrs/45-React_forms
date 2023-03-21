import React, {useState} from "react";

function App () {

  const [name, setName] = useState('');
  const [login, setLogin] = useState('');
  const [age, setAge] = useState('');
  const [email, setEmail] = useState('');

  const [isNameValid, setNameValid] = useState(false);
  const [isLoginValid, setLoginValid] = useState(false);
  const [isAgeValid, setAgeValid] = useState(false);
  const [isEmailValid, setEmailValid] = useState(false);

  const submit = (e) => {
    e.preventDefault();

    if(name.trim() === ''|| /\d/.test(name)){
      setNameValid(false)
      return;
    }

    if(login.length <= 5){
      setLoginValid(false);
      return;
    }

    if(age < 18){
      setAgeValid(false);
      return;
    }

    if(!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(email)){
      setEmailValid(false);
      return;
    }

    setNameValid(true);
    setLoginValid(true);
    setAgeValid(true);
    setEmailValid(true);

    console.log(name, login, age, email);

  }

const nameChange = e => setName(e.target.value);
const loginChange = e => setLogin(e.target.value);
const ageChange = e => setAge(e.target.value);
const emailChange = e => setEmail(e.target.value);

return (
<div className="wrapper">
  <form onSubmit={submit}>
    <label>Name</label>
    <input onInput={nameChange} className={isNameValid ? '' : 'invalid'}/>
    {!isNameValid && <p>Enter correct name</p>}
    <label>Login</label>
    <input onInput={loginChange} className={isLoginValid ? '' : 'invalid'}/>
    {!isLoginValid && <p>Login needs more than 5 characters</p>}
    <label>Age</label>
    <input 
      onInput={ageChange}
      type="number" 
      className={isAgeValid ? '' : 'invalid'}
    />
      {!isAgeValid && <p>You need to be at least 18 y.o.</p>}
    <label>Email</label>
    <input onInput={emailChange} className={isEmailValid ? '' : 'invalid'}/>
    {!isEmailValid && <p>Enter correct email</p>}
    <button type="submit">Sign in</button>
  </form>
</div>
);
} 

export default App;