const {Cake} = require('../models/cakes')
const {Rate} = require('../models/cakes')



module.exports = {

    findAll: ((req,res) => {
        Cake.find({})
            .then(data => {
                res.json(data)
            })
            .catch(err => res.json(err))
    }),

    createCake: ((req,res) => {
        const cake = new Cake();
        cake.baker = req.body.baker
        cake.image = req.body.image
        cake.save()  
            .then(newCake => {
                res.json(newCake)
            })
            .catch(err => res.json(err))
        }),

    rate: ((req,res) => {
        // console.log(req.params,"**********",req.body)
        const rate = new Rate();
        rate.stars = req.body.stars
        rate.comment = req.body.comment
        rate.save()  
            .then(addRating => {
                console.log(req.params.cakeId)
                Cake.findOne({_id: req.params.cakeId})
                .then(cake => {
                    console.log(cake)
                    cake.ratings.push(addRating)
                    cake.save()
                    .then(data =>{
                        res.json(data)
                    })
                })
                    
            })
            .catch(err => res.json(err))
        })
    
    }