var fake = require("faker");


console.log("===================\nWelcome to my Shop\n====================");
for(var i =0; i<10; i++ )
{
    console.log( fake.commerce.productName(i) + " -- $"+ fake.commerce.price(i) );
}