import React, { useState } from 'react'
import sampleimg from '../assets/pat-taylor-12V36G17IbQ-unsplash.jpg'

function ProductTile({ product }) {

  const [addCount, setAddCount] = useState(0)


  return (
    <div 
      className="relative flex flex-col pb-2 rounded-md cursor-pointer border-none shadow-xl"
      style={{width:"300px"}}
    >

      {/* top segement */}
      <div className="flex-1">
        <div className="h-52 relative w-full rounded-md">
          <img src={sampleimg} style={{height:"100%", width:"100%", objectFit: "cover"}} />
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