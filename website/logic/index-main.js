//indexheader
//Smaller header
window.onscroll = function() {
  const pageDown = document.querySelector(".btn-down");
  const header = document.querySelector("header");
  if (window.pageYOffset > 0) {
    header.classList.add("smaller-header");
    pageDown.classList.add("disappear");
    return;
  }
  header.classList.remove("smaller-header");
  pageDown.classList.remove("disappear");
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

//pagedown button
const pageDown = document.querySelector(".btn-down");
pageDown.addEventListener('click', ()=>{
  window.scrollTo(0, window.innerHeight);
});

//"Hamarosan megnyitunk" button
const indexButton = document.querySelector(".index-button");
const article = document.querySelector(".article-container");
const header = document.querySelector("header");
indexButton.addEventListener('click', ()=>{
  window.scrollTo(0, article.offsetTop - header.offsetHeight);
});