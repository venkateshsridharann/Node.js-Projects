var express = require("express");
var app = express();

app.use(express.static("public"));
app.set("view engine", "ejs");

app.get("/", function(req, res){
    res.render("home.ejs"); 
});

app.get("/dogs/:thing", function(req, res){
    var thing2 = req.params.thing;
    res.render("dogs.ejs", {thing3 : thing2});
});

app.get("/posts", function(req,res){
    var post2 = [
            { title:"this is a post like it", author: "nomad"},
            { title:"this is Spartaaa", author: "anomas"},
            { title:"post like no other", author: "lewis"}
        ];
    res.render("posts.ejs", { post3 : post2});
    
});
        
app.listen(process.env.PORT, process.env.IP)