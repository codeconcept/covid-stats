const title = document.querySelector(".title");
const countries = document.getElementById("countries");
const BASE_URL = "https://covid19.mathdro.id/api";
let countriesOptions = [];
let error = null;
const errorDiv = document.querySelector(".error");
let info = "";
const infoDiv = document.querySelector(".info");

function getCountries() {
  return new Promise((resolve, reject) => {
    fetch(`${BASE_URL}/countries`)
      .then(data => data.json())
      .then(countries => {
        console.log("countries", countries);
        resolve(countries);
      })
      .catch(err => {
        reject(err);
        errorDiv.innerText = "impossible de récupérer la liste de pays";
      });
  });
}

getCountries().then(data => {
  console.log("works", data.countries);
});

// countries.innerHTML = countriesOptions;
