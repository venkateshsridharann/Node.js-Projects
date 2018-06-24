var express =require("express");
var app = express();
var bodyParser =require("body-parser");

app.use(bodyParser.urlencoded({extended:true}));
app.set("view engine", "ejs");

var campgrounds = 
[
    { name:"mountain creek", image:"https://machabasafaris.com/wp-content/uploads/2017/07/machaba-camp-gallery-16.jpg" },
    { name:"silver park", image:"https://cl9r93gnrb42o3l0v1aawby1-wpengine.netdna-ssl.com/wp-content/uploads/2018/02/Camping.jpg" },
        { name:"mountain creek", image:"https://machabasafaris.com/wp-content/uploads/2017/07/machaba-camp-gallery-16.jpg" },
    { name:"silver park", image:"https://cl9r93gnrb42o3l0v1aawby1-wpengine.netdna-ssl.com/wp-content/uploads/2018/02/Camping.jpg" },
        { name:"mountain creek", image:"https://machabasafaris.com/wp-content/uploads/2017/07/machaba-camp-gallery-16.jpg" },
    { name:"silver park", image:"https://cl9r93gnrb42o3l0v1aawby1-wpengine.netdna-ssl.com/wp-content/uploads/2018/02/Camping.jpg" },
        { name:"mountain creek", image:"https://machabasafaris.com/wp-content/uploads/2017/07/machaba-camp-gallery-16.jpg" },
    { name:"silver park", image:"https://cl9r93gnrb42o3l0v1aawby1-wpengine.netdna-ssl.com/wp-content/uploads/2018/02/Camping.jpg" },
    { name:"water views park", image:"https://www.travelyosemite.com/media/610215/housekeeping-camp_camp-view_1000x667.jpg?anchor=center&mode=crop&width=1000&height=667&rnd=131287804450000000" }
]

app.get("/", function(req, res){
    res.render("landing");
});
app.get("/campgrounds", function(req, res){
    res.render("campgrounds", {campgrounds:campgrounds});
});
app.get("/campgrounds/new", function(req, res) {
   res.render("new.ejs");
});
app.post("/campgrounds", function(req, res){
//   res.send("you hit the post request");
var name = req.body.name;
var image = req.body.image;
var newCamp ={name: name, image: image}
campgrounds.push(newCamp);
res.redirect("/campgrounds");
});

app.listen(process.env.PORT, process.env.IP, function()
{
   console.log("YelpCamp server is running"); 
});