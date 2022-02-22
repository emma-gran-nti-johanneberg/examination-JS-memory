function generateDeck(){

    let deck = [];

    for(i=1; i<13; i++){

        let card = {
            id: i,
            img: `char-${i}.png`,
            matched: false,
            flipped: true
        }

        deck.push(card) // card A
        deck.push(card) // card B

    }

    return deck;

}

function updateUI(){

    document.querySelector('main').innerHTML = '';

    // loopa igenom våra kort
    deck.forEach(card => {
        
        let flipped = "";
        if(card.flipped){
            flipped = "flipped";
        }

        let el = `<article data-id="${card.id}" class="${flipped}">
            <img src="img/${card.img}" alt="card">
        </article>`;

        document
        .querySelector('main')
        .insertAdjacentHTML('beforeend', el);

    })
    // generera HTML för varje kort
    
    // Lyssna på klick på varje kort

}


let deck = generateDeck();
console.log(deck);
updateUI();

// Get clicked card ID
document.querySelector('article').addEventListener('click', (e) => {
    console.log(e.target.parentNode.getAttribute('data-id'));
})

for(i=0; i<cards.length; i++){

    cards[i].addEventListener('click', (e) => {    
    console.log(e.target.parentNode.getAttribute('data-id'));   
    
        if (card1==null){
            card1= e.target.parentNode.getAttribute(`data-id`)
        }

        if(card2==null){
            card2= e.target.parentNode.getAttribute(`data-id`)
        }

        if(card1 && card2){
            // jmför
            if (card1 !== null && card2 !== null && card1==card2){
                console.log('its a match!!')
                card1 = null;
                card2 = null;
                // 
            } else {
                console.log('Its NOT a match')
                card1 = null;
                card2 = null;
            }
        }

    })

}


/*
function shuffleArray(array) {
    for (var i = array.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
}
*/