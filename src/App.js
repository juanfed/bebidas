import React, {Fragment} from 'react';
import './App.css';
import Formulario from './components/Formulario';

function App() {
  return (
    <Fragment className="App">
      <header>
        <h1>Api de bebidas</h1>
      </header>
      <main>
        <Formulario />
      </main>
      <footer></footer>
    </Fragment>
  );
}

export default App;
