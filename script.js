// ✅ Run everything after the DOM is loaded
document.addEventListener("DOMContentLoaded", () => {

  // ✅ Contact form submission (only if it exists on the page)
  const contactForm = document.getElementById("contactForm");
  if (contactForm) {
    contactForm.addEventListener("submit", function (e) {
      e.preventDefault();
      alert("Message sent! I will get back to you soon.");
      this.reset();
    });
  }

  // ✅ Toggle dark mode (only if the button exists)
  const toggleBtn = document.getElementById("toggleDark");
  if (toggleBtn) {
    toggleBtn.addEventListener("click", () => {
      document.body.classList.toggle("dark-mode");
    });
  }

  // ✅ Scroll fade-in animation
  const faders = document.querySelectorAll('.fade-in');
  if (faders.length > 0) {
    const appearOnScroll = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      });
    }, {
      threshold: 0.15
    });

    faders.forEach(el => appearOnScroll.observe(el));
  }

});
