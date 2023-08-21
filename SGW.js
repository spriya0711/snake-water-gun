
// Get the buttons and table elements
const snakeBtn = document.getElementById('snakeBtn');
const waterBtn = document.getElementById('waterBtn');
const gunBtn = document.getElementById('gunBtn');
const resultTable = document.getElementById('resultTable');
let round = 1;
let playerScore = 0;
let computerScore = 0;

// Audio elements
const winSound = new Audio('win.mp3');
const loseSound = new Audio('lose.mp3');

// Function to update the table with the game result
function updateTable(playerChoice, computerChoice, result) {
    const column = resultTable.insertRow(round);
    const roundCell = column.insertCell(0);
    const playerCell = column.insertCell(1);
    const computerCell = column.insertCell(2);

    roundCell.textContent = round;
    playerCell.textContent = playerChoice;
    computerCell.textContent = computerChoice;

    if (result === 'player') {
        
        playerCell.style.backgroundColor = 'rgb(55, 197, 55)';
        computerCell.style.backgroundColor = 'rgb(208, 205, 205)';
        winSound.play();
      } else if (result === 'computer') {
        
        playerCell.style.backgroundColor = 'rgb(208, 205, 205)';
        computerCell.style.backgroundColor = 'red';
        loseSound.play();
      } else {
        playerCell.style.backgroundColor = 'none';
        computerCell.style.backgroundColor = 'none';
      }
    
    }

// Function to determine the game result based on choices
function playGame(playerChoice) {
	console.log('round',round);
    const choices = ['snake', 'water', 'gun'];
    const computerChoice = choices[Math.floor(Math.random() * choices.length)];
  
    let result;
	
	if (round <=5) {
		console.log("INSIDE");
    if (playerChoice === computerChoice) {
        result = 'draw';
      } else if (
        (playerChoice === 'snake' && computerChoice === 'water') ||
        (playerChoice === 'water' && computerChoice === 'gun') ||
        (playerChoice === 'gun' && computerChoice === 'snake')
      ) {
        result = 'player';
        playerScore++;
      } else {
        result = 'computer';
        computerScore++;
      }
	  
	  

      updateTable(playerChoice, computerChoice, result);
	  
	}
	round++;
       

  if (round > 6) {
    let winner;
	console.log(playerScore);
	console.log(computerScore);
    if (playerScore > computerScore) {
      winner = 'Player';
    } 
    
    if (playerScore < computerScore) {
      winner = 'Computer';
    }
    
    if(playerScore == computerScore) {
      winner = 'Draw';
    }


    alert(`Game Over!\nFinal Winner: ${winner}`);
    alert("Play again?");
    // You can perform any additional actions after the game ends here

    // Reset the game
    round = 1;
    playerScore = 0;
    computerScore = 0;
    resultTable.innerHTML = '<tr><th>Round</th><th>Player</th><th>Computer</th></tr>';
  }
}

// Event listeners for button clicks
snakeBtn.addEventListener('click', () => playGame('snake'));
waterBtn.addEventListener('click', () => playGame('water'));
gunBtn.addEventListener('click', () => playGame('gun'));
