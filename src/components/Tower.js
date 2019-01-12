import React,{Component} from "react";
import {Pellet} from "./Pellet";
import {isInvalid} from "./Board";

export class Tower extends Component {

    renderPellet(i) {
        if (this.props.value.includes(i))
            return <Pellet size={i} towerSize={this.props.value.length} clicked={this.props.clickedId===i} onClick={() => this.handleClick(i)}/>
        else
            return null
    }

    renderPlacable(i) {
        if (!this.props.clicked && i!==null)
            return <Pellet size={i} towerSize={this.props.value.length + 1} clicked={false} ghost={true} invalid={isInvalid(i, this.props.value)} />
        else
            return null
    }

    render() {
        var tmp = this.props.value.map((id)=>{return this.renderPellet(id)});
        return(
            <div className="tower" onClick={() => this.props.onClick()}>
                {this.renderPlacable(this.props.clickedId)}
                {tmp}
                <div className="tower-name">Tour {this.props.idTower}</div>
            </div>
        )
    }

    handleClick(number) {
     //   }if (!this.props.win && number === Math.min(...this.props.value) && !this.props.placable){
        this.props.onPelletClick(number)
    }

}