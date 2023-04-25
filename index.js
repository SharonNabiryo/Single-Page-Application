// get all navigation links
const navLinks = document.querySelectorAll(".nav-link");

// loop through all navigation links
navLinks.forEach((link) => {
  // add click event listener to each link
  link.addEventListener("click", (e) => {
    // prevent default action
    e.preventDefault();

    //get section id from data attribute
    const sectionId = link.getAttribute("data-section");

    //remove active class from all sections
    document.querySelectorAll("section").forEach((section) => {
      section.classList.remove("active");
    });

    //add active class to the  clicked section
    document.getElementById(sectionId).classList.add("active");
  });
});

// const sharon = document.getElementsByClassName("sharon")[0];
// const piyush = document.getElementsByClassName("piyush")[0];
// const emily = document.getElementsByClassName("emily")[0];
// const manu = document.getElementsByClassName("manu")[0];
// const lizan = document.getElementsByClassName("lizan")[0];
// const shamii = document.getElementsByClassName("shamii")[0];

// const sharonPg = document.getElementsByClassName("sharonpg")[0];
// const piyushPg = document.getElementsByClassName("piyushpg")[0];
// const emilyPg = document.getElementsByClassName("emilypg")[0];
// const manuPg = document.getElementsByClassName("manupg")[0];
// const lizanPg = document.getElementsByClassName("lizanpg")[0];
// const shamiiPg = document.getElementsByClassName("shamiipg")[0];

// sharon.addEventListener("click", function () {
//   sharonPg.style.display = "flex";
//   piyushPg.style.display = "none";
//   emilyPg.style.display = "none";
//   manuPg.style.display = "none";
//   lizanPg.style.display = "none";
//   shamiiPg.style.display = "none";
// });

// piyush.addEventListener("click", function () {
//   sharonPg.style.display = "none";
//   piyushPg.style.display = "flex";
//   emilyPg.style.display = "none";
//   manuPg.style.display = "none";
//   lizanPg.style.display = "none";
//   shamiiPg.style.display = "none";
// });

// emily.addEventListener("click", function () {
//   sharonPg.style.display = "none";
//   piyushPg.style.display = "none";
//   emilyPg.style.display = "flex";
//   manuPg.style.display = "none";
//   lizanPg.style.display = "none";
//   shamiiPg.style.display = "none";
// });

// manu.addEventListener("click", function () {
//   sharonPg.style.display = "none";
//   piyushPg.style.display = "none";
//   emilyPg.style.display = "none";
//   manuPg.style.display = "flex";
//   lizanPg.style.display = "none";
//   shamiiPg.style.display = "none";
// });
// lizan.addEventListener("click", function () {
//   sharonPg.style.display = "none";
//   piyushPg.style.display = "none";
//   emilyPg.style.display = "none";
//   manuPg.style.display = "none";
//   lizanPg.style.display = "flex";
//   shamiiPg.style.display = "none";
// });

// shamii.addEventListener("click", function () {
//   sharonPg.style.display = "none";
//   piyushPg.style.display = "none";
//   emilyPg.style.display = "none";
//   manuPg.style.display = "none";
//   lizanPg.style.display = "none";
//   shamiiPg.style.display = "flex";
// });

// -----------------------------------------------

// const cover = document.getElementById("cards");

// cover.addEventListener("onload", function () {
//     cover.classList.toggle = "cards";
//     sharonPg.style.display = "none";
//     piyushPg.style.display = "none";
//     emilyPg.style.display = "none";
//     manuPg.style.display = "none";
//     lizanPg.style.display = "none";
//     shamiiPg.style.display = "none";

// }

// const main = document.querySelector("main")[0];
// main.addEventListener("load", function () {
//     main.style.display = "none";
// }

// sharon.addEventListener("click", function () {
//   console.log("i am clicked");
// });

// function sharon() {
//   sharon.style.display = "flex";
//   piyush.style.display = "none";
//   emily.style.display = "none";
//   manu.style.display = "none";
//   lizan.style.display = "none";
//   shamii.style.display = "none";
// }

// function myHome() {
//   home.style.display = "flex";
//   login.style.display = "none";
//   contact.style.display = "none";
// }
// function myLogin() {
//   home.style.display = "none";
//   login.style.display = "flex";
//   contact.style.display = "none";
// }
// function myContact() {
//   home.style.display = "none";
//   login.style.display = "none";
//   contact.style.display = "flex";
// }
