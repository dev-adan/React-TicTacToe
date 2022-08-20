import { useSelector,useDispatch } from "react-redux"

import { handleClick,handleWinner ,resetGame, handleGameOver} from "../features/gameState/gameStateSlice"
import { useLayoutEffect,useRef } from "react";

const MainPage = () => {
  const firstUpdate = useRef(true);
  
  const gameState = useSelector(state => state.gameState);
  const dispatch = useDispatch();


  useLayoutEffect(() => {

    if (firstUpdate.current) {
      firstUpdate.current = false;
      console.log('layout')
      return;
    }
  
      if(gameState.player1.includes(0) && gameState.player1.includes(1) && gameState.player1.includes(2)){
        dispatch(handleWinner('player 1'))
      }else if(gameState.player1.includes(3) && gameState.player1.includes(4) && gameState.player1.includes(5)){
        dispatch(handleWinner('player 1'))
      }else if(gameState.player1.includes(6) && gameState.player1.includes(7) && gameState.player1.includes(8)){
        dispatch(handleWinner('player 1'))
      }else if(gameState.player1.includes(1) && gameState.player1.includes(4) && gameState.player1.includes(7)){
        dispatch(handleWinner('player 1'))
      }else if(gameState.player1.includes(2) && gameState.player1.includes(5) && gameState.player1.includes(8)){
        dispatch(handleWinner('player 1'))
      }else if(gameState.player1.includes(0) && gameState.player1.includes(4) && gameState.player1.includes(8)){
        dispatch(handleWinner('player 1'))
      }else if(gameState.player1.includes(2) && gameState.player1.includes(4) && gameState.player1.includes(6)){
        dispatch(handleWinner('player 1'))
      }else if(gameState.player2.includes(3) && gameState.player2.includes(4) && gameState.player2.includes(5)){
        dispatch(handleWinner('player 2'))
      }else if(gameState.player2.includes(6) && gameState.player2.includes(7) && gameState.player2.includes(8)){
        dispatch(handleWinner('player 2'))
      }else if(gameState.player2.includes(1) && gameState.player2.includes(4) && gameState.player2.includes(7)){
        dispatch(handleWinner('player 2'))
      }else if(gameState.player2.includes(2) && gameState.player2.includes(5) && gameState.player2.includes(8)){
        dispatch(handleWinner('player 2'))
      }else if(gameState.player2.includes(0) && gameState.player2.includes(4) && gameState.player2.includes(8)){
        dispatch(handleWinner('player 2'))
      }else if(gameState.player2.includes(2) && gameState.player2.includes(4) && gameState.player2.includes(6)){
        dispatch(handleWinner('player 2'))
      }else if(gameState.player2.includes(0) && gameState.player2.includes(3) && gameState.player2.includes(6)){
        dispatch(handleWinner('player 2'))
      }else if(gameState.player1.includes(0) && gameState.player1.includes(3) && gameState.player1.includes(6)){
        dispatch(handleWinner('player 2'))
      }


      if(gameState.player1.length === 4 && gameState.player2.length === 5){
                dispatch(handleGameOver())
            }


            if(gameState.player2.length === 4 && gameState.player1.length === 5){
              dispatch(handleGameOver())

            }



    
    
    

  },[gameState.buttons])


  return (
    <div className='grid-container'>
      
        <div className='grid'>
            {gameState.buttons.map((button,index) => {
              return <button disabled={gameState.gameOver || gameState.buttons[index] !== '' ? true : false} onClick={() => dispatch(handleClick(index))} className="cell" key={index}>{button}</button>
            })}
        </div>

        <div>
          <h1>{gameState.winMsg}</h1>
          {gameState.winMsg ? <button onClick={() => dispatch(resetGame())} className="reset-btn">Reset</button> : null}
        </div>


    </div>
  )
}

export default MainPage