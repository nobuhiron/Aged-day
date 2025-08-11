const scrollTopBtn = document.querySelector('.c-scroll-top');

window.addEventListener('scroll', () => {
  if (window.scrollY > 800) {
    scrollTopBtn.classList.add('is-active');
  } else {
    scrollTopBtn.classList.remove('is-active');
  }
});
