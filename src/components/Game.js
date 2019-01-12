import React,{Component} from 'react'
import {Board} from "./Board";
import {Instruction} from "./Instruction";

export class Game extends Component{

    save(type, click) {
        var xhttp = new XMLHttpRequest();
        xhttp.open("GET", "https://unrepented-apportio.000webhostapp.com/saver.php?type="+type+"&click="+click, true);
        xhttp.send();
    }

    constructor(props) {
        super(props);
        this.state = {
            instruction: true,
            start: false
        }
    }

    render() {
        return(
            <div className="Game">
                <div className="game-board">
                    {this.renderBoard()}
                    {this.state.instruction?<Instruction onClick={() => this.handleClick()}/>:null}
                </div>
            </div>
        )
    }

    handleClick() {
        this.setState({instruction: false, start: true})
    }

    renderBoard() {
        if (this.state.start) {
            const id = Math.floor((Math.random()*3) +1) -2;
            return <Board loaderId={id} timer={2} save={(click) => this.save(id, click)}/>
        }
        return null;
    }
}