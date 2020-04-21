
function playGame(playerInput) {
  clearMessages()
  let argPlayerMove
  let randomNumber = Math.floor(Math.random() * 3 + 1)
  argComputerMove = getMoveName(randomNumber)
}

var computerMove, randomNumber;
randomNumber = Math.floor(Math.random() * 3 + 1);
console.log('wylosowana liczba to: ' + randomNumber);
if (randomNumber == '1') {
  computerMove = 'kamień';
} else if (randomNumber == '2') {
  computerMove = 'papier';
} else if (randomNumber == '3') {
  computerMove = 'nożyce';
}
printMessage('komputer ruch: ' + computerMove);

var playerInput, playerMove;
playerInput = prompt('Wybierz swój ruch! 1: kamień, 2: papier, 3: nożyce.');
console.log('Wpisana odpowiedź to: ' + playerInput);
if (playerInput == '1') {
  playerMove = 'kamień';
} else if (playerInput == '2') {
  playerMove = 'papier';
} else if (playerInput == '3') {
  playerMove = 'nożyce';
} else {
  printMessage('błędny wybór');
}
printMessage('mój ruch: ' + playerMove);



var argMoveId, argPlayerMove, argComputerMove, computerMove, playerMove, randomNumber, playerInput;

/**
 * Describe this function...
 */
function getMoveName(argMoveId) {
  console.log('wywołano funkcję getMoveName z argumentem: ' + argMoveId);
  if (argMoveId == 1) {
    return 'kamień';
  } else if (argMoveId == 2) {
    return 'papier';
  } else if (argMoveId == 3) {
    return 'nożyce';
  }
}

/**
 * Describe this function...
 */
function displayResult(argPlayerMove, argComputerMove) {
  console.log('wywołano funkcję displayResults z argumentami: ' + argPlayerMove + ', ' + argComputerMove);
  if (argPlayerMove == 'papier' && argComputerMove == 'papier') {
    printMessage('remis');
  }
  if (argPlayerMove == 'kamień' && argComputerMove == 'kamień') {
    printMessage('remis');
  }
  if (argPlayerMove == 'nożyce' && argComputerMove == 'nożyce') {
    printMessage('remis');
  }
  if (argPlayerMove == 'papier' && argComputerMove == 'nożyce') {
    printMessage('Komputer wygrywa');
  }
  if (argPlayerMove == 'nożyce' && argComputerMove == 'papier') {
    printMessage('Ty wygrywasz');
  }
  if (argPlayerMove == 'papier' && argComputerMove == 'kamień') {
    printMessage('Ty wygrywasz');
  }
  if (argPlayerMove == 'kamień' && argComputerMove == 'papier') {
    printMessage('Komputer wygrywa');
  }
  if (argPlayerMove == 'nożyce' && argComputerMove == 'kamień') {
    printMessage('Komputer wygrywa');
  }
  if (argPlayerMove == 'kamień' && argComputerMove == 'nożyce') {
    printMessage('Ty wygrywasz');
  }
  printMessage('Zagrałem ' + argComputerMove + ', a Ty ' + argPlayerMove);
}


console.log('wybór ruchu gracza to: ' + playerInput);
playerMove = getMoveName(playerInput);
console.log('ruch gracza to: ' + playerMove);
randomNumber = Math.floor(Math.random() * 3 + 1);
console.log('wylosowana liczba to: ' + randomNumber);
computerMove = getMoveName(randomNumber);
console.log('ruch komputera to: ' + computerMove);
displayResult(playerMove, computerMove);
