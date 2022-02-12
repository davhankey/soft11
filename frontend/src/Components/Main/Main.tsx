import React from 'react';
import { Routes, Route } from 'react-router-dom';

//import Home from '../pages/Home';
import Signup from '../pages/Signup';

const Home = () => (
    <div className='home'>
      <h1>Welcome to my portfolio website</h1>
      <p> Feel free to browse around and learn more about me.</p>
    </div>
  );
  
  const About = () => (
    <div className='about'>
      <h1>About Me</h1>
      <p>Ipsum dolor dolorem consectetur est velit fugiat. Dolorem provident corporis fuga saepe distinctio ipsam? Et quos harum excepturi dolorum molestias?</p>
      <p>Ipsum dolor dolorem consectetur est velit fugiat. Dolorem provident corporis fuga saepe distinctio ipsam? Et quos harum excepturi dolorum molestias?</p>
    </div>
  );

  const Contact = () => (
    <div className='contact'>
      <h1>Contact Me</h1>
      <p>You can reach me via email: <strong>hello@example.com</strong></p>
    </div>
  );

const Main = () => {
  return (
    <Routes> 
      <Route  path='/' ><Home /></Route>
      <Route  path='/about' ><About /></Route>
      <Route  path='/contact'><Contact /></Route>
      <Route  path='/signup' ><Signup /></Route>
    </Routes>
  );
}

export default Main;