function displayWishes(response) {
  console.log("wishes generated");
  new Typewriter("#wishes", {
    strings: response.data.answer,
    autoStart: true,
    delay: 3,
    cursor: "",
  });
}

function generateWishes(event) {
  event.preventDefault();

  let nameInput = document.querySelector("#name");
  let forSelect = document.querySelector("#for");
  let toneSelect = document.querySelector("#tone");
  let occasionSelect = document.querySelector("#occasion");
  let apiKey = "6f64aatd0b0oe3cc63e4fb944c32303a";
  let prompt = `User selected and inputed instructions: Generate ${occasionSelect.value} wishes for a ${forSelect.value} set tone of the wishes to ${toneSelect.value} write wishes are dedicated to ${nameInput.value}}`;
  let context =
    "You are greetings and occasions wishes expert and love to write short beautiful wishes.Your mission is to write wishes in basic HTML seperate each line with </br>. Make sure to follow user selected and inputed instructions. Do not include a title to the wishes. Sign the wishes with </br> </br> <strong>'SheCodes AI' </strong> at the end of the wishes.";
  let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

  console.log("Generating wishes");
  console.log(`Prompt:${prompt}`);
  console.log(`Context:${context}`);

  axios.get(apiUrl).then(displayWishes);
}

let wishesFormatElement = document.querySelector("#wishes-generator-form");
wishesFormatElement.addEventListener("submit", generateWishes);
