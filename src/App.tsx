import { useState } from 'react';
import reactLogo from './assets/react.svg';
import './App.scss';
import Header from './components/header';

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <Header></Header>
    </div>
  );
}

export default App;
