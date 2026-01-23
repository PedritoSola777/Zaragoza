document.addEventListener("DOMContentLoaded", () => {

  /* =============================
     ELEMENTS
  ============================= */

  const burger = document.getElementById("burgerBtn");
  const mobileMenu = document.getElementById("mobileMenu");
  const closeMenu = document.getElementById("closeMenu");
  const body = document.body;

  const mobileDropdown = document.querySelector(".mobile-dropdown");
  const mobileDropBtn = document.querySelector(".mobile-dropbtn");


  /* =============================
     OPEN MOBILE MENU
  ============================= */

  if (burger && mobileMenu) {
    burger.addEventListener("click", () => {
      burger.classList.toggle("active");
      mobileMenu.classList.toggle("active");
      body.classList.toggle("no-scroll");
    });
  }


  /* =============================
     CLOSE BUTTON
  ============================= */

  if (closeMenu && mobileMenu && burger) {
    closeMenu.addEventListener("click", () => {
      mobileMenu.classList.remove("active");
      burger.classList.remove("active");
      body.classList.remove("no-scroll");
    });
  }


  /* =============================
     CLICK OUTSIDE TO CLOSE
  ============================= */

  if (mobileMenu && burger) {
    mobileMenu.addEventListener("click", (e) => {
      if (e.target === mobileMenu) {
        mobileMenu.classList.remove("active");
        burger.classList.remove("active");
        body.classList.remove("no-scroll");
      }
    });
  }


  /* =============================
     MOBILE DROPDOWN SERVICIOS
  ============================= */

  if (mobileDropBtn && mobileDropdown) {
    mobileDropBtn.addEventListener("click", () => {
      mobileDropdown.classList.toggle("active");
    });
  }


  /* =============================
     CLOSE MENU WHEN LINK CLICKED
  ============================= */

  const mobileLinks = document.querySelectorAll(".mobile-nav a");

  mobileLinks.forEach(link => {
    link.addEventListener("click", () => {
      if (mobileMenu && burger) {
        mobileMenu.classList.remove("active");
        burger.classList.remove("active");
        body.classList.remove("no-scroll");
      }
    });
  });

});

  /* =============================
     HIDE NAVBAR ON SCROLL DOWN
     SHOW ON SCROLL UP
  ============================= */

  const navbar = document.querySelector(".navbar");
  let lastScrollY = window.scrollY;

  window.addEventListener("scroll", () => {

    if (!navbar) return;

    const currentScroll = window.scrollY;

    // si el menú mobile está abierto, no ocultar navbar
    if (mobileMenu && mobileMenu.classList.contains("active")) {
      return;
    }

    if (currentScroll > lastScrollY && currentScroll > 120) {
      // scroll DOWN → ocultar
      navbar.classList.add("navbar-hide");
    } else {
      // scroll UP → mostrar
      navbar.classList.remove("navbar-hide");
    }

    lastScrollY = currentScroll;
  });


  function togglePopup() {
  const popup = document.getElementById('popup-card');
  const chatIcon = document.getElementById('chat-icon');

  if (popup.style.display === 'none' || popup.style.display === '') {
    popup.style.display = 'flex';
    chatIcon.style.display = 'none';
  } else {
    popup.style.display = 'none';
    chatIcon.style.display = 'flex';
  }
}
