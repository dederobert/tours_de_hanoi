import React, {Component} from "react";

export class Instruction extends Component{
    render() {
        return (
            <div className="instruction container">
                <h2>Règle du jeu</h2>
                <br/>
                <p>Le but du jeu est de déplacer entièrement la pile initiale sur la dernière tour.
                    <ul>
                        <li>Vous ne pouvez bouger qu’un disque à la fois</li>
                        <li>Seul un petit disque peut être placé sur un plus gros disque (un peu comme des poupées russes)</li>
                    </ul>
                </p>
                <br/>
                <h2>Objectif</h2>
                <br/>
                <p>Vous devez finir le jeu en réalisant le moins de déplacements possible</p>
                <br/>
                <a onClick={() => this.props.onClick()} className="btn">Démarrer</a>
            </div>
        );
    }
}