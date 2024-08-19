import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Loader from '../component/Loader';
import sampleimg from '../assets/pat-taylor-12V36G17IbQ-unsplash.jpg';


function Product() {


    const params = useParams()
    const [product, setProduct] = useState(null)
    const [isLoading, setIsLoading] = useState(true)
    const [fetchError, setFetchError] = useState(false)
    
    console.log(params.id, "params.id")

    useEffect(() => {
        fetchProduct()
    }, [])

    const fetchProduct = async () => {

        try {
            let result = await fetch(`${import.meta.env.VITE_LOCAL_API_URL}/product/${params.id}`)
            if(!result.ok) {
                setFetchError(true)
            }
            result = await result.json() 
            setProduct(result.product)
            setIsLoading(false)
        } catch (error) {
            setFetchError(true)
        }
    }

    if(isLoading) {
        return (
            <div className="justify-center items-center">
                <Loader />
            </div>
        )
    } else {
        return (
            <div className="flex gap-12 items-center">
                {/* left */}
                <div className="h-80">
                    <img src={sampleimg} style={{height:"100%", width:"100%"}}/>
                </div>

                {/* right */}
                <div className="h-80 border border-red-50">

                </div>
            </div>
        )
    }


  return (
    <div>This is product page</div>
  )
}

export default Product
