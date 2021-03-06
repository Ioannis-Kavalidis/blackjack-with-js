const aceDeckButton = document.getElementById("aces");
const makeAceDeck = () => {
  newButt.classList.add("hide");
  tableCards.classList.add("hide");
  hitButt.classList.remove("hide");
  standButt.classList.remove("hide");
  newDeck.splice(0, newDeck.length);
  let suits = ["hearts", "diamonds", "clubs", "spades"];
  let cardValues = [
    "A",
    "A",
    "A",
    "A",
    "A",
    "A",
    "A",
    "A",
    "A",
    "A",
    "A",
    "A",
    "A",
  ];
  suits.forEach(function (suit) {
    cardValues.forEach(function (value) {
      let card = { value: value, suit: suit };
      newDeck.push(card);
    });
  });

  shuffleDeck(newDeck);
  resultArea.innerHTML = "";
  firstDeal();
  dealerCards.innerHTML = "<h2>Dealer</h2>";
  playerCards.innerHTML = "<h2>Player</h2>";
  let dealerFaceUp = dealerHand[1];
  const dealerCardsDeal = () => {
    let { suit, value } = dealerFaceUp;
    let cardDiv = `
    <div class="card-back">
    <span class="cardBackShape"></span>
    </div>
    <div class="card ${suit}">
    <span class=cardValueTop>${value}</span>
    <span class="${suit}Shape"></span>
    <span class=cardValueBottom>${value}</span>
    </div>`;
    dealerCards.innerHTML += cardDiv;
  };
  dealerCardsDeal();
  playerHand.forEach(function (el) {
    let { suit, value } = el;
    let cardDiv = `<div class="card ${suit}"><span class=cardValueTop>${value}</span><span class="${suit}Shape"></span><span class=cardValueBottom>${value}</span></div>`;
    playerCards.innerHTML += cardDiv;
  });
};
