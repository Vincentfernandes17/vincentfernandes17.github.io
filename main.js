const scriptURL = 'https://script.google.com/macros/s/AKfycbyBEFpVP4AdVTYQLT8nrB5Qo8Ne-dd26G2BaE9K4zCUyWXO3zR4ORq-IjWMAFYsbR8uQw/exec';
const form = document.forms['Portofolio-Contact-Form-vincentf'];
const btnKirim = document.querySelector('.btn-kirim');
const btnLoading = document.querySelector('.btn-loading');
const myAlert = document.querySelector('.my-alert');
const myAlert2 = document.querySelector('.my-alert2');
var name1 = document.getElementById('name1');
var myNav = document.getElementById('nav1');
var empt = document.forms['Portofolio-Contact-Form-vincentf']['name'].value;
const forms = document.querySelectorAll('.needs-validation');

// Example starter JavaScript for disabling form submissions if there are invalid fields
(function () {
  'use strict';

  // Fetch all the forms we want to apply custom Bootstrap validation styles to
  const formss = document.querySelectorAll('.needs-validation');

  // Loop over them and prevent submission
  Array.prototype.slice.call(formss).forEach(function (form) {
    form.addEventListener(
      'submit',
      function (event) {
        if (!form.checkValidity()) {
          event.preventDefault();
          event.stopPropagation();
        }
        form.classList.add('was-validated');
      },
      false
    );
  });
})();
//var aa = document.getElementsByName("name").value;
//var bb = document.getElementsByName("email").value;
//var cc = document.getElementsByName("pesan").value;

window.onscroll = function () {
  'use strict';
  if (document.documentElement.scrollTop >= 100) {
    myNav.classList.add('bg-dark');
    myNav.classList.remove('bg-transparent');
  } else {
    myNav.classList.add('bg-transparent');
    myNav.classList.remove('bg-dark');
  }
};

let home = document.querySelector('#home');
let about = document.querySelector('#About');
let resume = document.querySelector('#Portfolio');
let project = document.querySelector('#Projects');
let contact = document.querySelector('#Contact');

window.addEventListener('scroll', () => {
  var windo = window.pageYOffset;
  if (home.offsetTop - 800 <= windo && about.offsetTop - 100 > windo) {
    document.querySelector('.home').setAttribute('id', 'active');
    document.querySelector('.about').removeAttribute('id', 'active');
    document.querySelector('.resume').removeAttribute('id', 'active');
    document.querySelector('.project').removeAttribute('id', 'active');
    document.querySelector('.contact').removeAttribute('id', 'active');
  } else if (about.offsetTop - 800 <= windo && resume.offsetTop - 500 > windo) {
    document.querySelector('.home').removeAttribute('id', 'active');
    document.querySelector('.about').setAttribute('id', 'active');
    document.querySelector('.resume').removeAttribute('id', 'active');
    document.querySelector('.project').removeAttribute('id', 'active');
    document.querySelector('.contact').removeAttribute('id', 'active');
  } else if (resume.offsetTop - 800 <= windo && project.offsetTop - 500 > windo) {
    document.querySelector('.home').removeAttribute('id', 'active');
    document.querySelector('.about').removeAttribute('id', 'active');
    document.querySelector('.resume').setAttribute('id', 'active');
    document.querySelector('.project').removeAttribute('id', 'active');
    document.querySelector('.contact').removeAttribute('id', 'active');
  } else if (project.offsetTop - 800 <= windo && contact.offsetTop - 300 > windo) {
    document.querySelector('.home').removeAttribute('id', 'active');
    document.querySelector('.about').removeAttribute('id', 'active');
    document.querySelector('.resume').removeAttribute('id', 'active');
    document.querySelector('.project').setAttribute('id', 'active');
    document.querySelector('.contact').removeAttribute('id', 'active');
  } else if (contact.offsetTop - 800 <= windo) {
    document.querySelector('.home').removeAttribute('id', 'active');
    document.querySelector('.about').removeAttribute('id', 'active');
    document.querySelector('.resume').removeAttribute('id', 'active');
    document.querySelector('.project').removeAttribute('id', 'active');
    document.querySelector('.contact').setAttribute('id', 'active');
  }
});
