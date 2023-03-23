import React, { useState } from 'react'
import ProductCard from './ProductCard'

function Section(props) {
  const [products, setProducts] = useState(props.section.products)

  const addProduct = (productName, productDescription, productPrice, productImage) => {
    const newProduct = {
      name: productName,
      description: productDescription,
      price: productPrice,
      image: productImage
    }
    setProducts([...products, newProduct])
  }

  return (
    <div style={{ backgroundImage: `url(${props.section.background})` }}>
      <h3>{props.section.name}</h3>
      <button onClick={() => addProduct('New Product', '', 0, null)}>Add Product</button>
      {products?.map((product, index) => (
        <ProductCard key={index} product={product} />
      ))}
    </div>
  )
}

export default Section
