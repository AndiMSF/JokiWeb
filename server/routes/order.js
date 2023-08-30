const express = require("express")
const verifyToken = require("../middleware/auth.js")
const orderControllers = require("../controllers/order.js")

const router = express.Router()

router.post("/", verifyToken, orderControllers)

module.exports = router
