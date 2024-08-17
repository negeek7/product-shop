import { Schema, model} from "mongoose";

const ProductSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    price: {
        type: Number,
        required: true,
    },
    discountedPrice: Number,
    isDiscounted: Boolean,
    features: Array,
    images: Array,
    isBestSeller: Boolean
})

const Product = model('product', ProductSchema) 

export default Product

// _id
// name
// price
// discountedPrice
// isDiscounted
// features
// images
// isBestSeller