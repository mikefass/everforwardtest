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

  // Add smooth scrolling to all links in navbar + footer link
  $(".navbar a, footer a[href='#home'], footer a[href='#top']").on(
    "click",
    function (event) {
      // Make sure this.hash has a value before overriding default behavior
      if (this.hash !== "") {
        // Prevent default anchor click behavior
        event.preventDefault();

        // Store hash
        // var hash = this.hash;
        var hash = $(this).attr("hash");

        // Account for Navbar height
        if (hash === "#home" || hash === "#top") {
          var adjustHeight = 350;
        } else if (hash === "#blog" || hash === "/index.html#blog") {
          var adjustHeight = 192;
        } else {
          var adjustHeight = 157;
        }

        // Using jQuery's animate() method to add smooth page scroll
        // The optional number (900) specifies the number of milliseconds it takes to scroll to the specified area
        $("html, body").animate(
          {
            scrollTop: $(hash).offset().top - adjustHeight,
          },
          900
          function () {
            // Add hash (#) to URL when done scrolling (default click behavior)
            window.location.hash = hash;
          }
        );
      } // End if
    }
  );
});