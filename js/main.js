$(document).ready(function(){
  const fullcirc = $("#full-circ").get();
  const pacman = $("#pacman").get();
  const semicirc = $("#semi-circ").get();
  const qrtrcirc = $("#qrtr-circ").get();
  const arrow = $("#arrow-path").get();
  const $shapeArray = document.querySelectorAll(".shapepath");
  var speakersList = document.querySelectorAll(".speaker");
  var initTL = new TimelineLite();

  function initAnimation() {
    for(let i=0; i<$shapeArray.length; i++){
      initTL.from($shapeArray[i], 0.4, {opacity: 0});
    }
  }

  function initHovers() {
    setTimeout(function(){
      $("#full-circ").hover(function(){
        $("#sub-tickets").toggleClass("hidden");
        $(this).toggleClass("fullhover");
        $(pacman).toggleClass("fullhover");
        $(semicirc).toggleClass("fullhover");
        $(qrtrcirc).toggleClass("fullhover");
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
    }, 1400);
  }

  initAnimation();
  initHovers();


});
