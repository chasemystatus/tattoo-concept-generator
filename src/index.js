function displayConcept(response) {
  let output = document.querySelector("#tattoo-concept");
  output.innerHTML = "";

  new Typewriter("#tattoo-concept", {
    strings: [response.data.answer],
    delay: 5,
    autoStart: true,
    cursor: "",
  });
}

function generateTattooConcept(event) {
  event.preventDefault();

  let apiKey = "f8ac3ab5b2f666adta3f1e4o43e6107c";
  let prompt = "";
  let context = "";
  let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${encodeURIComponent(
    prompt
  )}&context=${encodeURIComponent(context)}&key=${apiKey}`;

  axios.get(apiUrl).then(displayConcept);
}

let tattooForm = document.querySelector("#tattoo-form");
if (tattooForm) {
  tattooForm.addEventListener("submit", generateTattooConcept);
}
