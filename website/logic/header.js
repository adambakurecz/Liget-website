window.onscroll = function() {
  const header = document.getElementById("header");
  if (window.pageYOffset > 0) {
    header.classList.add("smaller-header");
    return;
  }
  header.classList.remove("smaller-header");
};