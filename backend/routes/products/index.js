import express from 'express'
import Product from '../../models/Products.js'

const router = express.Router()



// Get all products
router.get('/products', async (req, res) => {
    try {
        const products = await Product.find()
        const pageNum = req.query.pageNum ? parseInt(req.query.pageNum) : 1
        const pageSize = req.query.pageSize ? parseInt(req.query.pageSize) : 6
        console.log(pageSize, pageNum, "pageSizepageSize")
        if(pageSize && pageNum) {
            let startIndex = (pageNum - 1) * pageSize
            let endIndex = (pageNum - 1) * pageSize
        }
        if (!products) return res.status(400).send("Something went wrong, try again!")
        res.status(200).json({ products, status: "Success", length: products.length})
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

router.get('/', (req, res) => {
    res.send("HELLOO!!")
})


export default router;