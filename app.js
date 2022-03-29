const express = require ('express')
const app = express();
const path = require ('path');
app.use(express.static("public"));

app.listen(5000, ()=> console.log("Esto fue exitoso"))


app.get("/home", function (req,res){
    res.sendFile(path.join(__dirname, "/views/index.html"))}
)

app.get("/detail", function (req,res){
    res.sendFile(path.join(__dirname, "/views/productDetail.html"))}
)

app.get("/cart", function (req,res){
    res.sendFile(path.join(__dirname, "/views/productCart.html"))}
)   