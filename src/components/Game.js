import React,{Component} from 'react'
import {Board} from "./Board";
import {Instruction} from "./Instruction";
import {Congratulation} from "./Congratulation";
import {Questions} from "./Questions";

export class Game extends Component{

    handleNext(click, time) {
        if (this.state.instruction)
            this.setState({instruction: false, start: true});
        else if (this.state.start)
            this.setState({start: false, questions: true, time: time, click: click});
        else if (this.state.questions)
            this.setState({questions: false, congratulation: true});
    }

    constructor(props) {
        super(props);
        const id = Math.floor((Math.random()*3) +1) -2;
        this.state = {
            instruction: true,
            start: false,
            questions: false,
            congratulation: false,
            game_type: id,
            time:-1,
            click: -1,

        }
    }

    render() {
        return(
            <div className="Game">
                <div className="game-board">
                    {this.state.instruction?<Instruction next={() => this.handleNext(0,0)}/>:null}
                    {this.renderBoard()}
                    {this.state.questions?<Questions gameType={this.state.game_type} user={this.props.user} timer={this.state.time} clicks={this.state.click} next={() => this.handleNext(0,0)}/>:null}
                    {this.state.congratulation?<Congratulation/>:null}
                </div>
            </div>
        )
    }

    renderBoard() {
        if (this.state.start) {
            return <Board loaderId={this.state.game_type} user={this.props.user} timer={2} next={(click, time) => this.handleNext(click, time)}/>
        }
        return null;
    }
}