import React from 'react';
import './Tarjetadeprecios.css'
import PropTypes from "prop-types";

export default function Tarjetadeprecios({
  additional,
  note1,
  name,
  description,
  showAdditional,
  price,
}) {
  return (
    <div className="animal-wrapper">
      <h4>{name}</h4>
      <br/>
      <p class="font-italic">{description}</p>
      <h4 >{price} </h4>
      <div class="font-italic" >{note1.join(', ')}.</div>
      <br/>
      <button onClick={() => showAdditional(additional)}>Mas información</button>
    </div>
  );
}

Tarjetadeprecios.propTypes={
    additional: PropTypes.shape({
        link: PropTypes.string,
        notes: PropTypes.string
    }),
    note1: PropTypes.arrayOf(PropTypes.string).isRequired,
    name: PropTypes.string.isRequired,
    description:PropTypes.string.isRequired,
    showAdditional: PropTypes.func.isRequired,
    price: PropTypes.number.isRequired,

}
//Validar campo vacio
Tarjetadeprecios.defaultProps={
    additional: {

        notes: 'No se tiene info del producto'
    }


}