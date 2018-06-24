//Require functions
var express     = require("express"),
    app         = express(),
    bodyParser  = require("body-parser"),
    mongoose    = require("mongoose");

//express and using body-parser
app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({extended:true}));
// connecting to the mongoDB
mongoose.connect("mongodb://localhost/yelp_camp");

//Schema Setup
var campgroundSchema =new mongoose.Schema({
    name: String, 
    image: String,
    description: String
});
//defining the model for the schema
var Campground = mongoose.model("Campground", campgroundSchema);

// used to initially set up data in db 
// Campground.create({
//     name:"silver park",
//     image:"https://cl9r93gnrb42o3l0v1aawby1-wpengine.netdna-ssl.com/wp-content/uploads/2018/02/Camping.jpg",
//     description: "this is the decription"
// }, function(err, campground)
//     {
//         if (err) {
//             console.log(err);
//         }
//         else{
//             console.log("Added campground");
//             console.log(campground);
//         }
// });


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
    Campground.findById(req.params.id, function(err, foundCampground)
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