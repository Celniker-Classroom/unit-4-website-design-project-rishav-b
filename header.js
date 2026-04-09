
window.addEventListener('scroll', () => {
  const header = document.getElementById("nav-bar");
  if (window.scrollY > 10) {
    header.classList.add('is-stuck');
  } else {
    header.classList.remove('is-stuck');
  }
});