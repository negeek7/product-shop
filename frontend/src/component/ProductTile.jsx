import React, { useState } from 'react'

function ProductTile({ product }) {

  const [addCount, setAddCount] = useState(0)


  return (
    <div className="h-36 border-2 border-red-900 rounded-md p-2">
      <image className="h-2/5"  src=""/>

      <p>{product.name}</p>
      {
        product.features && product.features.map(feature => {
          <p>{feature}</p>
        })
      }

      <p>{price}</p>

      <div className="flex flex-col gap-4">
        <span>-</span>
        <span>{addCount}</span>
        <span>+</span>
      </div>

    </div>
  )
}

export default ProductTile