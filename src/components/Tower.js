import React,{Component} from "react";
import {Pellet} from "./Pellet";
import {isInvalid, win} from "./Board";

export class Tower extends Component {

    constructor(props) {
        super(props);
        this.state = {
            clicked: false,
            clickedId: null
        }
    }

    renderPellet(i) {
        if (this.props.value.includes(i))
            return <Pellet size={i} towerSize={this.props.value.length} clicked={this.state.clickedId===i} onClick={() => this.handleClick(i)}/>
        else
            return null
    }

    renderPlacable(i) {
        if (!this.state.clicked && i!==null)
            return <Pellet size={i} towerSize={this.props.value.length + 1} clicked={false} ghost={true} invalid={isInvalid(i, this.props.value)} />
        else
            return null
    }

    render() {
        var tmp = this.props.value.map((id)=>{return this.renderPellet(id)});
        return(
            <div className="tower" onClick={() => this.props.onClick()}>
                {this.renderPlacable(this.props.placable)}
                {tmp}
                <div className="tower-name">Tower {this.props.idTower}</div>
            </div>
        )
    }

    handleClick(number) {
        if (!win(this.props.value)) {
            if (this.state.clicked && this.state.clickedId===number)
                this.setState({clicked:false, clickedId: null});
            else
                this.setState({clicked:true, clickedId: number});
            this.props.onPelletClick(number)
        }
    }

}