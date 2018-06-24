var mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/blog_demo");


//POST -- title, content
var postSchema = new mongoose.Schema({
    title: String,
    content:String
});
var Post = mongoose.model("Post", postSchema);

//USER - email , name
var userSchema = new mongoose.Schema({
   email: String,
   name: String,
   posts: [postSchema]
});
var User = mongoose.model("User", userSchema);


//  var newUser = new User({
//     email: "james@franko.edu",
//     name: "James Franko"
//  });
 
//  newUser.posts.push({
//      title:"next movie",
//      content: "the fantastic amigo"
//  })
 
//  newUser.save(function(err, user){
//      if(err)
//      {console.log(err);}
//      else
//      {console.log(user);}
//  });

// var newPost = new Post({
//     title: "I am new",
//     content:"I am new on Facebook"
// });

// newPost.save(function(err, post){
//     if(err)
//      {console.log(err);}
//      else
//      {console.log(post);}
// });



User.findOne({name:"James Franko"}, function(err, user)
{
    if(err)
     {console.log(err);}
     else
     {
         user.posts.push(
            { 
                 title:"movie after that",
                 content:"spiderman 3"
            });
         
     }
     
     user.save(function(err, user){
     if(err)
     {console.log(err);}
     else
     {console.log(user);}
 });
});





