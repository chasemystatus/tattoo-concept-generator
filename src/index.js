let typedInstance;

let output = document.querySelector("#tattoo-concept");
let ideaInput = document.querySelector("#tattoo-idea");
let placementInput = document.querySelector("#placement");

function displayConcept(response) {
  output.classList.remove("is-loading");
  output.innerHTML = "";

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

  let tattooIdea = ideaInput.value;
  let placement = placementInput.value;

  let prompt = `Generate a tattoo concept based on this idea: "${tattooIdea}"`;

  if (placement.trim() !== "") {
    prompt = `${prompt}. Placement: ${placement}.`;
  } else {
    prompt = `${prompt}.`;
  }

  let context =
    "You are a professional tattoo artist. Create ONE cohesive tattoo concept the user can take to a tattooist. " +
    "Return HTML ONLY. Output EXACTLY one <ul> with EXACTLY 5 <li> items. No headings, no intro text. " +
    "Each <li> must start with a bold label, then a colon, then a specific practical description. " +
    "Use these labels EXACTLY, in this order: " +
    "<strong>Style + linework/shading</strong>, " +
    "<strong>Main subject + key details</strong>, " +
    "<strong>Supporting elements + composition</strong>, " +
    "<strong>Placement + size + flow</strong>, " +
    "<strong>Technical notes for the artist</strong>. " +
    "Keep it PG-13. No disclaimers. No extra text.";

  let apiKey = "f8ac3ab5b2f666adta3f1e4o43e6107c";
  let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${encodeURIComponent(
    prompt
  )}&context=${encodeURIComponent(context)}&key=${apiKey}`;

  console.log("Generating concept...");
  console.log(`Prompt: ${prompt}`);

  output.classList.add("is-loading");
  output.textContent = "Generating concept...";

  axios
    .get(apiUrl)
    .then(displayConcept)
    .catch(function (error) {
      console.log("error message:", error.message);
      output.classList.remove("is-loading");
      output.textContent = "Something went wrong. Please try again.";
    });
}

let tattooForm = document.querySelector("#tattoo-form");
if (tattooForm) {
  tattooForm.addEventListener("submit", generateTattooConcept);
}
