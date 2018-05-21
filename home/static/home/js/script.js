$(document).ready(function(){

$('#myForm').on('submit', function(e){
  $('#myModal').modal('show');
  e.preventDefault();

 });
  
$('a').mouseenter(function() {
 	$(this).css("color", "#5EC5C4");
 });

$('a').mouseleave(function(){
    $(this).css("color", "#4a4a4f");
});

$(".card").mouseenter(function(){
    $(this).add(".cardTitle").css("background-color", "#5EC5C4").css("color", "white");
    $(".btn-default").css("background-color", "white").css("color", "#5EC5C4");
    
});

$(".card").mouseleave(function(){
    $(this).add(".cardTitle").css("background-color", "white").css("color", "#4a4a4f");
    $(".btn-default").css("background-color", "#5EC5C4").css("color", "white");
    $(".cardTitle").css("background-color", "white").css("color", "#5EC5C4")
   
});

$(".categoryCard2").mouseenter(function(){
    $(this).add(".cardTitle").css("background-color", "#5EC5C4").css("color", "white");
    $(".btn-default").css("background-color", "white").css("color", "#5EC5C4");
    
});

$(".categoryCard2").mouseleave(function(){
    $(this).add(".cardTitle").css("background-color", "white").css("color", "#4a4a4f");
    $(".btn-default").css("background-color", "#5EC5C4").css("color", "white");
    $(".cardTitle").css("background-color", "white").css("color", "#5EC5C4")
   
});

});




