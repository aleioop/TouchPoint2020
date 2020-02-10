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

 var x = window.matchMedia("(min-width: 1024px)");
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
  $("#full-circ, #pacman, #semi-circ, #qrtr-circ").mouseover(function(){
    $("#sub-header").removeClass("hidden");
  });

  $("#full-circ, #pacman, #semi-circ, #qrtr-circ").mouseleave(function(){
    $("#sub-header").addClass("hidden");
  });

  function initHovers() {
    setTimeout(function(){
      $("#full-circ").hover(
        function(){
          $(this).addClass("fullhover");
          $(pacman).addClass("fullhover");
          $(semicirc).addClass("fullhover");
          $(qrtrcirc).addClass("fullhover");
          $("#sub-header").html("buy tickets");
        },
        function(){
          $(this).removeClass("fullhover");
          $(pacman).removeClass("fullhover");
          $(semicirc).removeClass("fullhover");
          $(qrtrcirc).removeClass("fullhover");
          $("#sub-header").html("");
        }
    );

      $("#pacman").hover(
        function(){
          $(this).addClass("pachover");
          $(fullcirc).addClass("pachover");
          $(semicirc).addClass("pachover");
          $(qrtrcirc).addClass("pachover");
          $("#sub-header").html("interview");
        },
        function(){
          $(this).removeClass("pachover");
          $(fullcirc).removeClass("pachover");
          $(semicirc).removeClass("pachover");
          $(qrtrcirc).removeClass("pachover");
          $("#sub-header").html("");
        }
    );

      $("#semi-circ").hover(
        function(){
          $(this).addClass("semihover");
          $(fullcirc).addClass("semihover");
          $(pacman).addClass("semihover");
          $(qrtrcirc).addClass("semihover");
          $("#sub-header").html("volunteer");
        },
        function(){
          $(this).removeClass("semihover");
          $(fullcirc).removeClass("semihover");
          $(pacman).removeClass("semihover");
          $(qrtrcirc).removeClass("semihover");
          $("#sub-header").html("");
        }
      );

      $("#qrtr-circ").hover(
        function(){
          $(this).addClass("qrtrhover");
          $(pacman).addClass("qrtrhover");
          $(semicirc).addClass("qrtrhover");
          $(fullcirc).addClass("qrtrhover");
          $("#sub-header").html("more info");
        },
        function(){
          $(this).removeClass("qrtrhover");
          $(pacman).removeClass("qrtrhover");
          $(semicirc).removeClass("qrtrhover");
          $(fullcirc).removeClass("qrtrhover");
          $("#sub-header").html("");
        }
    );
    }, 1400);
  }

  initAnimation();
  initHovers();
  speakerHover();
});
