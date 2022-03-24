// Collapse navbar hamburger menu on click
const navLinks = document.querySelectorAll(".nav-item");
const menuToggle = document.getElementById("efNavbar");
const bsCollapse = new bootstrap.Collapse(menuToggle, { toggle: false });
navLinks.forEach((l) => {
  l.addEventListener("click", () => {
    bsCollapse.toggle();
  });
});

// Scroll page to ID clicked
$(document).ready(function () {
  // Initialize Tooltip
  $('[data-toggle="tooltip"]').tooltip();

  jQuery(function ($) {
    $(
      '.navbar a[href*="#"]:not([href="#"]), footer a[href*="#"]:not([href="#"])'
    ).click(function () {
      var target = $(this.hash);
      // Account for Navbar height
      if (target.selector === "#home" || target.selector === "#top") {
        var height = 350;
      } else if (target.selector === "#blog") {
        var height = 195;
      } else if (target.selector === "#about") {
        var height = 208;
      } else {
        var height = 157;
      }

      $("html,body")
        .stop()
        .animate(
          {
            scrollTop: target.offset().top - height,
          },
          900
        );
    });
    if (location.hash) {
      var id = $(location.hash);
      // Account for Navbar height
      if (id.selector === "#home" || id.selector === "#top") {
        var height = 350;
      } else if (id.selector === "#blog") {
        var height = 195;
      } else if (id.selector === "#about") {
        var height = 208;
      } else {
        var height = 157;
      }
    }
    $(window).load(function () {
      if (location.hash) {
        $("html,body").animate({ scrollTop: id.offset().top - height }, 900);
      }
    });
  });
});
