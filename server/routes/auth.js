const express = require("express")
const {
    loginControllers,
    registerControllers,
} = require("../controllers/auth.js")

const router = express.Router()

router.post("/login", loginControllers)
router.post("/register", registerControllers)

module.exports = router