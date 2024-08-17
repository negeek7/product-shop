import React, { useEffect, useState } from 'react'

function Home() {

  const [fetchError, setFetchError] = useState(false)
  const [productList, setProductList] = useState([])

  useEffect(() => {
    fetchData()
  }, [])

  async function fetchData() {
    const result = await fetch('http://localhost:8001/products')
    if(!result.ok) return setFetchError(true)
    else {
      let list = await result.json()
      setProductList(list)
    }
  }

  console.log(productList, "PRODUCTS")

  return (
    <div>
      Product Page
    </div>
  )
}

export default Home