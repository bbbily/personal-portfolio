$(document).ready(function() {
  $(".narrow").on("click", function() {
    $("html, body").animate({scrollTop: $(".profile").offset().top}, 600);
  })
  $("#goProfile").on("click", function() {
    $("html, body").animate({scrollTop: $(".profile").offset().top}, 600);
  })
  $("#goProjects").on("click", function() {
    $("html, body").animate({scrollTop: $(".projects").offset().top}, 600);
  })
  $("#goAbilities").on("click", function() {
    $("html, body").animate({scrollTop: $(".abilities").offset().top}, 600);
  })
  $("#goEducation").on("click", function() {
    $("html, body").animate({scrollTop: $(".education").offset().top}, 600);
  })
  $("#goContact").on("click", function() {
    $("html, body").animate({scrollTop: $(".contact").offset().top}, 600);
  })

  $(".projects-main").find("a").mouseover(function() {
    $(this).find(".projects-overlay").fadeIn("fast", function() {
      //Stuff to do *after* the animation takes place
    })
    $(this).find("h4").fadeIn("fast", function() {
      //Stuff to do *after* the animation takes place
    })
    $(this).find("hr").css({"width": "100%", "opacity": "1"});
    $(this).find("p").css({"opacity": "1", "transform": "translateX(0)"});
    $(this).find("img").css({"transform": "translateX(10px)"})
  })

  $(".projects-main").find("a").mouseleave(function() {
    $(this).find(".projects-overlay").fadeOut("fast", function() {
      //Stuff to do *after* the animation takes place
    })
    $(this).find("h4").fadeOut("fast", function() {
      //Stuff to do *after* the animation takes place
    })
    $(this).find("hr").css({"width": "0", "opacity": "0"});
    $(this).find("p").css({"opacity": "0", "transform": "translateX(100%)"});
    $(this).find("img").css({"transform": "translateX(0px)"})
  })


  $window = $(window);

  $window.scroll(function() {
    window.requestAnimationFrame(parallax);
  })

  function parallax() {
    wScroll = $(this).scrollTop();
    var reset = function() {
      $("nav").find("a").css("background-color", "rgb(34, 34, 34)");
    }

    if (wScroll > $(".profile").offset().top - 70)
      $("nav").css({
        "position": "fixed",
        "top": "70px"
      })
    else
      $("nav").css({
        "position": "absolute",
        "top": "100%"
      })

    if (wScroll < $(".projects").offset().top) {
      reset();
      $("#goProfile").css("background-color", "#22A39F");
    }
    else if (wScroll >= $(".projects").offset().top && wScroll < $(".abilities").offset().top) {
      reset();
      $("#goProjects").css("background-color", "#22A39F");
    }
    else if (wScroll >= $(".abilities").offset().top && wScroll < $(".education").offset().top) {
      reset();
      $("#goAbilities").css("background-color", "#22A39F");
    }
    else if (wScroll >= $(".education").offset().top && wScroll < $(".contact").offset().top - 30) {
      reset();
      $("#goEducation").css("background-color", "#22A39F");
    }
    else if (wScroll >= $(".contact").offset().top - 30) {
      reset();
      $("#goContact").css("background-color", "#22A39F");
    }

  }
})
