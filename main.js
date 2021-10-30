const scriptURL = "https://script.google.com/macros/s/AKfycbyBEFpVP4AdVTYQLT8nrB5Qo8Ne-dd26G2BaE9K4zCUyWXO3zR4ORq-IjWMAFYsbR8uQw/exec";
const form = document.forms["Portofolio-Contact-Form-vincentf"];
const btnKirim = document.querySelector(".btn-kirim");
const btnLoading = document.querySelector(".btn-loading");
const myAlert = document.querySelector(".my-alert");
const myAlert2 = document.querySelector(".my-alert2");
var myNav = document.getElementById("nav1");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  //tombol loading tampilkan, hilangkan kirim
  btnLoading.classList.toggle("d-none");
  btnKirim.classList.toggle("d-none");

  fetch(scriptURL, { method: "POST", body: new FormData(form) })
    .then((response) => {
      //tombol loading hilangkan, hilangkan loading
      console.log("Success!", response);
      btnLoading.classList.toggle("d-none");
      btnKirim.classList.toggle("d-none");
      myAlert.classList.toggle("d-none");
      form.reset();
    })
    .catch((error) => {
      console.error("Error!", error.message);
      myAlert2.classList.toggle("d-none");
    });
});

window.onscroll = function () {
  "use strict";
  if (document.documentElement.scrollTop >= 100) {
    myNav.classList.add("bg-dark");
    myNav.classList.remove("bg-transparent");
  } else {
    myNav.classList.add("bg-transparent");
    myNav.classList.remove("bg-dark");
  }
};

let home = document.querySelector("#home");
let about = document.querySelector("#About");
let resume = document.querySelector("#Portfolio");
let project = document.querySelector("#Projects");
let contact = document.querySelector("#Contact");
let footer = document.querySelector("#footer");

window.addEventListener("scroll", () => {
  var windo = window.pageYOffset;
  if (home.offsetTop <= windo && about.offsetTop - 100 > windo) {
    document.querySelector(".home").setAttribute("id", "active");
    document.querySelector(".about").removeAttribute("id", "active");
    document.querySelector(".resume").removeAttribute("id", "active");
    document.querySelector(".project").removeAttribute("id", "active");
    document.querySelector(".contact").removeAttribute("id", "active");
  } else if (about.offsetTop <= windo && resume.offsetTop - 500 > windo) {
    document.querySelector(".home").removeAttribute("id", "active");
    document.querySelector(".about").setAttribute("id", "active");
    document.querySelector(".resume").removeAttribute("id", "active");
    document.querySelector(".project").removeAttribute("id", "active");
    document.querySelector(".contact").removeAttribute("id", "active");
  } else if (resume.offsetTop <= windo && project.offsetTop - 500 > windo) {
    document.querySelector(".home").removeAttribute("id", "active");
    document.querySelector(".about").removeAttribute("id", "active");
    document.querySelector(".resume").setAttribute("id", "active");
    document.querySelector(".project").removeAttribute("id", "active");
    document.querySelector(".contact").removeAttribute("id", "active");
  } else if (project.offsetTop <= windo && contact.offsetTop > windo) {
    document.querySelector(".home").removeAttribute("id", "active");
    document.querySelector(".about").removeAttribute("id", "active");
    document.querySelector(".resume").removeAttribute("id", "active");
    document.querySelector(".project").setAttribute("id", "active");
    document.querySelector(".contact").removeAttribute("id", "active");
  } else if (contact.offsetTop <= windo && resume.offsetTop - 100 < windo) {
    document.querySelector(".home").removeAttribute("id", "active");
    document.querySelector(".about").removeAttribute("id", "active");
    document.querySelector(".resume").removeAttribute("id", "active");
    document.querySelector(".project").removeAttribute("id", "active");
    document.querySelector(".contact").setAttribute("id", "active");
  }
});
