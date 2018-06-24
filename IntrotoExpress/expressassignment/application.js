var express = require("express");
var app = express();
var animal;

app.get("/", function(req, res){
    res.send("Hi there welcome to my assignment");
});

app.get("/speak/:animal", function(req, res)
{
    var animals = req.params.animal;
    
    if(animals == 'pig' || animal == 'Pig')
        {res.send("The Pig says \"Oink\"");}
        
    else if(animals == 'cow' || animal == 'Cow')
        {res.send("The Cow says \"Moo\"");}
        else if(animals == 'dog' || animal == 'Dog')
        {res.send("The Dog says \"Woof woof\"");}
});


app.get("/repeat/:word/:count", function(req, res){
    var word = req.params.word;
    var count =  parseInt(req.params.count);
    var message = "";
    for(var i = 0; i<count; i++)
    {
          message += " " + word;
    }
    res.send(message);
});

app.get("", function(req, res)
{
    res.send("Page doesnt exist! WHat are you doing with your life");
});


app.listen(process.env.PORT,process.env.IP);