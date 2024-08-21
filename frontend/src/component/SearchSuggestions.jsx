import React from 'react'

function SearchSuggestions({ suggestions, onSelect }) {
    return (
        <div className="absolute z-10 w-full bg-white mt-1 rounded-lg shadow-lg">
            {suggestions.map((product) => (
                <div
                    key={product._id}
                    className="flex items-center p-2 hover:bg-gray-100 cursor-pointer"
                    onClick={() => onSelect(product)}
                >
                    <img
                        src={product.images[0] || 'placeholder-image-url'}
                        alt={product.name}
                        className="w-10 h-10 object-cover rounded-md mr-2"
                    />
                    <span className="text-black">{product.name}</span>
                </div>
            ))}
        </div>
    )
}

export default SearchSuggestions