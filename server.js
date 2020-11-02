// Imports
const express = require("express")
const app = express()
const port = process.env.port || 3000


// Static Files
app.use(express.static("public"))
app.use("/css", express.static(__dirname + "public/css"))
app.use("/js", express.static(__dirname + "public/js"))


// Set Views
app.set("views", "./views")
app.set("view engine", "ejs")


// Sending Files on Request
app.post("/newsfeed", function(req, res){
    res.render("newsfeed")
})

app.get("/newsfeed", function(req, res){
    res.render("newsfeed")
})

app.get("/", function(req, res) {
    res.render("index")
})


// Listens
app.listen(port, function(req, res) {
    console.log(`Server is connected on ${port}`)
})