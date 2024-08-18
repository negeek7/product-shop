import React, { useState } from 'react'
import sampleimg from '../assets/pat-taylor-12V36G17IbQ-unsplash.jpg'

function ProductTile({ product }) {

  let { name, price, features, isBestSeller, images } = product
  const [addCount, setAddCount] = useState(0)


  return (
    <div
      className="relative flex flex-col pb-2 rounded-md cursor-pointer shadow-md border-none hover:scale-105
      hover:shadow-blue-900 transition ease-in duration-300"
      style={{ width: "300px" }}
    >

      {/* top segement */}
      <div className="h-60 relative w-full">
        <img src={sampleimg} className="rounded-md" style={{ height: "100%", width: "100%", objectFit: "cover" }} />
      </div>

      <div className="flex-1 py-2 px-4 flex flex-col">
        <div className="flex-1">
          <p className="text-lg">{name}</p>

          {
            features &&
            <div className="truncate w-full">
              {
                features.map((feature, i) => (
                  <span className="text-white opacity-60 text-xs">{feature}{i === features.length - 1 ? '' : ','}&nbsp;</span>
                ))
              }
            </div>
          }
          {
            isBestSeller && <p className="bg-orange-400 mt-2 p-1 w-fit text-xs rounded-lg">Best selling product</p>
          }

        </div>
        <p className="mt-4 flex-end">₹{price}</p>
      </div>


      {/* bottom segement */}
      <button className="mx-2 mt-2 float-end font-bold focus:outline-none hover:bg-gray-600 border-none">Add to Cart</button>

    </div>
  )
}

export default ProductTile