const mongoose = require('mongoose')


const RateSchema = new mongoose.Schema({
    stars: Number,
    comment: String,
})

const CakeSchema = new mongoose.Schema({
    baker: String,
    image: String,
    ratings: [RateSchema]
})

module.exports = {
    Cake: mongoose.model('Cake', CakeSchema),
    Rate: mongoose.model('Rate', RateSchema)
}