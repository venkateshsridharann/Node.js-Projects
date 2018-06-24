var mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/cat_app");

var catSchema =new mongoose.Schema({
    name: String,
    age: Number,
    temperament: String
});

var Cat = mongoose.model("Cat", catSchema);

var kitty = new Cat({
    name : "harrty",
    age: 1,
    temperament: "sleepy"
});

kitty.save(function(err, cat){
    if(err){
        console.log("something went wrong!")
        }
        else{
            console.log("we just saved a cat to the DB :")
            // console.log(cat);
        }
});

Cat.find({}, function(err, cats){
    if(err){
        console.log("Oh no error")
    }
    else{
        console.log("All the cats ")
        console.log(cats)
    }
})