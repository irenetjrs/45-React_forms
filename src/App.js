import React, {useState} from "react";
import { Formik, Form, Field } from "formik";

// // without libraries

// function App () {

//   const [name, setName] = useState('');
//   const [login, setLogin] = useState('');
//   const [age, setAge] = useState('');
//   const [email, setEmail] = useState('');

//   const [isNameValid, setNameValid] = useState(false);
//   const [isLoginValid, setLoginValid] = useState(false);
//   const [isAgeValid, setAgeValid] = useState(false);
//   const [isEmailValid, setEmailValid] = useState(false);

//   const submit = (e) => {
//     e.preventDefault();

//     if(name.trim() === ''|| /\d/.test(name)){
//       setNameValid(false)
//       return;
//     }

//     if(login.length <= 5){
//       setLoginValid(false);
//       return;
//     }

//     if(age < 18){
//       setAgeValid(false);
//       return;
//     }

//     if(!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(email)){
//       setEmailValid(false);
//       return;
//     }

//     setNameValid(true);
//     setLoginValid(true);
//     setAgeValid(true);
//     setEmailValid(true);

//     console.log(name, login, age, email);

//   }

// const nameChange = e => setName(e.target.value);
// const loginChange = e => setLogin(e.target.value);
// const ageChange = e => setAge(e.target.value);
// const emailChange = e => setEmail(e.target.value);

// return (
// <div className="wrapper">
//   <form onSubmit={submit}>
//     <label>Name</label>
//     <input onInput={nameChange} className={isNameValid ? '' : 'invalid'}/>
//     {!isNameValid && <p>Enter correct name</p>}
//     <label>Login</label>
//     <input onInput={loginChange} className={isLoginValid ? '' : 'invalid'}/>
//     {!isLoginValid && <p>Login needs more than 5 characters</p>}
//     <label>Age</label>
//     <input 
//       onInput={ageChange}
//       type="number" 
//       className={isAgeValid ? '' : 'invalid'}
//     />
//       {!isAgeValid && <p>You need to be at least 18 y.o.</p>}
//     <label>Email</label>
//     <input onInput={emailChange} className={isEmailValid ? '' : 'invalid'}/>
//     {!isEmailValid && <p>Enter correct email</p>}
//     <button type="submit">Sign in</button>
//   </form>
// </div>
// );
// } 

// export default App;

// FORMIK

function App(){
  const validateName = (value) => {
  if(!value){
    return 'Required';
  } else if (value.trim() === '' || /\d/.test(value)){
    return 'Name should not contain numbers.';
  }
  }
  const validateLogin = (value) => {
    if(!value){
      return 'Required';
    } else if(value.length < 5) {
      return 'Enter more than 5 characters.'
    }
  }
  const validateAge = (value) => {
    if(!value){
      return 'Required';
    } else if(value < 18) {
      return 'You need to be at least 18 y.o.'
    }
  }
  const validateEmail = (value) => {
    if(!value){
      return 'Required';
    } else if(!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)){
      return 'Enter correct email'
    }
  }

  return (
    <div className="wrapper">
    
        <Formik
          initialValues={{
            name: '', 
            login: '',
            age: '',
            email: '',
          }}
          onSubmit={values => {console.log(values)}}
          >
            {({errors, touched}) => (
              <Form>
                <label>Name</label>
                <Field name="name" validate={validateName} className={errors.name && touched.name ? "invalid" : ""}/>
                {errors.name && touched.name && <p>{errors.name}</p>}
                <label>Login</label>
                <Field name="login" validate={validateLogin} className={errors.login && touched.login ? "invalid" : ""}/>
                {errors.login && touched.login && <p>{errors.login}</p>}
                <label>Age</label>
                <Field name="age" validate={validateAge} className={errors.age && touched.age ? "invalid" : ""}/>
                {errors.age && touched.age && <p>{errors.age}</p>}
                <label>Email</label>
                <Field name="email" validate={validateEmail} className={errors.email && touched.email ? "invalid" : ""}/>
                {errors.email && touched.email && <p>{errors.email}</p>}
                <button type="submit">Sign in</button>
              </Form>
            )}
          </Formik>
    
      </div>)
}
export default App;