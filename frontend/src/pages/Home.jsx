import React, { useCallback, useEffect, useMemo, useState } from 'react'
import ProductTile from '../component/ProductTile'
import Loader from '../component/Loader'

function Home() {

  const [productList, setProductList] = useState([])
  const [pageNum, setPageNum] = useState(1)
  const [totalPages, setTotalPages] = useState(null)
  const [isFetchError, setIsFetchError] = useState(false)
  const [isLoading, setIsLoading] = useState(true)

  console.log(productList, "productList")
  console.log(totalPages)
  console.log(pageNum)

  useEffect(() => {
    fetchData(pageNum)
  }, [pageNum])

  async function fetchData() {
    setIsLoading(true)
    setIsFetchError(false)
    try {
      let result = await fetch(`${import.meta.env.VITE_LOCAL_API_URL}/products?page=${pageNum}&pageSize=${6}`)
      if (!result.ok) {
        throw new Error('Failed to fetch products')
      }
      result = await result.json()
      setProductList(result.products)
      setTotalPages(result.totalPages)
    } catch (error) {
      console.error('Error fetching products:', error)
      setIsFetchError(true)
      setProductList([])
      setTotalPages(null)
    } finally {
      setIsLoading(false)
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

  if (isLoading) {
    return <div className="text-center py-8">
      <Loader />
    </div>
  }

  if (isFetchError) { 
    return (
      <div className="text-center py-8 text-red-500">
        An error occurred while fetching products. Please try again later.
      </div>
    )
  }

  return (
    <div className="flex flex-col gap-6 sm:gap-8 md:gap-10 mb-4">

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6 md:gap-8">
        {
          productList && productList.map(product => (
            <ProductTile key={product._id} product={product} />
          ))
        }
      </div>

      <div className="flex flex-col justify-center items-center gap-2 sm:gap-3 md:gap-4">
        <span className="text-gray-500 text-xs sm:text-sm md:text-base text-center">
          Showing page {pageNum} of {totalPages}
        </span>
        <div className="flex justify-center gap-4 sm:gap-6 md:gap-8">
          <button
            onClick={() => handlePagination('previous')}
            disabled={pageNum === 1}
            className="px-2 sm:px-3 md:px-4 py-1 sm:py-2 bg-gray-500 text-white text-sm sm:text-base rounded disabled:opacity-50 focus:outline-none transition-colors duration-200 hover:bg-gray-600"
          >
            Previous
          </button>

          <button
            onClick={() => handlePagination('next')}
            disabled={pageNum === totalPages}
            className="px-2 sm:px-3 md:px-4 py-1 sm:py-2 bg-gray-500 text-white text-sm sm:text-base rounded disabled:opacity-50 focus:outline-none transition-colors duration-200 hover:bg-gray-600"
          >
            Next
          </button>
        </div>
      </div>

    </div>
  )
}

export default Home