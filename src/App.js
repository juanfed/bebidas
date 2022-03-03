import React from 'react';
import { Provider } from 'react-redux';
import store from '../src/redux/store';
import './App.css';
import Formulario from './components/Formulario';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <header>
          <h1>Api de bebidas</h1>
        </header>
        <main>
          <Formulario />
        </main>
        <footer></footer>
      </div>

    </Provider>
  );
}

export default App;
