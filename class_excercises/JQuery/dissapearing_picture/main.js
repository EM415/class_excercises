$(document).ready(function(){

  $("gif").click(function(){
    $(this).css("visibility","hidden");
  });

  $("#reload").click(function(){
    $("gif").css("visibility","visible")
    });

});
