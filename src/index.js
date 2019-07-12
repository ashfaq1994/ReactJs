import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Link } from "react-router-dom";
import Navbar from './components/Navbar/index';
import Welcome from './components/Welcome/index';
import Footer from './components/Footer';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import CreateArticle from './components/CreateArticle';


const Home = () => {
    return <h1>Home</h1>
};

const About = () => {
    return <h1>About</h1>
};

ReactDOM.render(
    <BrowserRouter>
      <div>
      <Navbar />
      <Route exact  path="/" component={Welcome} />  
      <Route path="/about" component={About} />  
      <Route path="/home" component={Home} /> 
      <Route path="/article/create" component={CreateArticle} /> 
      <Footer />
      </div>
     </BrowserRouter>
    , document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
