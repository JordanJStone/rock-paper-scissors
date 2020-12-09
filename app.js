console.log("merry christmas");

let rock = 1
let paper = 2
let compChoice = 2
let scissors = 3
let compRandom = Math.floor(Math.random() * 3) + 1;



function play(rock) {
  if (rock < compChoice) {
    return "rock wins"
  } else if (rock > compChoice) {
    return "paper wins"
  } else {
    return "it's a draw"
  }
}

function play(paper) {
  if (paper < compChoice) {
    return "paper wins"
  } else if (paper > compChoice) {
    return "paper wins"
  } else {
    return "it's a draw"
  }
}

function play(scissors) {
  if (scissors < compChoice) {
    return "paper wins"
  } else if (scissors > compChoice) {
    return "scissors wins"
  } else {
    return "it's a draw"
  }
}