let input = document.getElementById("input")
let submit = document.getElementById("submit")
let startButton = document.getElementById("startButton")
let selectedNumbers = document.getElementById("selected-numbers")
let esit = document.getElementById("esit")
startButton.addEventListener('click', startGame)
submit.addEventListener('click', submitNumber)

/// hiding game buttons before the game actually begins
submit.style.display = 'none';
input.style.display = 'none';

let count = 0
let number;


function startGame() {
  if (submit.style.display === 'none' || input.style.display === 'none') {
    submit.style.display = 'inline-block'; input.style.display = 'inline-block'
  }

  count = 0;
  number = 0;
  input.value = null;
  input.focus();

  esit.innerHTML = ""
  selectedNumbers.innerHTML = ""
  input.removeAttribute('readonly')
  submit.removeAttribute('hidden')
  number = Math.floor(Math.random() * 100) + 1;
  return number
}


function submitNumber(num) {
  if (count == 10) {
    let lose = new Audio("sounds/lose.mp3").play()
    esit.innerHTML = "you lose!"
    submit.setAttribute("hidden")
    input.setAttribute("readonly")
  }

  else {
    if (input.value > 100 || input.value == 0 || input.value === '') { alert('please enter a valid number between 1 and 100'); return; }
    if (input.value !== '') {

      num = input.value
      if (num == number) { esit.innerHTML = "you won!"; let win = new Audio("sounds/win.mp3").play(); }

      else {
        count++
        selectedNumbers.innerHTML = selectedNumbers.innerHTML + " " + num + " ";

        if (num > number) { esit.innerHTML = "your number is too high!" }
        else if (num < number) { esit.innerHTML = "your number is too low!" }
      }
      return count

    }

  }
}