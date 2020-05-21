// required modules
const express = require("express")
const mongoose = require("mongoose")
mongoose.connect("mongodb://localhost/cakeFundb", {userNewUrlParser:true})

// settings
const app = express()
app.use(express.static(__dirname + '/cakeFun/dist/cakeFun'))
app.use(express.json())
app.use(express.urlencoded({extended:true}));

// importing routes
require('./server/config/routes.js')(app)


app.listen(8000, () => console.log("listening on port 8000. Cakes!"));