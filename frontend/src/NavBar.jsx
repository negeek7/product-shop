import React from 'react'
import { useNavigate } from 'react-router-dom'

function NavBar() {
    const navigate = useNavigate()

    return (
        <div className="w-full bg-blue-950 py-3 px-24">
            <div className='flex row items-center justify-between'>
                <div className='flex row items-center gap-12'>
                    <p className="text-xl italic text-orange-300 font-semibold cursor-pointer" onClick={() => navigate('/')}>Product Shopcart</p>
                    <input 
                        className="bg-white rounded-lg py-1 px-2 text-black w-72" 
                        type="text" 
                        placeholder='Search Items...'
                    />
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