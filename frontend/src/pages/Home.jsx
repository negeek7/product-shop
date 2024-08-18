import React, { useCallback, useEffect, useMemo, useState } from 'react'
import ProductTile from '../component/ProductTile'

function Home() {

  const [productList, setProductList] = useState([])
  const [pageNum, setPageNum] = useState(1)
  const [totalPages, setTotalPages] = useState(null)
  const [isFetchError, setIsFetchError] = useState(false)

  console.log(productList, "productList")
  console.log(totalPages)
  console.log(pageNum)

  useEffect(() => {
    fetchData(pageNum)
  }, [pageNum])

  async function fetchData() {
    try {
      let result = await fetch(`http://localhost:8001/products?page=${pageNum}&pageSize=${6}`)
      if (!result.ok) return setIsFetchError(true)
      else {
        result = await result.json()
        setProductList(result.products)
        setTotalPages(result.totalPages)
      }
    } catch (error) {
      setIsFetchError(true)
    }
  }

  const handlePagination = (type) => {
    setPageNum(prevPageNum => {
      if (type === 'previous' && prevPageNum > 1) {
        return prevPageNum - 1;
      } else if (type === 'next' && prevPageNum < totalPages) {
        return prevPageNum + 1;
      }
      return prevPageNum;
    });
  };

  return (
    <div className="flex flex-col gap-10 mb-4">

      <div className={"grid grid-flow-row grid-cols-4 gap-y-12"}>
        {
          productList && productList.map(product => (
            <ProductTile product={product} />
          ))
        }
      </div>


      <div className="flex flex-col justify-center gap-2">
      <span className="text-gray-500 text-sm text-center">Showing page {pageNum} of {totalPages}</span>
        <div className="flex justify-center gap-12">
        <button
          onClick={() => handlePagination('previous')}
          disabled={pageNum === 1}
          className="focus:outline-none"
          >
          Previous
        </button>

        <button
          onClick={() => handlePagination('next')}
          disabled={pageNum === totalPages}
          className="focus:outline-none"
        >
          Next
        </button>

        </div>
      </div>


    </div>
  )
}

export default Home