console.log("merry christmas");

let rock = 1
let paper = 2
let compChoice = 2
let scissors = 3
// let compRandom = (Math.floor(Math.random() * 3) + 1)


// function randomizer() {
//   let x = (Math.floor(Math.random() * 3) + 1)
// }

function playRock() {
  if (rock < compChoice) {
    return alert("rock wins")
  } else if (rock > compChoice) {
    return alert("paper wins")
  } else {
    return alert("it's a draw")
  }
}

function playPaper() {
  if (paper < compChoice) {
    return alert("paper wins")
  } else if (paper > compChoice) {
    return alert("paper wins")
  } else {
    return alert("it's a draw")
  }
}

function playScissors() {
  if (scissors < compChoice) {
    return alert("paper wins")
  } else if (scissors > compChoice) {
    return alert("scissors wins")
  } else {
    return alert("it's a draw")
  }
}



// function play(choice) {
//   if (choice == 'paper') {
//     return "draw"
//   } else if (choice == 'rock') {
//     return "paper wins"
//   } else if (choice == 'scissors') {
//     return
//   } else "rock wins"
// }