import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import SearchSuggestions from './component/SearchSuggestions'

function NavBar() {
    const navigate = useNavigate()
    const [searchTerm, setSearchTerm] = useState('')
    const [suggestions, setSuggestions] = useState([])

    useEffect(() => {
        if (searchTerm.length > 0) {
            setTimeout(() => fetchSuggestions(searchTerm), 2000)
        } else {
            setSuggestions([])
        }
    }, [searchTerm])

    // const fetchSuggestions = async (term) => {
    //     console.log("searching...")
    //     try {
    //         const response = await fetch(`${import.meta.env.VITE_LOCAL_API_URL}/products/search?term=${term}`)
    //         if (!response.ok) {
    //             throw new Error('Failed to fetch suggestions')
    //         }
    //         const data = await response.json()
    //         setSuggestions(data.products)
    //     } catch (error) {
    //         console.error('Error fetching suggestions:', error)
    //         setSuggestions([])
    //     }
    // }

    return (
        <div className="w-full bg-blue-950 py-3 px-24">
            <div className='flex row items-center justify-between'>
                <div className='flex row items-center gap-12'>
                    <p className="text-xl italic text-orange-300 font-semibold cursor-pointer" onClick={() => navigate('/')}>Product Shopcart</p>
                    <div className="relative">
                        <input 
                            className="bg-white rounded-lg py-1 px-2 text-black w-72" 
                            type="text" 
                            placeholder='Search Items...'
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                        />
                        {suggestions.length > 0 && (
                            <SearchSuggestions suggestions={suggestions} onSelect={(product) => {
                                setSearchTerm('')
                                setSuggestions([])
                                navigate(`/product/${product._id}`)
                            }} />
                        )}
                    </div>
                </div>
                <div className='flex row items-center gap-4 text-lg'>
                    <p className="font-semibold cursor-pointer" onClick={() => navigate('/login')}>Login</p>
                    <p className="font-semibold cursor-pointer" onClick={() => navigate('/cart')}>Cart</p>
                </div>
            </div>
        </div>
    )
}

export default NavBar