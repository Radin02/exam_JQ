


$(document).ready(function(){
$("#name").keyup(function(){
var name=$("#name").val();

if (name=="admin"){
$("#user_name").text("valid user").css({"color":"green"});
}
else {$("#user_name").text("invalid user").css({"color":"red"});
}
});

});



$(document).ready(function(){
$("#password").keyup(function(){

var pass=$("#password").val();

if (pass=="admin"){
$("#pass").text("valid password").css({"color":"green"});
}
else {$("#pass").text("invalid password").css({"color":"red"});
}
});

});



$(document).ready(function(){
$("#submit").click(function(){
if (name=="admin" && pass=="admin") {
$("#submit").text("valid user").css({"color":"green"});}
else {$("#submit").text("Invalid user: please recheck your input").css({"color":"red"});
}
});
});

$(document).ready(function(){
$("#reset").click(function(){

$("#name").val("");
$("#password").val("");
});
});


// for limited_input

$(document).ready(function(){
var max_text=160;
$("#textarea_remaining").text(max_text+""+" characters remaining");




$("#textarea").keyup(function(){

var text_length=$("#textarea").val().length;
var text_remains=max_text-text_length;



$("#textarea_remaining").text(text_remains+""+" characters remaining");

if (text_remains< 0) {
	$("#textarea_remaining").css({"color":"red"});
} 

else {
	$("#textarea_remaining").css({"color":"green"});
}

});   

});



$(document).ready(function(){
  

$('.owl-carousel').owlCarousel({
    loop:true,
    margin:20,
    nav:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:5
        }
    }
});

$(document).ready(function(){
  $( function() {
    $( "#datepicker" ).datepicker();
    });
});


 $('.lightbox').option({
    'resizeDuration': 2000,
  'wrapAround': true
  });
});



//$(document).ready(function(){
//$('.parallax-window').parallax({image.jpg'});
//});

