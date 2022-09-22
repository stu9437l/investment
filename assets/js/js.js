



$(document).ready(function () {

  // to toggle password text
  // const ipnElement = document.querySelector("#ipnPassword");
  // const btnElement = document.querySelector("#btnPassword");

  // btnElement.addEventListener("click", function () {
  //   const currentType = ipnElement.getAttribute("type");
  //   ipnElement.setAttribute(
  //     "type",
  //     currentType === "password" ? "text" : "password"
  //   );
  //   let a = btnElement.classList.contains("fa-eye");
  //   if (a) {
  //     btnElement.classList.remove("fa-eye");
  //     btnElement.classList.add("fa-eye-slash");
  //   }
  //   if (!a) {
  //     btnElement.classList.add("fa-eye");
  //     btnElement.classList.remove("fa-eye-slash");
  //   }
  // });


  // tooltip js
  const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
  const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl))

  // hero banner slider  
  $('.hero-banner').owlCarousel({
    loop: true,
    margin: 10,
    nav: false,
    dots: false,
    items: 1

  })
  $('.single-marketplace').owlCarousel({
    loop: true,
    margin: 10,
    nav: false,
    dots: true,
    items: 1

  })
})


