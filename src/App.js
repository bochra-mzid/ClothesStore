import React from 'react' 
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import MainRouter from './MainRouter'
import NavbarSection from './components/navbar/Navbar'


function App() {
  return (
    <div className="App">
      <NavbarSection/>
      <MainRouter/>
      
    </div>
  );
}

export default App;
