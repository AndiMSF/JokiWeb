const express = require("express")
const bodyParser = require("body-parser")
const mongoose = require("mongoose")
const dotenv = require("dotenv")
const cookieParser = require("cookie-parser")
const session = require("express-session")
// Routes
const authRoutes = require("./routes/auth.js")
const orderRoutes = require("./routes/order.js")

const app = express()
dotenv.config()
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())
app.use(cookieParser())
app.use(session({
    secret: process.env.SESSION_SECRET,
    cookie: { maxAge: 60000 },
    saveUninitialized: false,
    resave: false
}))

// MongoDB Setup
const connectDatabase = async (req, res) => {
    try {
        const conn = await mongoose.connect('mongodb+srv://'+process.env.DB_USERNAME+':'+process.env.DB_PASSWORD+'@cluster0.vqcsdra.mongodb.net/JokiWeb',
        {
            useNewUrlParser: true,
            useUnifiedTopology: true
        })
        console.log('Database Connected '+conn.connection.host);
    } catch {
        console.log(err);
    }
}

app.use("/auth", authRoutes)
app.use("/order", orderRoutes)

const PORT = 8000
connectDatabase().then(() => {
    app.listen(PORT, function(){
        console.log("Server berjalan di port "+PORT);
    })
})

