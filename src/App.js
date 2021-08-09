import React, {useState, useEffect} from 'react';
import './App.css';
import Surprise from './surprise.js';

function App() {
  const [showSurprise, setShowSurprise] = useState(false);

/*  useEffect(()=>{
    import("./hello").then(mod => mod.default());
  },[]) */
  return (
    <div className="App">
      <button onClick={(ev)=>setShowSurprise(true)}>Mostrar sorpresa</button>
      {
        showSurprise && <Surprise />
      }
    </div>
  );
}

export default App;
