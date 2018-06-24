//Require functions
var express     = require("express"),
    app         = express(),
    bodyParser  = require("body-parser"),
    Campground  = require("./models/campground"),
    mongoose    = require("mongoose"),
    seedDB      = require("./seeds");
    

//express and using body-parser

app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({extended:true}));
// connecting to the mongoDB
mongoose.connect("mongodb://localhost/yelp_camp");
seedDB();


app.get("/", function(req, res)
{
    res.render("landing");
});

app.get("/campgrounds", function(req, res)
{
    Campground.find({}, function(err, allcampgrounds)
    {
        if(err){
            console.log(err);
        }else{
        res.render("index", {campgrounds:allcampgrounds});      
        }
    });
});

app.get("/campgrounds/new", function(req, res) {
   res.render("new.ejs");
});

app.post("/campgrounds", function(req, res){
//   res.send("you hit the post request");
    var name = req.body.name;
    var desc = req.body.desc;
    var image = req.body.image;
    var newCamp ={name: name, image: image, description:desc}
//Create a new campground and save to DB
    Campground.create(newCamp, function(err, newlycreatedcampground){
        if(err){
            console.log(err);
        }else{
            res.redirect("/campgrounds");       
        }
    });
});
//SHOW -- shows more info about the campground
app.get("/campgrounds/:id", function(req, res)
{  
    Campground.findById(req.params.id).populate("Comments").exec(function(err, foundCampground)
    {
    if(err){
        console.log(err);
    }
    else{
    res.render("show", {campground: foundCampground});    
    }
    });
});



app.listen(process.env.PORT, process.env.IP, function()
{
   console.log("YelpCamp server is running"); 
});