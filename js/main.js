$(document).ready(function(){

//test
$('#btn1').click(function(){
  $('#test1').text(function(i,originText=""){
   return "Old text: " + originText + " New text: Hello world! (index: " + i + ")";
  });
});

$('#btn2').click(function(){
  $('#test2').html(function(i,originHTML=""){
   return "Old html: " + originHTML + " New html: Hello <b>world!</b> (index: " + i + ")"; 
  });
});

//exo1

$('#btnCheck').click(function(){
  $("textarea").css("border","5px solid red").add("p").css("border","5px solid red");

});

//exo2

$('#btnCheck2').click(function(){
  $("textarea").add("p").add("span").css("background-color","red");

});
//exo3
$('#btnCheck3').click(function(){
  $("p").add("<span>Exercices</span>").appendTo(document.body);
});
//exo4

//exo5
// $("p").last().addClass("w3r_font_color");

//exo6
// $("p").last().addClass("w3r_font_color w3r_background");



//exo7
$('#button1').click(function(){
  $("p").addClass(function(index, currentClass){
    var addedClass;
     if (currentClass ==="w3r_bg_orange")
     {
      addedClass="w3r_font_red ";
     }
     return addedClass;
  });
});

//exo8
$('#button8').click(function(){
  $("p").after("<p>Ajout reussi</p>");
});

//exo11
$( document ).ajaxComplete(function() {
  $( ".log" ).text( "Triggered ajaxComplete handler." );
});

$( ".jquery" ).click(function() {
  $( ".result" ).load( "file:///C:/Users/nkartouby/Desktop/JqueryTraining/exo11.html" );
});
//exo 12 
$(document).ajaxError(function(){
  $(".log12").text("file not present.");
});
$( "button.trigger" ).click(function() {
  $( ".result" ).load( "file:///C:/Users/nkartouby/Desktop/JqueryTraining/exo11.html" );
});


});//END READY

