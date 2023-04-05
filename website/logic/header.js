//Smaller header
window.onscroll = function() {
  const header = document.querySelector("header");
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

//Hover effect
const navbarActive = document.querySelector('.navbar-active');
navbarActive.classList.add('nav-active');
const parentElement = document.querySelector('.nav-links');
const childElements = parentElement.children;
for (let i = 0; i < childElements.length - 2; i++) {
  childElements[i].addEventListener('mouseover', function() {
    childElements[i].firstElementChild.classList.add('hover');
    navbarActive.classList.remove('nav-active');
  });
  
  childElements[i].addEventListener('mouseout', function() {
    childElements[i].firstElementChild.classList.remove('hover');
    navbarActive.classList.add('nav-active');
  });
}