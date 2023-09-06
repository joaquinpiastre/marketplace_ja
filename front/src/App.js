import './App.css';
import './index.css';

import React from 'react'
import { Navbar } from "./components/Navbar"
import { Button } from "./components/Button"
import { Login } from './components/login'
import { Categories } from "./components/Categories"

const App = () => {
  return (
    <div>
      <Navbar />
      <Button />
      <Login />
      <Categories />
    </div>)
}

export default App;
