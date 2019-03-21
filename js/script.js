$(window).on("load", function() {
  $(".loader .inner").fadeOut(500, function() {
    $(".loader").fadeOut(750);
  });
  $(".items").isotope({
    filter: "*",
    animationOptions: {
      duration: 1500,
      easing: "linear",
      queue: false
    }
  });
});

$(document).ready(function() {
  //starting supperslides
  $("#slides").superslides({
    animation: "fade",
    play: 5000,
    pagination: false
  });
  //typed.js animation for text
  var typed = new Typed(".typed", {
    strings: ["Web Developer.^800", "Web Designer.^800", "IT Student.^800"],
    typeSpeed: 80,
    loop: true,
    startDelay: 800,
    showCursor: false
  });
  // owl carousel for skills section
  $(".owl-carousel").owlCarousel({
    loop: false,
    margin: 10,
    dots: true,
    responsive: {
      0: {
        items: 1
      },
      480: {
        items: 2
      },
      768: {
        items: 3
      },
      938: {
        items: 4
      }
    }
  });
  // finding top position of skillsSection
  var skillsTopOffset = $(".skillsSection").offset().top;

  //when window scroll down this code will start
  $(window).scroll(function() {
    if (window.pageYOffset > skillsTopOffset - $(window).height() + 200) {
      $(".chart").easyPieChart({
        easing: "easeInOut",
        barColor: "#fff",
        trackColor: false,
        scaleColor: false,
        lineWidth: 4,
        size: 152,
        onStep: function(from, to, percent) {
          $(this.el)
            .find(".percent")
            .text(Math.round(percent));
        }
      });
    }
  });

  $("[data-fancybox]").fancybox();

  $("#filters a").click(function() {
    $("#filters .current").removeClass("current");
    $(this).addClass("current");

    var selector = $(this).attr("data-filter");
    $(".items").isotope({
      filter: selector,
      animationOptions: {
        duration: 1500,
        easing: "linear",
        queue: false
      }
    });
    return false;
  });
  $("#navigation li a").click(function(e) {
    e.preventDefault();

    var targetElement = $(this).attr("href");
    var targetPosition = $(targetElement).offset().top;
    $("html, body").animate({ scrollTop: targetPosition - 50 }, "slow");
  });

  const nav = $("#navigation");
  const navTop = nav.offset().top;

  $(window).on("scroll", stickyNavigation);

  function stickyNavigation() {
    var body = $("body");

    if ($(window).scrollTop() >= navTop) {
      body.css("padding-top", nav.outerHeight() + "px");
      body.addClass("fixedNav");
    } else {
      body.css("padding-top", 0);
      body.removeClass("fixedNav");
    }
  }
});
