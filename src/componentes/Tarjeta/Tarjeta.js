import React from 'react';
import './Tarjeta.css';



export default function Tarjeta({
 
  precio,
  nombre,
  descripcion,
  lugar,
  duracion,
  notas
}) {
  return (
    <div className="tarjeta-wrapper">
      <br></br>
      <h4 className="text-center">{nombre}</h4>
      <br></br>
      <h7 className="text-center font-italic">{descripcion}</h7>
      <br></br>
      <br></br>
      <p className="text-center font-italic">Precio: {precio} COP</p>
       <p className="text-center font-italic">Duración: {duracion}.</p>
	   <p className="text-center font-italic">Lugar: {lugar}</p>
	   <p className="text-center font-italic"> {notas}</p>
	  
    <p className="text-center"><a className= "btn btn-dark" href="https://forms.gle/yqbTs4z8Q8iCddwT8" target="_blank" role="button" >Registro aquí</a></p>
    </div>
  );
}