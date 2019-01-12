import React,{Component} from 'react'
import {Board} from "./Board";

export class Game extends Component{
    render() {
        return(
            <div className="Game">
                <div className="game-board">
                    <Board />
                </div>
                <div className="game-info">
                    <div>{/* status */}</div>
                </div>
            </div>
        )
    }
}