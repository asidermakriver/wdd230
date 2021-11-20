const requestURL = "https://byui-cit230.github.io/weather/data/towndata.json";
fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    console.table(jsonObject); // temporary checking for valid response and data parsing
    const towns = jsonObject["towns"];
    //function test(towns){
    for (let i = 1; i < 4; i++) {
      // The order which I want! 6, 0, 2.
      //****************************************************Declare Variables*************
      let sectionHTML = document.createElement("section");
      let articleHTML = document.createElement("article");
      let townName = document.createElement("h2");
      let townMotto = document.createElement("p");
      let asideHTML = document.createElement("aside");
      let townFound = document.createElement("p");
      let townCurPopulation = document.createElement("p");
      let townAvRainFall = document.createElement("p");
      let figureHTML = document.createElement("figure");
      let imageHTML = document.createElement("img");
      //****************************************************Assign Variables***************
      townName.textContent = towns[i].name;
      townMotto.textContent = towns[i].motto;
      townFound.textContent = "Year Founded: " + towns[i].yearFounded;
      townCurPopulation.textContent = "Population: " + towns[i].currentPopulation;
      townAvRainFall.textContent = "Annual Rain Fall: " + towns[i].averageRainfall;
      imageHTML.setAttribute("src", towns[i].photo);
      // *******************************************Push Variables Into the HTML Code******
      sectionHTML.appendChild(articleHTML);
      articleHTML.appendChild(townName);
      articleHTML.appendChild(townMotto);
      sectionHTML.appendChild(asideHTML);
      asideHTML.appendChild(townFound);
      asideHTML.appendChild(townCurPopulation);
      asideHTML.appendChild(townAvRainFall);
      sectionHTML.appendChild(figureHTML);
      figureHTML.appendChild(imageHTML);
      document.querySelector("div.homeInfo").appendChild(sectionHTML);
    }
    //}
    //test(towns[6]);
  });