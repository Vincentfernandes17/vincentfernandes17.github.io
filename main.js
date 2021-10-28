const scriptURL = "https://script.google.com/macros/s/AKfycbyBEFpVP4AdVTYQLT8nrB5Qo8Ne-dd26G2BaE9K4zCUyWXO3zR4ORq-IjWMAFYsbR8uQw/exec";
const form = document.forms["Portofolio-Contact-Form-vincentf"];
const btnKirim = document.querySelector(".btn-kirim");
const btnLoading = document.querySelector(".btn-loading");
const myAlert = document.querySelector(".my-alert");
const myAlert2 = document.querySelector(".my-alert2");

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
