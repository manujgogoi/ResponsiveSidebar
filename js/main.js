let menuBtn = document.querySelector("#menu-btn");
let sidebar = document.querySelector(".sidebar");
let searchBtn = document.querySelector("#search-icon");

menuBtn.onclick = function () {
  sidebar.classList.toggle("active");
};
searchBtn.onclick = function () {
  sidebar.classList.toggle("active");
};
