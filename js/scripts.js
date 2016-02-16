//Google Maps
function initMap() {
  var myLatLng = {lat: 42.3817829, lng: -71.1078576};

  var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 4,
    center: myLatLng
  });

  var marker = new google.maps.Marker({
    position: myLatLng,
    map: map,
    title: 'Hello World!'
  });
}



//Document Ready
$(document).ready(function() {
   //Stellar
   $.stellar();
   $('#contact').stellar();


//Tooltips
   $(function () {
      $('[data-tottle="tooltip"]').tooltip();
   });

   $(function () {
      $('item1').tooltip();
   });

//Title bar close
  $(".navbar-nav li a").click(function(event) {
    $(".navbar-collapse").collapse('hide');
  });


//Smooth Scrolling
   var $root = $('html, body');
   $('.navbar-nav a').click(function () {
      var href = $.attr(this, 'href');
      $root.animate({
         scrollTop: $(href).offset().top
      }, 500, function () {
         window.location.hash = href;
      });
      return false;
});

//Event Listeners
   $("#submission").on("click", function () {
      var name = $('#name').val();
      var email = $('#email').val();
      var telly = $('#telly').val();
      var comment = $('#message').val();
      
      console.log(name, email, telly, comment);
         $("#visible-comment").html(comment);
            $("form").hide("slow");

      return false;
   });
   
//Message Box Character Count
   $("#message-box").on("keyup", function() {
      var charCount = $("#message-box").val().length;
      console.log(charCount);
      $("#char-count").html(charCount);
      if (charCount == 0){
         $("#message-box").css("border", "2px solid red");
      }
      else if (charCount > 50) {
         $("#char-count").css("color", "red");
         $("#message-box").css("border", "none");
      }
      else {
         $("#char-count").css("color", "black");
         $("#message-box").css("border", "none");
      }
   });

//Table Row Zebra
   var rows = $(".my-row");
   for(var i=0; i < rows.length; i++) {
      if ( i % 2 === 0) {
         $(rows[i]).css("background-color", "green");
      }
   }

});