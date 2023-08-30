const User = require("../models/User.js")
const mongoose = require("mongoose")


const orderControllers = (req, res) => {
    try {
        const userId = req.user.id
        const orderUser = {
            _id: new mongoose.Types.ObjectId(),
            rankNow: req.body.rankNow,
            rankTo: req.body.rankTo,
            payment: req.body.payment,
            noTelp: req.body.noTelp,
        }
        User.findById({ _id: userId })
        .exec()
        .then((user) => {
            if (user) {
                console.log(user);
                user.order.push(orderUser)
                user.save()
                .then(() => {
                    res.status(200).json({ message: "You have ordered successfully..." })
                })
            }
        })

    } catch (err) {
        res.status(500).json({ error: err.message })
    }
}

module.exports = orderControllers