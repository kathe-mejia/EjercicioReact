import React from 'react';
import './Tarjeta.css';
import HomeTarjeta from './HomeTarjeta'; 






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
      <h4>{nombre}</h4>
      <h7>{descripcion}</h7>
      <p>{precio}.</p>
       <p>{duracion}.</p>
	   <p>{lugar}..</p>
	   <p>{notas}..</p>
	  
    <button className= "btn btn-outline-info" onClick={() => showAdditional(adicional)} >Inscribete aquí</button>
    </div>
  );
}