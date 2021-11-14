const scriptURL = "https://script.google.com/macros/s/AKfycbyBEFpVP4AdVTYQLT8nrB5Qo8Ne-dd26G2BaE9K4zCUyWXO3zR4ORq-IjWMAFYsbR8uQw/exec";
const form = document.forms["Portofolio-Contact-Form-vincentf"];
const btnKirim = document.querySelector(".btn-kirim");
const btnLoading = document.querySelector(".btn-loading");
const myAlert = document.querySelector(".my-alert");
const myAlert2 = document.querySelector(".my-alert2");
var name1 = document.getElementById("name1");
var myNav = document.getElementById("nav1");
var empt = document.forms["Portofolio-Contact-Form-vincentf"]["name"].value;
const forms = document.querySelectorAll(".needs-validation");

function validating() {
  const inpObj = document.getElementById("validd");
  if (!inpObj.checkValidity()) {
    console.log("fill the field >.<");
  } else {
    sending();
  }
}
function sending() {
  //if (form.querySelectorAll("was-valdiated")) {
  console.log("starting to submit");
  btnLoading.classList.toggle("d-none");
  btnKirim.classList.toggle("d-none");
  fetch(scriptURL, { method: "POST", body: new FormData(form) })
    .then((response) => {
      console.log("Success!", response);
      btnLoading.classList.toggle("d-none");
      btnKirim.classList.toggle("d-none");
      myAlert.classList.toggle("d-none");
      form.reset();
      form.classList.remove("was-validated");
      form.classList.add("requires-validation");
    })
    .catch((error) => {
      console.error("Error!", error.message);
      myAlert2.classList.toggle("d-none");
    });
  //}
}
form.addEventListener("submit", (e) => {
  e.preventDefault();
  e.stopPropagation();
  validating();
});

// Example starter JavaScript for disabling form submissions if there are invalid fields
(function () {
  "use strict";

  // Fetch all the forms we want to apply custom Bootstrap validation styles to
  const formss = document.querySelectorAll(".needs-validation");

  // Loop over them and prevent submission
  Array.prototype.slice.call(formss).forEach(function (form) {
    form.addEventListener(
      "submit",
      function (event) {
        if (!form.checkValidity()) {
          event.preventDefault();
          event.stopPropagation();
        }
        form.classList.add("was-validated");
      },
      false
    );
  });
})();
//var aa = document.getElementsByName("name").value;
//var bb = document.getElementsByName("email").value;
//var cc = document.getElementsByName("pesan").value;

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
