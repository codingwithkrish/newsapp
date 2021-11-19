
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.rtl.min.css'

import React, { Component } from 'react'
import Navbar  from './components/Navbar';
import News from './components/News';

export default class App extends Component {
  a='krish';
  render() {
    return (
      <div>
           <Navbar/>
           <News/>
           
      </div>
    )
  }
}

