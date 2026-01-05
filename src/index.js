function generateTattooConcept(event) {
  event.preventDefault();

  let output = document.querySelector("#tattoo-concept");
  output.innerHTML = "";

  new Typewriter("#tattoo-concept", {
    strings: ["Your concept will appear here. Please wait..."],
    delay: 5,
    autoStart: true,
    cursor: "",
  });
}

let tattooForm = document.querySelector("#tattoo-form");
if (tattooForm) {
  tattooForm.addEventListener("submit", generateTattooConcept);
}
