var fs = require('fs');
var https = require('https');

fs.writeFile(__dirname+"/index.html",
  "<h1>BLAGSG</h1>",
  (error)=>{
    if(error){
      return console.log(error);
    }else
      return console.log('Congrats!');
  });

var myPhotoLocation = "https://i.imgur.com/5yZLAje.jpg";
https.get(myPhotoLocation, (res) =>{
  res.pipe(fs.createWriteStream(__dirname + '/mydog.jpeg'));
});
