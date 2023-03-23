import React from 'react'

function ProductCard(props) {
  return (
    <div>
      <h4>{props.product.name}</h4>
      <p>{props.product.description}</p>
      <p>Price: ${props.product.price.toFixed(2)}</p>
      <img src={props.product.image} alt={props.product.name} />
    </div>
  )
}

export default ProductCard
