// Smooth Scroll for "Get Started" and "Learn More" buttons
document.querySelector('.btn-main').addEventListener('click', function(event) {
  event.preventDefault();
  document.querySelector('#features').scrollIntoView({ behavior: 'smooth' });
});

document.querySelector('.btn-secondary').addEventListener('click', function(event) {
  event.preventDefault();
  document.querySelector('footer').scrollIntoView({ behavior: 'smooth' });
});
