document.addEventListener('DOMContentLoaded', () => {
    //card options
    const cardArray = [
      {
        name: 'fries',
        img: 'img/fries.png'
      },
      {
        name: 'cheeseburger',
        img: 'img/cheeseburger.png'
      },
      {
        name: 'ice-cream',
        img: 'img/ice-cream.png'
      },
      {
        name: 'pizza',
        img: 'img/pizza.png'
      },
      {
        name: 'milkshake',
        img: 'img/milkshake.png'
      },
      {
        name: 'hotdog',
        img: 'img/hotdog.png'
      },
      {
        name: 'fries',
        img: 'img/fries.png'
      },
      {
        name: 'cheeseburger',
        img: 'img/cheeseburger.png'
      },
      {
        name: 'ice-cream',
        img: 'img/ice-cream.png'
      },
      {
        name: 'pizza',
        img: 'img/pizza.png'
      },
      {
        name: 'milkshake',
        img: 'img/milkshake.png'
      },
      {
        name: 'hotdog',
        img: 'img/hotdog.png'
      }
    ]
  
    cardArray.sort(() => 0.5 - Math.random())
  
    const grid = document.querySelector('.grid')
    const resultDisplay = document.querySelector('#result')
    let cardsChosen = []
    let cardsChosenId = []
    let cardsWon = []
  
    //create your board
    function createBoard() {
      for (let i = 0; i < cardArray.length; i++) {
        const card = document.createElement('img')
        card.setAttribute('src', 'img/blank.png')
        card.setAttribute('data-id', i)
        card.addEventListener('click', flipCard)
        grid.appendChild(card)
      }
    }
  
    //check for matches
    function checkForMatch() {
      const cards = document.querySelectorAll('img')
      const optionOneId = cardsChosenId[0]
      const optionTwoId = cardsChosenId[1]
      
      if(optionOneId == optionTwoId) {
        cards[optionOneId].setAttribute('src', 'img/blank.png')
        cards[optionTwoId].setAttribute('src', 'img/blank.png')
        alert('Haz click en la imagen semejante')
      }
      else if (cardsChosen[0] === cardsChosen[1]) {
        alert('Has encontrado la coincidencia')
        cards[optionOneId].setAttribute('src', 'img/white.png')
        cards[optionTwoId].setAttribute('src', 'img/white.png')
        cards[optionOneId].removeEventListener('click', flipCard)
        cards[optionTwoId].removeEventListener('click', flipCard)
        cardsWon.push(cardsChosen)
      } else {
        cards[optionOneId].setAttribute('src', 'img/blank.png')
        cards[optionTwoId].setAttribute('src', 'img/blank.png')
        alert('Lo siento, inténtalo de nuevo')
      }
      cardsChosen = []
      cardsChosenId = []
      resultDisplay.textContent = cardsWon.length
      if  (cardsWon.length === cardArray.length/2) {
        resultDisplay.textContent = '¡FELICIDADES, tienes muy buena memoria! Tu letra es la N'
      }
    }
  
    //flip your card
    function flipCard() {
      let cardId = this.getAttribute('data-id')
      cardsChosen.push(cardArray[cardId].name)
      cardsChosenId.push(cardId)
      this.setAttribute('src', cardArray[cardId].img)
      if (cardsChosen.length ===2) {
        setTimeout(checkForMatch, 500)
      }
    }
  
    createBoard()
  })
  