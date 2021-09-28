/* game logic:
  create player using factories
  
  */

const game = (() => {
  const names = [];
  // player factory
  const Player = (name, marker) => {
    const moves = [];
    let numMoves = 0;
    const getName = () => name;
    const getNumMoves = () => numMoves;
    const getMoves = () => moves;
    const getMarker = () => marker;
    const win = () => `${getName()} has won`;
    return { getName, getNumMoves, getMoves, getMarker, win };
  };

  // DOM
  const gameOptions = document.querySelector("#game-options");
  // game appears when screen loads
  function load() {
    const header = document.querySelector("#header");
    header.style.opacity = "1";
    header.style.transition = "1.5s";
  }

  // player decides to play game
  function initGame() {
    const playBtn = document.querySelector("#play");
    playBtn.addEventListener("click", () => {
      playBtn.classList += " hidden";
      gameOptions.classList.remove("hidden");
    });
  }

  function showBoard() {
    const gameboard = document.querySelector("#gameboard");
    gameboard.classList.remove("hidden");
    gameOptions.classList += " hidden";
  }

  function renderScoreboard() {
    console.log(names);
    const scoreboard = document.querySelector("#scoreboard");
    scoreboard.innerHTML += names.forEach((name, index) => {
      console.log(name);
      return `<div class="player${index + 1}" id='player${index + 1}'>
        <span class="player${index + 1}__name" id='player${
        index + 1
      }__name'>${name}:</span>
        <span class='player${index + 1}__score' id='player${
        index + 1
      }__score'>0</span>
      </div>`;
    });
  }

  function gameSelect() {
    const formHolder = document.querySelector("#form-holder");
    window.addEventListener("click", (e) => {
      if (e.target.getAttribute("data-game")) {
        const selection = e.target.getAttribute("data-game");
        formHolder.innerHTML = playerForm(selection);
      }
    });
  }

  function removePlayerForms() {
    const forms = document.querySelector("#form-holder");
    forms.classList += " hidden";
  }

  // render player form/s

  function playerForm(gameType) {
    let formContent = null;
    if (gameType == "PvP") {
      formContent = `<div>
        <label for="player1-name"></label>
        <input type="text" id='player1-name' name='player1-name' placeholder="player 1" data-type='player'>
      </div>
      <div>
          <label for="player2-name"></label>
          <input type="text" id='player2-name' name='player2-name' placeholder="player 2" data-type='player'>
        </div> `;
    } else {
      formContent = `<div>
          <label for="player1-name"></label>
          <input type="text" id='player1-name' name='player1-name' placeholder="player 1" data-type='player'>
        </div>`;
    }
    return `<form class="player-name" id="player-name" action="">
        ${formContent}
        <input type='submit' class="button button--submit" id="submit-players"></input>
        </form>
        `;
  }

  function startGame() {
    window.addEventListener("click", (e) => {
      if (e.target.id == "submit-players") {
        e.preventDefault();
        const playerForms = document.querySelectorAll("[data-type ='player']");
        playerForms.forEach((form) => {
          names.push(form.value);
          form.value = "";
        });
        removePlayerForms();
        showBoard();
        renderScoreboard();
      }
    });
  }

  //PvP game logic

  function PvP() {}

  function play() {
    load();
    initGame();
    gameSelect();
    startGame();
  }
  return {
    play,
  };
})();

game.play();
