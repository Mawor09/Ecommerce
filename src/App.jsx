import React from 'react';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';

function App() {
  return (
    <>
      <NavBar />
      <ItemListContainer greeting="¡Bienvenido a Tu Closet.com!" />
    </>
  );
}

export default App;
