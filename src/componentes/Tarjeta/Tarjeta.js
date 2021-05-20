import React from 'react';
import './Tarjeta.css'




export default function Tarjeta({
  adicional,
  precio,
  nombre,
  descripcion,
  showAdditional,
  lugar,
  duracion,
  notas
}) {
  return (
    <div className="tarjeta-wrapper">
      <h2>{nombre}</h2>
      <h3>{descripcion}</h3>
      <h4>{precio}kg</h4>
       <h4>{duracion}kg</h4>
	   <h4>{lugar}kg</h4>
	   <h4>{notas}kg</h4>
	  
    <button onClick={() => showAdditional(adicional)}>Inscribete aquí</button>
    </div>
  );
}