document.addEventListener('DOMContentLoaded', function() {
  // Scroll to a section when clicking on navigation links
  const links = document.querySelectorAll('a[href^="#"]');
  links.forEach(link => {
    link.addEventListener('click', function(e) {
      e.preventDefault();
      const targetId = this.getAttribute('href').substring(1);
      const targetElement = document.getElementById(targetId);
      window.scrollTo({
        top: targetElement.offsetTop - 50,
        behavior: 'smooth'
      });
    });
  });

  // Example for button interaction (change color on hover)
  const ctaButton = document.querySelector('.cta-btn');
  if (ctaButton) {
    ctaButton.addEventListener('mouseover', function() {
      ctaButton.style.backgroundColor = '#16a085';
    });
    ctaButton.addEventListener('mouseout', function() {
      ctaButton.style.backgroundColor = '#1abc9c';
    });
  }
});
