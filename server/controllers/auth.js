const User = require("../models/User.js")
const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken")

const registerControllers = async (req, res) => {
    try {
        const {
            email,
            password,
            firstName,
            lastName
        } = req.body

        const salt = await bcrypt.genSalt()
        const passwordHash = await bcrypt.hash(password, salt)

        const newUser = new User({
            email,
            password: passwordHash,
            firstName,
            lastName
        })

        const savedUser = await newUser.save()
        res.status(201).json({ message: savedUser })
    } catch (err)
    {
        res.status(500).json({ error: err.message })
    }
}

const loginControllers = async (req, res) => {
    try {
        const maxAge = 3 * 24 * 60 * 60
        const {
            email,
            password
        } = req.body

        const user = await User.findOne({ email: email })
        if (!user) {
            res.status(404).json({ message: "User Not Found!" })
        }

        const checkHashPassword = await bcrypt.compare(password, user.password)
        if (!checkHashPassword) {
            res.status(500).json({ mesage: "Pasword doesn't match" })
        }

        const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
            expiresIn: maxAge
        })

        res.cookie("jwt", token, {
            httpOnly: true,
            maxAge: maxAge * 1000
        })

        delete user.password

        res.status(200).json({ message: "User logged in "+user})
    } catch (err)
    {
        res.status(500).json({ error: err.message })
    }
}

module.exports = {
    registerControllers,
    loginControllers
}