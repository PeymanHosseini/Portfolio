$(document).ready(function() {
  $("#slides").superslides({
    animation: "fade",
    play: 5000,
    pagination: false
  });

  var typed = new Typed(".typed", {
    strings: ["Web Developer.^800", "Web Designer.^800", "IT Student.^800"],
    typeSpeed: 80,
    loop: true,
    startDelay: 800,
    showCursor: false
  });
});
