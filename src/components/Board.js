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
    return [[0,1,2,3,],[],[]];
}

export class Board extends Component{

    /**
     * Save the game state in the DB
     */
    saveSate(){
        const params =
            "user=" + this.props.user +
            "&step=" + this.state.nbClick +
            "&state=" + JSON.stringify(this.state.towers)
        ;

        const xhttp = new XMLHttpRequest();
        xhttp.open("GET", "https://unrepented-apportio.000webhostapp.com/saver_step_hanoi.php?"+params);
        xhttp.send();
    }

    constructor(props) {
        super(props);
        this.state = {
            towers: fillTower(nbTower, nbPellet),
            clickedIdTower: null,
            clickedIdPellet: null,
            nbClick: 0,
            time: 0,
            loader: null
        };
    }

    /**
     * Create timer
     */
    componentDidMount() {
        this.timerID = setInterval(
            () => this.tick(),
            100
        )
    }

    /**
     * Remove timer
     */
    componentWillUnmount() {
        clearInterval(this.timerID);
    }

    /**
     * Generate towers
     * @param i Tower's identifiant
     * @returns {*} the HTML tower
     */
    renderTower(i) {
        return(
            <Tower idTower={i} value={this.state.towers[i]}
                   clicked={this.state.clickedIdTower!==null && this.state.clickedIdTower === i}
                   clickedId={this.state.clickedIdPellet}
                   win={win(this.state.towers[nbTower-1])}
                   onPelletClick={(idPellet) => this.handlePelletClick(i, idPellet)}
                   onClick={() => this.handleClick(i)}/>
        );
    }

    /**
     * Handle click on the tower
     * @param i The tower's identifiant
     */
    handleClick(i) {
        if (this.state.clickedIdPellet!==null) {
            const tower = this.state.towers.slice(); //Get the towers
            if (!isInvalid(this.state.clickedIdPellet, tower[i])) { //Check if the placement is valid
                tower[i].splice(0,0,this.state.clickedIdPellet); //Insert the pellet in destination tower
                const index = tower[this.state.clickedIdTower].indexOf(this.state.clickedIdPellet);
                tower[this.state.clickedIdTower].splice(index,1);  // Remove the pellet from origin tower
                this.setState({towers: tower, clickedIdTower: null, clickedIdPellet: null});
                if(i !== this.state.clickedIdTower) { //Check if origin tower != destination tower
                    this.setState((state, props) => ({nbClick: state.nbClick + 1, loader:0})); //Increment nbClick and start loader
                    this.saveSate(); //Save the state
                    if (win(this.state.towers[nbTower-1])) this.props.next(this.state.nbClick+1, this.state.time) //Check if win
                }
            }
        }
    }


    /**
     * Handle click on the pellet
     * @param idTower Tower's identifiant
     * @param idPellet Pellet's identiifant
     */
    handlePelletClick(idTower, idPellet) {
        if (this.state.clickedIdTower!==null && this.state.clickedIdTower===idTower && this.state.clickedIdPellet!==null && this.state.clickedIdPellet===idPellet)
            //On selectionne celui déjà séléctionné
            this.setState({clickedIdTower: null, clickedIdPellet: null});
        else if (this.state.loader === null && this.state.clickedIdPellet ===null && !win(this.state.towers[nbTower -1]) && idPellet === Math.min(...this.state.towers[idTower])){
            //Si on a pas déjà séléctionné quelque chose && on a pas gagné && on séléctionne le plus petit
            this.setState({clickedIdTower: idTower, clickedIdPellet: idPellet})
        }
    }

    render() {
        return (
            <div className="board container">
                <div>Déplacement(s) = {this.state.nbClick}</div>
                {win(this.state.towers[nbTower -1])?<div>Félicitation !</div>:""}
                {this.renderTower(0)}
                {this.renderTower(1)}
                {this.renderTower(2)}
                {this.state.loader!==null?this.renderLoader(this.props.loaderId):""}
            </div>
        );
    }

    renderLoader(i) {
        if (i === -1){ return null; }
        else if (i === 0){ return <div className="important">Sauvegarde ...</div>; }
        else { return <div>Sauvegarde <progress value={this.state.loader} max="100">{this.state.loader}</progress></div>}
    }

    tick() {
        if (this.state.loader === null) this.setState((state, props) => ({time: state.time+0.1}));
        if (this.state.loader >= 100 || this.props.loaderId === -1)
            this.setState({loader: null});
        if (this.state.loader !== null)
            this.setState((state, props)=>({loader: state.loader + (10/props.timer)}))
    }
}