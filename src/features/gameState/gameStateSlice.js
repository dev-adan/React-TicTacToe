import  {createSlice} from '@reduxjs/toolkit';
import {TiTick} from 'react-icons/ti'
import {GiCrossMark} from 'react-icons/gi'



const initialState = {

    buttons : ['','','','','','','','',''],
    player1 : [],
    player2 : [],
    firstPlay : null,
    gameOver : false,
    winMsg : null,


}

export const gameStateSlice = createSlice({
    name : 'gameState',
    initialState,


    reducers : {
        handleClick : (state,{payload}) => {

            if(state.player1.length === 0){
               
                state.player1 = [...state.player1,payload]
                state.buttons[payload] = <TiTick/>;
                return;
                
            }

            if(state.player2.length < state.player1.length){
    
                state.player2 = [...state.player2,payload]
                state.buttons[payload] = '2';
                state.buttons[payload] = <GiCrossMark/>
                return;
                
            }


            else{
              
                state.player1 = [...state.player1,payload]
                state.buttons[payload] = <TiTick/>;
          
                return;

            }

            
              

        },

        handleWinner : (state,{payload}) => {
            state.gameOver = true;
            state.winMsg  = `${payload} won the game`

        },

        resetGame : () => {
           return initialState
        },

        handleGameOver : (state) => {
            state.gameOver = true;
            state.winMsg  = 'Game Draw'
        }
    }
})


export const {handleClick,handleWinner,resetGame, handleGameOver} = gameStateSlice.actions;
export default gameStateSlice.reducer;