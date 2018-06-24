function average (num) {
     var sum =0, aveg=0;
     for (var i=0; i<num.length; i++)
     {sum= sum + num[i];}
     aveg = Math.round(sum/num.length);
     console.log(aveg);
     return aveg;
} 

var scores = [70,60,90,80];
average(scores);
