const mongoose = require("mongoose")

const UserSchema = new mongoose.Schema(
    {
        email: {
            type: String,
            required: true,
            max: 50,
            unique: true,
        },
        password: {
            type: String,
            required: true,
            min: 6,
        },
        order: {
            type: Array,
            default: [],
        },
        fullName: {
            type: String,
            required: true,
            min: 2,
            max: 50,
        },     
    },{timestamps: true}
)

const User = mongoose.model("User", UserSchema)
module.exports = User