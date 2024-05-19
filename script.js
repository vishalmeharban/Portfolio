var typed = new Typed(".text", {
  strings: ["Web Developer", "MERN Stack Developer", "FrontEnd Developer"],
  typeSpeed: 50,
  backSpeed: 50,
  backDelay: 1000,
  loop: true,
});

let form = document.querySelector("form");
form.addEventListener("submit", subfun);

let form_arr = [];

function subfun() {
  event.preventDefault();

  let form_obj = {
    name: form.name.value,
    password: form.password.value,
    email: form.email.value,
    message: form.message.value,
  };

  form_arr.push(form_obj);
  localStorage.setItem("signup", JSON.stringify(form_arr));
  console.log(form_arr);
}
