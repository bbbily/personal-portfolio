$(document).ready(function() {
  $(".narrow").on("click", function() {
    $("body").animate({scrollTop: $(".profile").offset().top}, 600);
  })
  $("#goProfile").on("click", function() {
    $("body").animate({scrollTop: $(".profile").offset().top}, 600);
  })
  $("#goProjects").on("click", function() {
    $("body").animate({scrollTop: $(".projects").offset().top}, 600);
  })
  $("#goAbilities").on("click", function() {
    $("body").animate({scrollTop: $(".abilities").offset().top}, 600);
  })
  $("#goEducation").on("click", function() {
    $("body").animate({scrollTop: $(".education").offset().top}, 600);
  })
  $("#goContact").on("click", function() {
    $("body").animate({scrollTop: $(".contact").offset().top}, 600);
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
