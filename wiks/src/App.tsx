import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Navbar from './components/Navbar';

function App() {
  return (
<div className='app-wrapper'>
<Header />
 <Navbar/>
 <div className='content '>
  <div>
  <img src="https://sportishka.com/uploads/posts/2022-04/1651298115_32-sportishka-com-p-milaya-mashina-mashini-krasivo-foto-38.jpg" alt="auto" />
  </div>

 </div>
</div>
  );
}

export default App;
