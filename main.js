$(function() {
  $(window).scroll(() => {
    if ($(window).scrollTop() > 80) {
      $("header").addClass("header-scrolled");
    } else {
      $("header").removeClass("header-scrolled");
    }
  });
});
