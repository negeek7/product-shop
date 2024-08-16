import express from 'express'

const router = express.Router()

router.get('/products', (req, res) => {
    res.send("This is a product route")
})


router.get('/products', (req, res) => {
})


export default router;