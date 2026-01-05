function generateTattooConcept(event) {
  event.preventDefault();

  new Typewriter("#tattoo-concept", {
    strings: ["Your concept will appear here. Please wait..."],
    delay: 40,
    autoStart: true,
    cursor: "",
  });
}

let tattooForm = document.querySelector("#tattoo-form");
tattooForm.addEventListener("submit", generateTattooConcept);
