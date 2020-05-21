const cakes = require('../controllers/cakes.js')


module.exports = function(app){
// const cakes = require('../controllers/cakes.js')

app.get('/', (req,res)=>{
    // serves angular page
    // do not res anything
})

app.get("/api/cakes", (req,res) => {
    cakes.findAll (req,res)
});

app.get("/api/cakes/:id", (req,res) => {
    cakes.info(req,res)
});


app.post("/api/cakes", (req,res) => {
    cakes.createCake (req,res)
    });

app.post("/api/rating/:cakeId", (req,res) => {
    cakes.rate (req,res)
    });
}