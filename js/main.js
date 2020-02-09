$(document).ready(function(){
  const fullcirc = $("#full-circ").get();
  const pacman = $("#pacman").get();
  const semicirc = $("#semi-circ").get();
  const qrtrcirc = $("#qrtr-circ").get();
  const arrow = $("#arrow-path").get();
  const $shapeArray = document.querySelectorAll(".shapepath");
  var speakersList = document.querySelectorAll(".speaker");
  var initTL = new TimelineLite();
  var controller = new ScrollMagic.Controller();
  var horizontalScroll = new TimelineMax().to("#js-container", 1, {x: "-50%"});


  var hzScene = new ScrollMagic.Scene({
     triggerElement: "#main-container",
     triggerHook: "onLeave",
     duration: "400%"
   });

  function horizontalControl(x) {
     if (x.matches) { // If media query matches
       hzScene.setPin("#main-container");
       hzScene.setTween(horizontalScroll);
       hzScene.addTo(controller);
     } else {
       horizontalScroll.kill();
     }
   }

 var x = window.matchMedia("(min-width: 768px)");
 horizontalControl(x); // Call listener function at run time
 x.addListener(horizontalControl);// Attach listener function on state changes





  function initAnimation() {
    for(let i=0; i<$shapeArray.length; i++){
      initTL.from($shapeArray[i], 0.4, {opacity: 0});
    }
  }

  function speakerHover() {
    $("#asana").hover(function(){
      $(".asana-img").toggleClass("hidden");
    });
    $("#telus").hover(function(){
      $(".telus-img").toggleClass("hidden");
    });
    $("#allpurpose").hover(function(){
      $(".allpurpose-img").toggleClass("hidden");
    });
    $("#everyday").hover(function(){
      $(".everyday-img").toggleClass("hidden");
    });
    $("#dossier").hover(function(){
      $(".dossier-img").toggleClass("hidden");
    });
    $("#engine").hover(function(){
      $(".engine-img").toggleClass("hidden");
    });
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
  speakerHover();
});
