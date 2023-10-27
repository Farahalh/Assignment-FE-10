document.addEventListener("DOMContentLoaded", () => {
  const searchButton = document.getElementById("search-button");
  searchButton.addEventListener("click", drawCard);
});

async function drawCard() {
  const cardValue = document.getElementById("card-value");
  const cardSuit = document.getElementById("card-suit");
  const cardImage = document.getElementById("card-image");

  try {
    const response = await fetch("https://deckofcardsapi.com/api/deck/new/draw/?count=1");
    if (!response.ok) throw new Error("Network response was not ok");

    const data = await response.json();
    if (data.cards.length === 0) {
      cardValue.textContent = "Card not found.";
      cardSuit.textContent = "";
      cardImage.innerHTML = "";
      return;
    }

    const card = data.cards[0];
    cardValue.textContent = `Value: ${card.value}`;
    cardSuit.textContent = `Suit: ${card.suit}`;

    const cardImg = document.createElement("img");
    cardImg.src = card.image;
    cardImg.alt = `${card.value} of ${card.suit}`;
    cardImage.innerHTML = "";
    cardImage.appendChild(cardImg);
  } catch (error) {
    cardValue.textContent = "Error fetching card data: " + error;
    cardSuit.textContent = "";
    cardImage.innerHTML = "";
  }
}
