import React, {useState, useEffect, Suspense} from 'react';
import './App.css';
//import Surprise from './surprise.js';

const Surprise = React.lazy(()=> import('./surprise'));
function App() {
  const [showSurprise, setShowSurprise] = useState(false);

  return (
    <div className="App">
      <button onClick={(ev)=>setShowSurprise(true)}>Mostrar sorpresa</button>
      {
        showSurprise && <Suspense fallback={ <p>Cargando...</p>}><Surprise /></Suspense>
      }
    </div>
  );
}

export default App;
