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
    loop: true,
    items: 4,
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
  var statsTopOffset = $(".statsSection").offset().top;
  var countUpFinished = false;
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
    if (
      !countUpFinished &&
      window.pageYOffset > statsTopOffset - $(window).height() + 200
    ) {
      $(".counter").each(function() {
        var element = $(this);
        var endVal = parseInt(element.text());

        element.countup(endVal);
      });

      countUpFinished = true;
    }
  });
  $("[data-fancybox]").fancybox();
});
