//Works Array 
   
var works = [
   {
      title: "First Project",
      pic: "img/redmac.png",
      lnk: "http://www.google.com"
   },
   {
      title: "Second Project",
      pic: "img/yellowmc.png",
      lnk: "http://www.twitter.com"
   },
   {
      title: "Third Project",
      pic: "img/redmac.png",
      lnk: "http://www.minecraft.com"
   },
   {
      title: "Fourth Project",
      pic: "img/yellowmc.png",
      lnk: "http://www.yahoo.com"
   }
];

   // work section
for (var i = 0; i < works.length; ++i ) {
  $("#work").append("\
    <div class='col-sm-6 col-md-3'>\
      <a href='" + works[i].lnk + "' class='work-img'>\
      <img class='img-responsive' src='" + works[i].pic + "'>\
      <span class='info'><p class='proj-title'>"+works[i].title+"</p></span>\
      </a>\
    </div>\
  ");
  var images = $("#work img");
  if(i%2 === 0){
    $(images[i]).css("border", "2px solid DodgerBlue");
  } else {
    $(images[i]).css("border", "2px solid salmon");
  };
};

   //Mouse stuff
   $(".work-img").mouseenter( function(){
      $(".info", this).show();
   }).mouseleave(function() {
       $(".info", this).hide();
   });