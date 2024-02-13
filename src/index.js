function generateWishes(event) {
  event.preventDefault();

  new Typewriter("#wishes", {
    strings: "WISHES GOES HERE",
    autoStart: true,
    delay: 3,
    cursor: "",
  });
}

let wishesFormatElement = document.querySelector("#wishes-generator-form");
wishesFormatElement.addEventListener("submit", generateWishes);
