import React, { useState } from 'react'
import sampleimg from '../assets/pat-taylor-12V36G17IbQ-unsplash.jpg'

function ProductTile({ product }) {

  const [addCount, setAddCount] = useState(0)


  return (
    <div className="relative flex flex-col h-96 pb-2 border-2 border-red-900 rounded-md cursor-pointer">

      {/* top segement */}
      <div className="flex-1">
        <div className="h-3/5 relative border-2 border-green-400 w-full rounded-md">
          {/* <img src={sampleimg} className="h-2/4 w-full object-contain" /> */}
        </div>

        <div className="py-2 px-4">
          <p>{product.name}</p>

          {
            product.features && product.features.map(feature => (
              <p>{feature}</p>
            ))
          }

          <p>{product.price}</p>
        </div>
      </div>


      {/* bottom segement */}
      <button className="mx-2">Add to Cart</button>

    </div>
  )
}

export default ProductTile