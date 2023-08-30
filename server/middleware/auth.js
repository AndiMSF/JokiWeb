const jwt = require("jsonwebtoken")

const verifyToken = async (req, res, next) => {
    try {
        // Check apakah user punya token apa tidak
        let token = req.cookies.jwt
        if (!token) {
            return res.status(404).json({ message: "No Token!" })
        }

        // decoded token berisi data2 user 
        if (token) {
            jwt.verify(token, process.env.JWT_SECRET, (err, decodedToken) => {
                if (err) {
                    res.status(500).json({ error: err.message })
                } else {
                    req.user = decodedToken
                    next()
                }
            })
        }

    } catch (err) {
        res.status(500).json({ error: err.message })
    }
}

module.exports = verifyToken