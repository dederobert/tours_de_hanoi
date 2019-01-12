import React,{Component} from "react";
import {Tower} from "./Tower";

const nbPellet = 4;
const nbTower = 3;

export function win(towers) {
    return (towers && towers.length === nbPellet);
}

export function isInvalid(i, tower) {
    return tower.length > 0 && i > Math.min(...tower);
}

function fillTower(nbTower, nbPellet) {
    var arr = Array.apply(null, Array(nbTower));
    arr = arr.map((x,i)=>{return []});
    arr[0] = Array.apply(null, Array(nbPellet));
    arr[0] = arr[0].map((x,i)=>{return i});
    return arr;
}

export class Board extends Component{
    constructor(props) {
        super(props);
        this.state = {
            towers: fillTower(nbTower, nbPellet),
            clickedIdTower: null,
            clickedIdPellet: null
        };
        console.dir(this.state.towers);
        fillTower(nbTower, nbPellet);
    }

    renderTower(i) {
        return <Tower idTower={i} value={this.state.towers[i]}
                      clicked={this.state.clickedIdTower!==null && this.state.clickedIdTower === i}
                      clickedId={this.state.clickedIdPellet}
                      win={win(this.state.towers[nbTower-1])}
                      onPelletClick={(idPellet) => this.handlePelletClick(i, idPellet)}
                      onClick={() => this.handleClick(i)}/>
    }

    handleClick(i) {
        if (this.state.clickedIdPellet!==null) {

            const tower = this.state.towers.slice();
            if (!isInvalid(this.state.clickedIdPellet, tower[i])) {

                tower[i].splice(0,0,this.state.clickedIdPellet);
                const index = tower[this.state.clickedIdTower].indexOf(this.state.clickedIdPellet);
                tower[this.state.clickedIdTower].splice(index,1);
                this.setState({towers: tower, clickedIdTower: null, clickedIdPellet: null});
            }
        }
    }

    handlePelletClick(idTower, idPellet) {
        if (this.state.clickedIdTower!==null && this.state.clickedIdTower===idTower && this.state.clickedIdPellet!==null && this.state.clickedIdPellet===idPellet)
            //On selectionne celui déjà séléctionné
            this.setState({clickedIdTower: null, clickedIdPellet: null});
        else if (this.state.clickedIdPellet ===null && !win(this.state.towers[nbTower -1]) && idPellet === Math.min(...this.state.towers[idTower])){
            //Si on a pas déjà séléctionné quelque chose && on a pas gagné && on séléctionne le plus petit
            this.setState({clickedIdTower: idTower, clickedIdPellet: idPellet})
        }
    }

    render() {
        return (
            <div className="board">
                {win(this.state.towers[nbTower -1])?<div>Congratulation !</div>:""}
                {this.renderTower(0)}
                {this.renderTower(1)}
                {this.renderTower(2)}
            </div>
        );
    }
}