window.onload = () => {
  const id = document.getElementById("id");

  $.getJSON("https://api.ipify.org?format=json", (res) => (id.value = res.ip));
};

const scriptURL = "https://script.google.com/macros/s/AKfycbxxrFLvzGo6ZoLUtLv9LxmG6GXQ7BpMtvIguEy8yEtZ9LorRSHk6apQbgQsZSOm4GBV/exec";
const form = document.forms["submit-to-google-sheet"];
const loding = document.querySelector(".loading");
const kirim = document.querySelector(".kirim");
const Toast = Swal.mixin({
  toast: true,
  position: "top-end",
  showConfirmButton: false,
  timer: 3000,
  timerProgressBar: true,
  didOpen: (toast) => {
    toast.addEventListener("mouseenter", Swal.stopTimer);
    toast.addEventListener("mouseleave", Swal.resumeTimer);
  },
});

form.addEventListener("submit", (e) => {
  e.preventDefault();
  loding.classList.toggle("d-none");
  kirim.classList.toggle("d-none");
  fetch(scriptURL, { method: "POST", body: new FormData(form) })
    .then((response) => {
      loding.classList.toggle("d-none");
      kirim.classList.toggle("d-none");
      form.reset();
      Toast.fire({
        icon: "success",
        title: "Your message has been sent",
      });
    })
    .catch((error) => {
      loding.classList.toggle("d-none");
      kirim.classList.toggle("d-none");
      form.reset();
      Toast.fire({
        icon: "error",
        title: "There's a problem trying again",
      });
    });
});
