const menuToggle = document.getElementById("menuToggle");
const mobileMenu = document.getElementById("mobileMenu");
const closeMenu = document.getElementById("closeMenu");

let lastScrollY = window.scrollY;
const navbar = document.querySelector(".navbar");
let isNavbarVisible = true;

window.addEventListener("scroll", () => {
  const currentScrollY = window.scrollY;

  // If the scroll position is more than 50px
  if (currentScrollY > 480) {
    navbar.style.top = "0";
    navbar.classList.add("nav-active");
  } else if (currentScrollY > 250) {
    navbar.style.top = "-123px";
    
  } else {
    navbar.style.top = "0";
    navbar.classList.remove("nav-active");
  }

  lastScrollY = currentScrollY;
});

menuToggle.addEventListener("click", () => {
  mobileMenu.classList.add("open");
});

closeMenu.addEventListener("click", () => {
  mobileMenu.classList.remove("open");
});

// Toggle Submenu
const submenuItems = document.querySelectorAll(
  ".has-submenu > a, .has-submenu-child > a"
);

submenuItems.forEach((item) => {
  item.addEventListener("click", (e) => {
    e.preventDefault(); // Prevent page reload
    const parent = item.parentElement;

    // Toggle 'open' class to show/hide the submenu
    parent.classList.toggle("open");

    // Toggle "+" to "-" for parent or submenu
    const span = item.querySelector("span");
    if (parent.classList.contains("open")) {
      span.textContent = "-"; // Change "+" to "-"
    } else {
      span.textContent = "+"; // Change back to "+"
    }
  });
});

// Get all the tab buttons and panels
const tabButtons = document.querySelectorAll(".tab-btn");
const tabPanels = document.querySelectorAll(".tab-panel");

// Add click event to each button
tabButtons.forEach((button) => {
  button.addEventListener("click", () => {
    // Remove the active class from all buttons and panels
    tabButtons.forEach((btn) => btn.classList.remove("active"));
    tabPanels.forEach((panel) => panel.classList.remove("active"));

    // Add the active class to the clicked button and the corresponding panel
    button.classList.add("active");
    const targetPanel = document.getElementById(
      button.getAttribute("data-target")
    );
    targetPanel.classList.add("active");
  });
});

$(document).ready(function () {
  $(".slider-section").owlCarousel({
    items: 1,
    loop: true,
    autoplay: true,
    autoplayTimeout: 5000,
    autoplayHoverPause: true,
    dots: false, // Disable dots
    nav: true, // Enable navigation
    navText: [
      '<i class="fa-solid fa-angle-left"></i>',
      '<i class="fa-solid fa-angle-right"></i>',
    ],
  });

  // Handle animation on slide change
  $(".owl-carousel").on("changed.owl.carousel", function () {
    // Remove active class from all text
    $(".slider-content").removeClass("active");

    // Add active class to current slide's content
    setTimeout(() => {
      $(".owl-item.active .slider-content").addClass("active");
    }, 200); // Delay to sync with slide transition
  });

  // Add active class to the first slide's content initially
  $(".owl-carousel .owl-item.active .slider-content").addClass("active");
});

const tabs = document.querySelectorAll(".tab-trending");
const contents = document.querySelectorAll(".tab-trending-content");

tabs.forEach((tab) => {
  tab.addEventListener("click", () => {
    // Remove active class from all tabs and contents
    tabs.forEach((t) => t.classList.remove("active"));
    contents.forEach((c) => c.classList.remove("active"));

    // Add active class to the clicked tab and corresponding content
    tab.classList.add("active");
    document.getElementById(tab.dataset.tab).classList.add("active");
  });
});

$(document).ready(function () {
  $("#demo2").owlCarousel({
    loop: true,
    margin: 10,
    responsiveClass: true,
    responsive: {
      0: {
        items: 1,
        nav: true,
      },
      600: {
        items: 1,
        nav: false,
      },
      1000: {
        items: 2,
        nav: true,
        loop: false,
        margin: 20,
      },
    },
  });
});


if(AOS != "null"){
    // Initialize AOS (Animate on Scroll)
    AOS.init({
        duration: 1000,  // Animation duration
        once: true       // Only animate once
      });
}
