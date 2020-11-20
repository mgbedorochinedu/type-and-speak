const path = require("path")
const express = require("express")
const app = express()

const port = process.env.PORT || 3000

//Define path for Express config
const publicDirPath = path.join(__dirname, "../public")
const viewPath = path.join(__dirname, "../templates/views")

//Setup handlerbars engine and views location
app.set("view engine", "hbs")
app.set("views", viewPath)

//Setup statics directory to server
app.use(express.static(path.join(publicDirPath)))


app.get("/", (req, res) => {
    res.render("index")
})

app.get("*", (req, res) => {
    res.render("404")
})

app.listen(port, () => {
    console.log("Server is up at " + port)
})