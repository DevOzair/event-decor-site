(() => {
  // Elements
  const navbar = document.getElementById("navbar");
  const mobileMenu = document.getElementById("mobile-menu");
  const mobileMenuBtn = document.getElementById("mobile-menu-btn");

  // Navbar scroll effect
  window.addEventListener("scroll", () => {
    if (!navbar) return;

    if (window.scrollY > 50) {
      navbar.classList.add("glass-nav", "shadow-sm");
      navbar.classList.remove("py-4");
      navbar.classList.add("py-2");
    } else {
      navbar.classList.remove("glass-nav", "shadow-sm");
      navbar.classList.remove("py-2");
      navbar.classList.add("py-4");
    }
  });

  // Mobile Menu Toggle
  if (mobileMenuBtn && mobileMenu) {
    mobileMenuBtn.addEventListener("click", () => {
      mobileMenu.classList.toggle("hidden");

      const isOpen = !mobileMenu.classList.contains("hidden");
      mobileMenuBtn.setAttribute("aria-expanded", String(isOpen));
      mobileMenuBtn.setAttribute(
        "aria-label",
        isOpen ? "Close menu" : "Open menu"
      );

      const icon = mobileMenuBtn.querySelector("i");
      if (!icon) return;

      if (isOpen) {
        icon.classList.remove("fa-bars");
        icon.classList.add("fa-times");
      } else {
        icon.classList.remove("fa-times");
        icon.classList.add("fa-bars");
      }
    });

    // Close mobile menu when clicking a link
    mobileMenu.querySelectorAll("a").forEach((link) => {
      link.addEventListener("click", () => {
        mobileMenu.classList.add("hidden");
        mobileMenuBtn.setAttribute("aria-expanded", "false");
        mobileMenuBtn.setAttribute("aria-label", "Open menu");

        const icon = mobileMenuBtn.querySelector("i");
        if (icon) {
          icon.classList.remove("fa-times");
          icon.classList.add("fa-bars");
        }
      });
    });
  }

  // Form Submission Handler (moved off inline onsubmit)
  const form = document.getElementById("contactForm");
  const successMsg = document.getElementById("successMessage");

  if (form) {
    form.addEventListener("submit", (event) => {
      event.preventDefault();

      const submitBtn = form.querySelector('button[type="submit"]');
      if (!submitBtn) return;

      const originalBtnText = submitBtn.innerText;
      submitBtn.innerText = "Sending...";
      submitBtn.disabled = true;
      submitBtn.classList.add("opacity-75");

      // Simulate API call delay
      setTimeout(() => {
        form.reset();
        form.classList.add("hidden");
        if (successMsg) successMsg.classList.remove("hidden");

        // Reset button (just in case form is shown again)
        submitBtn.innerText = originalBtnText;
        submitBtn.disabled = false;
        submitBtn.classList.remove("opacity-75");
      }, 1500);
    });
  }
})();
