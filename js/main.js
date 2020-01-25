$(document).ready(function(){
  const fullcirc = $("#full-circ").get();
  const pacman = $("#pacman").get();
  const semicirc = $("#semi-circ").get();
  const qrtrcirc = $("#qrtr-circ").get();
  var speakersList = document.querySelectorAll(".speaker");

  $("#full-circ").hover(function(){
    $(this).toggleClass("fullhover");
    $(pacman).toggleClass("fullhover");
    $(semicirc).toggleClass("fullhover");
    $(qrtrcirc).toggleClass("fullhover");
    $("#sub-tickets").toggleClass("hidden");
  });

  $("#pacman").hover(function(){
    $(this).toggleClass("pachover");
    $(fullcirc).toggleClass("pachover");
    $(semicirc).toggleClass("pachover");
    $(qrtrcirc).toggleClass("pachover");
    $("#sub-interviews").toggleClass("hidden");
  });

  $("#semi-circ").hover(function(){
    $(this).toggleClass("semihover");
    $(fullcirc).toggleClass("semihover");
    $(pacman).toggleClass("semihover");
    $(qrtrcirc).toggleClass("semihover");
    $("#sub-volunteer").toggleClass("hidden");
  });

  $("#qrtr-circ").hover(function(){
    $(this).toggleClass("qrtrhover");
    $(pacman).toggleClass("qrtrhover");
    $(semicirc).toggleClass("qrtrhover");
    $(fullcirc).toggleClass("qrtrhover");
    $("#sub-info").toggleClass("hidden");
  });

  for(let i=0; i<speakersList.length; i++){
    $(speakersList[i]).hover(function(){
      console.log("word");
      $(this).find("subtitle").toggleClass("invisible");
    });
  }

});
