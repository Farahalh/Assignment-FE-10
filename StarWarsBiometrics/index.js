document.addEventListener("DOMContentLoaded", function () {
  // Add an event listener to the button when the DOM is loaded
  const searchButton = document.getElementById("search-button");
  searchButton.addEventListener("click", searchCharacter);
});

function searchCharacter() {
  const searchInput = document.getElementById("search-character");
  const characterInfo = document.getElementById("character-info");

  // Get the value entered in the search input
  const characterName = searchInput.value;

  // Make the API request
  fetch(`https://www.swapi.tech/api/people/?name=${characterName}`)
    .then((response) => {
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      return response.json();
    })
    .then((data) => {
      // Check if the data contains information about the character
      if (data.result) {
        characterInfo.value = JSON.stringify(data.result, null, 2);
      } else {
        characterInfo.value = "Character not found.";
      }
    })
    .catch((error) => {
      characterInfo.value = "Error fetching character data: " + error;
    });
}
