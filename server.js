// Imports
const express = require("express")
const app = express()
const port = process.env.port || 3000


// Static Files
app.use(express.static("public"))
app.use("/css", express.static(__dirname + "public/css"))
app.use("/js", express.static(__dirname + "public/js"))


app.use(express.urlencoded({extended: false}))


// Set Views
app.set("views", "./views")
app.set("view engine", "ejs")


// Sending Files on Request
app.post("/newsfeed", function(req, res){
    if(req.body.userName == 'bishway' && req.body.userPass == 1234){
        res.render("newsfeed")
    }
    
    else{
        res.send(`
            Invalid user.
            <a href="/"> Back to homepage </a>
        `)
    }
})


app.get("/", function(req, res) {
    res.render("index")
})


// Listens
app.listen(port, function(req, res) {
    console.log(`Server is connected on ${port}`)
})