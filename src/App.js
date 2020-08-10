import React, {useState, useEffect} from 'react';
import {BrowserRouter as Router, Route, Link } from 'react-router-dom';
import './App.css';

function App() {
  const headerData =[
    { title: 'Home', path: '/' },
    { title: 'About', path: '/about' },
    { title: 'Contact', path: '/contact' }
  ]
  const homeData = {
    title: 'Keep Moving Forward',
    subTitle: 'Projects, and add sub title',
    text: 'Take a look at my projects below'
  }

  const [title, setTitle] = useState("Kirk Veitch");
  const [headerLinks, setHeaderLinks] = useState(headerData);
  const [home, setHome] = useState(homeData);
  const [about, setabout] = useState({title: 'About Me'});
  const [contact, setContact] = useState({title: 'Get in touch'});

  return (
    <div className="App">
      APP Place holder
    </div>
  );
}

export default App;
