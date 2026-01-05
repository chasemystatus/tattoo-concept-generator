let typedInstance;

function displayConcept(response) {
  const output = document.querySelector("#tattoo-concept");
  output.innerHTML = "";

  console.log("Concept generated.");

  if (typedInstance) {
    typedInstance.destroy();
    typedInstance = null;
  }

  typedInstance = new Typed("#tattoo-concept", {
    strings: [response.data.answer],
    typeSpeed: 15,
    showCursor: false,
    loop: false,
  });
}

function generateTattooConcept(event) {
  event.preventDefault();

  let tattooIdea = document.querySelector("#tattoo-idea");

  let apiKey = "f8ac3ab5b2f666adta3f1e4o43e6107c";
  let prompt = `Generate a tattoo concept from ${tattooIdea.value}`;

  let context =
    "You are a professional tattoo artist. Turn the user's idea into ONE cohesive tattoo concept the user can take to a tattooist. Output EXACTLY 5 short bullet points. Each bullet must be practical and specific: (1) style + linework/shading, (2) main subject + key details, (3) supporting elements + composition, (4) placement + size + flow with body, (5) technical notes for the artist (contrast, readability, skin longevity). Keep it PG-13. No disclaimers. No extra text.";

  let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${encodeURIComponent(
    prompt
  )}&context=${encodeURIComponent(context)}&key=${apiKey}`;

  console.log("Generating concept...");
  console.log(`Prompt: ${prompt}`);
  console.log(`Context: ${context}`);

  axios.get(apiUrl).then(displayConcept);
}

let tattooForm = document.querySelector("#tattoo-form");
if (tattooForm) {
  tattooForm.addEventListener("submit", generateTattooConcept);
}
