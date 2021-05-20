import React from 'react';
import data from './componentes/Tarjeta/data';
import Tarjeta from './componentes/Tarjeta/Tarjeta';
import './App.css';



function showAdditional(adicional) {
  const alertInformation = Object.entries(adicional)
    .map(information => `${information[0]}: ${information[1]}`)
    .join('\n');
  alert(alertInformation)
};


function App() {
  return (
    <div className="wrapper">
      <h1>Combos</h1>
      {data.map(combo => (
        <Tarjeta adicional={combo.adicional}
          precio={combo.precio} key={combo.nombre} nombre={combo.nombre} descripcion={combo.descripcion} showAdditional={showAdditional}
          lugar={combo.lugar} duracion={combo.duracion} notas={combo.notas}/>
      ))}
    </div>
  )
}

export default App;
