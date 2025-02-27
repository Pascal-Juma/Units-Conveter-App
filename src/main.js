const convertButton = document.querySelector("button");
const inputElement = document.querySelector(".input");
const selectElement = document.querySelector(".select");
const errorText = document.querySelector(".error-text");

let toMillimeters;
let toCentimeters;
let toDecimeters;
let toMeters;
let toDekameters;
let toHectometers;
let toKilometers;

let working = false;

convertButton.addEventListener("click", () => {
  checkError();

  if (working === true) {
    if (selectElement.value === "millimeters") {
      toMillimeters = inputElement.value / 1;
      toCentimeters = inputElement.value / 10;
      toDecimeters = inputElement.value / 100;
      toMeters = inputElement.value / 1000;
      toDekameters = inputElement.value / 10000;
      toHectometers = inputElement.value / 100000;
      toKilometers = inputElement.value / 1000000;
    } else if (selectElement.value === "centimeters") {
      toMillimeters = inputElement.value * 10;
      toCentimeters = inputElement.value / 1;
      toDecimeters = inputElement.value / 10;
      toMeters = inputElement.value / 100;
      toDekameters = inputElement.value / 1000;
      toHectometers = inputElement.value / 10000;
      toKilometers = inputElement.value / 100000;
    } else if (selectElement.value === "decimeters") {
      toMillimeters = inputElement.value * 100;
      toCentimeters = inputElement.value * 10;
      toDecimeters = inputElement.value / 1;
      toMeters = inputElement.value / 10;
      toDekameters = inputElement.value / 100;
      toHectometers = inputElement.value / 1000;
      toKilometers = inputElement.value / 10000;
    } else if (selectElement.value === "meters") {
      toMillimeters = inputElement.value * 1000;
      toCentimeters = inputElement.value * 100;
      toDecimeters = inputElement.value * 10;
      toMeters = inputElement.value / 1;
      toDekameters = inputElement.value / 10;
      toHectometers = inputElement.value / 100;
      toKilometers = inputElement.value / 1000;
    } else if (selectElement.value === "dekameter") {
      toMillimeters = inputElement.value * 10000;
      toCentimeters = inputElement.value * 1000;
      toDecimeters = inputElement.value * 100;
      toMeters = inputElement.value * 10;
      toDekameters = inputElement.value / 1;
      toHectometers = inputElement.value / 10;
      toKilometers = inputElement.value / 100;
    } else if (selectElement.value === "hectometer") {
      toMillimeters = inputElement.value * 100000;
      toCentimeters = inputElement.value * 10000;
      toDecimeters = inputElement.value * 1000;
      toMeters = inputElement.value * 100;
      toDekameters = inputElement.value * 10;
      toHectometers = inputElement.value / 1;
      toKilometers = inputElement.value / 10;
    } else if (selectElement.value === "kilometer") {
      toMillimeters = inputElement.value * 1000000;
      toCentimeters = inputElement.value * 100000;
      toDecimeters = inputElement.value * 10000;
      toMeters = inputElement.value * 1000;
      toDekameters = inputElement.value * 100;
      toHectometers = inputElement.value * 10;
      toKilometers = inputElement.value / 1;
    } else if(selectElement.value === 'base unit'){
      return;
    }


    displayResults();
  }

});

function checkError() {
  if (inputElement.value !== "" && selectElement.value !== "base unit") {
    working = true;
    inputElement.classList.remove("red-border");
    selectElement.classList.remove("red-border");
    errorText.textContent = "";
  } else if (inputElement.value === "" && selectElement.value === "base unit") {
    working = false;
    inputElement.classList.add("red-border");
    selectElement.classList.add("red-border");
    errorText.textContent = "Please input a value and select a base unit";
  } else if (inputElement.value === "" && selectElement.value !== "base unit") {
    working = false;
    inputElement.classList.add("red-border");
    selectElement.classList.remove("red-border");
    errorText.textContent = "Please input a value";
  } else if (inputElement.value !== "" && selectElement.value === "base unit") {
    working = false;
    inputElement.classList.remove("red-border");
    selectElement.classList.add("red-border");
    errorText.textContent = "Please select a base unit";
  }
}

function displayResults() {
  if(working === true) {
  let abbreviation;

  if (selectElement.value === "millimeters") {
    abbreviation = "mm";
  } else if (selectElement.value === "centimeters") {
    abbreviation = "cm";
  } else if (selectElement.value === "decimeters") {
    abbreviation = "dm";
  } else if (selectElement.value === "meters") {
    abbreviation = "m";
  } else if (selectElement.value === "dekameter") {
    abbreviation = "Dm";
  } else if (selectElement.value === "hectometer") {
    abbreviation = "hm";
  } else if (selectElement.value === "kilometer") {
    abbreviation = "km";
  }

  document.querySelector(".bottom-section").innerHTML = `
      <p class="result-text">
        <span>${inputElement.value} ${abbreviation}</span> is equal to <span>${toMillimeters} mm</span>
      </p>

      <p class="result-text">
        <span>${inputElement.value} ${abbreviation}</span> is equal to <span>${toCentimeters} cm</span>
      </p>

      <p class="result-text">
        <span>${inputElement.value} ${abbreviation}</span> is equal to <span>${toDecimeters} dm</span>
      </p>

      <p class="result-text">
        <span>${inputElement.value} ${abbreviation}</span> is equal to <span>${toMeters} m</span>
      </p>

      <p class="result-text">
        <span>${inputElement.value} ${abbreviation}</span> is equal to <span>${toDekameters} Dm</span>
      </p>

      <p class="result-text">
        <span>${inputElement.value} ${abbreviation}</span> is equal to <span>${toHectometers} hm</span>
      </p>

      <p class="result-text">
        <span>${inputElement.value} ${abbreviation}</span> is equal to <span>${toKilometers} km</span>
      </p>
  `;
}
}
