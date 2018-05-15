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
    $(this).css("background-color", "#5EC5C4").css("color", "white");
});

$(".card").mouseleave(function(){
    $(this).css("background-color", "white").css("color", "#4a4a4f");
});
});





