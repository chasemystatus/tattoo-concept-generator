let typedInstance;

function displayConcept(response) {
  const output = document.querySelector("#tattoo-concept");
  output.textContent = "";

  console.log("Concept generated.");

  typedInstance = new Typed("#tattoo-concept", {
    strings: [response.data.answer],
    typeSpeed: 15,
    showCursor: false,
    loop: false,
  });
}

function generateTattooConcept(event) {
  event.preventDefault();

  if (typedInstance) {
    typedInstance.destroy();
    typedInstance = null;
  }

  let tattooIdea = document.querySelector("#tattoo-idea").value;

  let apiKey = "f8ac3ab5b2f666adta3f1e4o43e6107c";
  let prompt = `Generate a tattoo concept from ${tattooIdea}`;

  let context =
    "You are a professional tattoo artist. Turn the user's idea into ONE cohesive tattoo concept the user can take to a tattooist. Output EXACTLY 5 short bullet points. Each bullet must be practical and specific: (1) style + linework/shading, (2) main subject + key details, (3) supporting elements + composition, (4) placement + size + flow with body, (5) technical notes for the artist (contrast, readability, skin longevity). Keep it PG-13. No disclaimers. No extra text.";

  let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${encodeURIComponent(
    prompt
  )}&context=${encodeURIComponent(context)}&key=${apiKey}`;

  console.log("Generating concept...");
  console.log(`Prompt: ${prompt}`);
  console.log(`Context: ${context}`);

  let output = document.querySelector("#tattoo-concept");
  output.textContent = "Generating concept...";

  axios
    .get(apiUrl)
    .then(displayConcept)
    .catch(function (error) {
      console.log("error message:", error.message);
      output.textContent = "Something went wrong. Please try again.";
    });
}

let tattooForm = document.querySelector("#tattoo-form");
if (tattooForm) {
  tattooForm.addEventListener("submit", generateTattooConcept);
}
