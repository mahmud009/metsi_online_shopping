$(function() {
  //Nav bar scroll behaviour

  $(window).scroll(() => {
    if ($(window).scrollTop() > 650) {
      $("header").addClass("header-scrolled");
    } else {
      $("header").removeClass("header-scrolled");
    }
  });

  //Active section nav link

  let navItem = $("nav ul li a");
  let sectionInfo = Array.prototype.map.call(navItem, m => {
    let navLink = m;
    let id = m.hash;
    let startPx = $(id)[0].offsetTop;
    return { id, startPx, navLink };
  }); // array of section object

  $(window).on("scroll load", () => {
    let windowPosition = $(window)[0].pageYOffset;
    let active = sectionInfo.filter(m => {
      return m.startPx - windowPosition <= 400;
    });
    let lastItem = active[active.length - 1];
    navItem.removeClass("active");

    $(lastItem.navLink).addClass("active");
  });
});

// Nav toggler click event

$(".nav-toggler").click(e => {
  $("header").toggleClass("nav-opened");
});

$(".nav-wrapper li a").click(() => {
  $("header").removeClass("nav-opened");
});
