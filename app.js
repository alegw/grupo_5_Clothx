const express = require ('express')
const app = express();
const path = require ('path');
app.use(express.static("public"));

app.listen(5000, ()=> console.log("Esto fue exitoso"))


app.get("/", function (req,res){
    res.sendFile(path.join(__dirname, "/views/index.html"))}
) //agregue esta linea para que te dirija al home cuando ingresas a la raiz //

app.get("/home", function (req,res){
    res.sendFile(path.join(__dirname, "/views/index.html"))}
)

app.get("/detail1", function (req,res){
    res.sendFile(path.join(__dirname, "/views/productDetail1.html"))}
)
app.get("/detail2", function (req,res){
    res.sendFile(path.join(__dirname, "/views/productDetail2.html"))}
)
app.get("/detail3", function (req,res){
    res.sendFile(path.join(__dirname, "/views/productDetail3.html"))}
)
app.get("/detail4", function (req,res){
    res.sendFile(path.join(__dirname, "/views/productDetail4.html"))}
)
app.get("/detail5", function (req,res){
    res.sendFile(path.join(__dirname, "/views/productDetail5.html"))}
)

app.get("/cart", function (req,res){
    res.sendFile(path.join(__dirname, "/views/productCart.html"))}
)   

app.get("/register", function (req,res){
    res.sendFile(path.join(__dirname, "/views/register.html"))}
)   

app.get("/login", function (req,res){
    res.sendFile(path.join(__dirname, "/views/login.html"))}
)   

app.get("/reestablecer", function (req,res){
    res.sendFile(path.join(__dirname, "/views/reestablecer.html"))}
)   