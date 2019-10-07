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

});//END READY

