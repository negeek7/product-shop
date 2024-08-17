import express from 'express'
import Product from '../../models/Products.js'

const router = express.Router()



// Get all products
router.get('/products', async (req, res) => {
    try {
        const products = await Product.find()
        console.log(products, "products")
        if (products) {
            res.status(200).json({ products, status: "Success" })
        } else {
            res.status(400).send("Something went wrong, try again!")
        }
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
        const product = await Product.findOne({ id: productid })
        if (!product) return res.status(400).json({ message: "Product not found" })
        res.status(200).json({ product, status: "Success" })
    } catch (error) {
        res.status(400).send("Something went wrong, try again!")
    }
})

router.get('/', (req, res) => {
    res.send("HELLOO!!")
})


export default router;