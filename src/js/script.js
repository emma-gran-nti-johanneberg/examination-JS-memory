function generateDeck(){

    let deck = [];

    for(i=1; i<13; i++){

        let card = {
            id: i,
            img: `char-${i}.png`,
            matched: false,
            neutral: true,
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
        
        let neutral = "";
        if(card.neutral){
            neutral = "neutral";
        }

        let el = `<article data-id="${card.id}" class="${neutral}">
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

let card1= null;
let card2= null;
let pair=null;


function flippCard(card){
    card.classList.add("flipped")
}


// Get clicked card ID
let cards = document.querySelectorAll('article');

for(i=0; i<cards.length; i++){

    cards[i].addEventListener('click', (e) => {    
    console.log(e.target.parentNode.getAttribute('data-id')); 
    
    
        if (card1==null){
            card1= e.target.parentNode.getAttribute(`data-id`)
            console.log("nu är kort 1 vald")
            console.log(card1)
            console.log(card2)
            flippCard(e.target.parentNode)
        }

        else{
            card2= e.target.parentNode.getAttribute(`data-id`)
            flippCard(e.target.parentNode)
            console.log("nu har du valt kort 2 och korten har siffrorna")
            console.log(card1)
            console.log(card2)
            
            if (card1==card2){
                console.log(`du har hittat ett par korten har id:`)
                console.log(card1)
                console.log(card2)
                document.querySelector(`[data-id="${card1}"]`).setAttribute("data-matched", true)
                document.querySelector(`[data-id="${card2}"]`).setAttribute("data-matched", true)
                card1 = null
                card2 = null

            }
            else {
                document.querySelector(`[data-id="${card1}"]`).classList.remove("flipped")
                document.querySelector(`[data-id="${card2}"]`).classList.remove("flipped")
                console.log('detta är inget par och nu har kort ett siffrorna:')
                console.log(card1)
                console.log(card2)
                card1 = null
                card2 = null
            }
        }

    })

}



