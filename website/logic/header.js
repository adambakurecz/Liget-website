//Smaller header
window.onscroll = function() {
  const header = document.getElementById("header");
  if (window.pageYOffset > 0) {
    header.classList.add("smaller-header");
    return;
  }
  header.classList.remove("smaller-header");
};

//Hamburger menu
const hamburgerOpen = document.querySelector('.hamburger-open');
const hamburgerClose = document.querySelector('.hamburger-close');
const navLinks = document.querySelector('.nav-links');
hamburgerOpen.addEventListener('click', () => {
  navLinks.classList.add('active');
});
hamburgerClose.addEventListener('click', () => {
  navLinks.classList.remove('active');
});