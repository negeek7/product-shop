import React, { useCallback, useEffect, useMemo, useState } from 'react'
import useFetch from '../hooks/useFetch'

function Home() {

  const [productList, setProductList] = useState([])
  const [pageNum, setPageNum] = useState(1)
  const [totalPages, setTotalPages] = useState(null)
  const [isFetchError, setIsFetchError] = useState(false)

  console.log(productList)
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
    <div>


      <button
        onClick={() => handlePagination('previous')}
      >
        Previous
      </button>

      <button
        onClick={() => handlePagination('next')}
      >
        Next
      </button>


    </div>
  )
}

export default Home