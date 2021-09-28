  const game = (()=> {

  const Player = () => {
   const moves = []
  }

  // DOM
  const gameOptions = document.querySelector('#game-options')
  // game appears when screen loads
  function load(){
    const header = document.querySelector('#header')
    header.style.opacity = '1'
    header.style.transition = '1.5s'
  }

  // player decides to play game
  function initGame(){
      const playBtn = document.querySelector('#play')
      playBtn.addEventListener('click',()=>{
        playBtn.classList += ' hidden'
        gameOptions.classList.remove('hidden')
      })
    }
   
  function showBoard(){
    const gameboard = document.querySelector('#gameboard')
    gameboard.classList.remove('hidden')
    gameOptions.classList +=' hidden'
  }

  function gameSelect(){
    window.addEventListener('click',(e)=>{
      if(e.target.getAttribute('data-game')){
        const selection = e.target.getAttribute('data-game')
        console.log(selection);
        showBoard()
      }
    })
  }
    
  function play(){
    load()
    initGame()
    gameSelect()
  }
    return{
      play
    }
  })()
  
  game.play()