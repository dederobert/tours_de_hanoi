import React,{Component} from 'react'
import {Board} from "./Board";
import {Instruction} from "./Instruction";
import {Congratulation} from "./Congratulation";

export class Game extends Component{

    save(type, click, time) {
        var xhttp = new XMLHttpRequest();
        xhttp.open("GET", "https://unrepented-apportio.000webhostapp.com/saver.php?type="+type+"&click="+click+"&time="+time, true);
        xhttp.send();
        this.setState({start: false, congratulation: true})
    }

    constructor(props) {
        super(props);
        this.state = {
            instruction: true,
            start: false,
            congratulation: false,
        }
    }

    render() {
        return(
            <div className="Game">
                <div className="game-board">
                    {this.renderBoard()}
                    {this.state.instruction?<Instruction onClick={() => this.handleClick()}/>:null}
                    {this.state.congratulation?<Congratulation />:null}
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
            return <Board loaderId={id} timer={2} save={(click, time) => this.save(id, click, time)}/>
        }
        return null;
    }
}