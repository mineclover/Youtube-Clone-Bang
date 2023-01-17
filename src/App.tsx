import { useState } from 'react';
import reactLogo from './assets/react.svg';
import './App.scss';
import Header from './components/header';
import SideBar from './components/side-bar';

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <Header></Header>
      <SideBar></SideBar>
    </div>
  );
}

export default App;
