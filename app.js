function deckBuilder() {
    const values = [ "A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"];
    const suits = ["hearth", "diamond", "spade", "club"];
    const cards = [];
    for (let s = 0; s < suits.length; s++) {
        for (let v = 0; v < values.length; v++) {
            const value = values[v];
            const suit = suits[s];
            cards.push({ value, suit });
  }
}
return cards;
}

    function randomCard(cards) {
    const random = Math.floor(Math.random() * 51);
    const cardValue = cards[random].value;
    const cardSuit = cards[random].suit;
    document.getElementById("top").className = cardSuit;                  
    const number = document.getElementsByClassName("number");
    number[0].innerHTML = cardValue;     
    console.log(cardValue);
    console.log(cardSuit);      
}

const cards = deckBuilder();
randomCard(cards);


   



