let score = JSON.parse(localStorage.getItem('score'));
      if(score=== null){
        score={
          wins:0,
          losses:0,
          ties:0

        };
      }
      function updatescore(){
      document.querySelector(".js-score").innerHTML=`wins:${score.wins}, losses:${score.losses}, ties:${score.ties}`;
      };
      updatescore();
      function playGame(playerMove) {
        const computerMove = pickComputerMove();

        let result = '';

        if (playerMove === 'scissors') {
          if (computerMove === 'rock') {
            result = 'You lose.';
          } else if (computerMove === 'paper') {
            result = 'You win.';
          } else if (computerMove === 'scissors') {
            result = 'Tie.';
          }

        } else if (playerMove === 'paper') {
          if (computerMove === 'rock') {
            result = 'You win.';
          } else if (computerMove === 'paper') {
            result = 'Tie.';
          } else if (computerMove === 'scissors') {
            result = 'You lose.';
          }
          
        } else if (playerMove === 'rock') {
          if (computerMove === 'rock') {
            result = 'Tie.';
          } else if (computerMove === 'paper') {
            result = 'You lose.';
          } else if (computerMove === 'scissors') {
            result = 'You win.';
          }
        }
        if(result === 'You win.'){
          score.wins++;

        }
        else if(result === 'Tie.'){
          score.ties++;
        }
        else{
          score.losses++;
        }
        localStorage.setItem('score',JSON.stringify(score));
        updatescore();
        
        document.querySelector('.js-result').innerHTML=`${result}`;
        document.querySelector('.js-moves').innerHTML=`you
      <img src="${playerMove}-emoji.png" class="icon">
      <img src="${computerMove}-emoji.png" class="icon">
      computer`;
      }

      function pickComputerMove() {
        const randomNumber = Math.random();

        let computerMove = '';

        if (randomNumber >= 0 && randomNumber < 1 / 3) {
          computerMove = 'rock';
        } else if (randomNumber >= 1 / 3 && randomNumber < 2 / 3) {
          computerMove = 'paper';
        } else if (randomNumber >= 2 / 3 && randomNumber < 1) {
          computerMove = 'scissors';
        }

        return computerMove;
        
      }
      