import express from 'express'
import Product from '../../models/Products.js'

const router = express.Router()



// Get all products
router.get('/products', async (req, res) => {
    try {
        const totalProducts = await Product.countDocuments()
        console.log(totalProducts, "TOTAL PRODUCTS")

        const page = req.query.page ? parseInt(req.query.page) : 1
        const pageSize = req.query.pageSize ? parseInt(req.query.pageSize) : 6
        const totalPages = Math.ceil(totalProducts / pageSize)

        let skip = (page - 1) * pageSize 

        let products = await Product.find().skip(skip).limit(pageSize)
        res.status(200).json({products, totalPages})
    } catch (error) {
        res.status(400).send("Something went wrong, try again!")
        console.log("Error fetching products", error)
    }
})

// Get one product with route paramter (:id)
router.get('/product/:id', async (req, res) => {
    console.log(req.params, "req.params")
    let productid = req.params.id
    if (!productid) return res.status(404).send("No product id found.")
    try {
        const product = await Product.findOne({ _id: productid })
        if (!product) return res.status(400).json({ message: "Product not found" })
        res.status(200).json({ product, status: "Success" })
    } catch (error) {
        res.status(400).send("Something went wrong, try again!")
        console.log("Error fetching products", error)
    }
})


router.get('/products/search', async (req, res) => {
    console.log(req.query)
    const searchTerm = req.query.term
    try {
        if(!searchTerm) return res.status(400).send("Provide search term")
    
        let products = await Product.find({name: {$regex: searchTerm, $options: 'i'}})
        res.status(200).json({products, status: "Success"})
    } catch (error) {
        res.status(500).send("Something went wrong")
        console.log("Error fetching products", error)
    }

})

router.get('/', (req, res) => {
    res.send("HELLOO!!")
})


export default router;