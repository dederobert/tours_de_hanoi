import React, {Component} from "react";

export class Instruction extends Component{
    render() {
        return (
            <div className="instruction container">
                <h2>Informations</h2>
                <p>Bonjour, <br/><br/>
                    Nous allons vous présenter le jeu des tours de Hano&iuml; <br/><br/>
                    Votre t&acirc;che consiste à résoudre le problème en réalisant le moins de déplacement possible.
                    Le résultat du jeu sera sauvegardé <b>anonymement</b> afin de réaliser des statistiques. <br/><br/>
                    Cette étude ne vous prendra pas plus de 2 minutes.
                </p>
                <br/>
                <hr/>
                <br/>
                <h2>Règle du jeu</h2>
                <br/>
                <p>Le but du jeu est de déplacer entièrement la pile initiale sur la dernière tour.
                    <ul>
                        <li>Vous ne pouvez bouger que le disque en haut de la pile</li>
                        <li>Vous ne pouvez bouger qu’un disque à la fois</li>
                        <li>Seul un petit disque peut être placé sur un plus gros disque</li>
                    </ul>
                </p>
                <br/>
                <a onClick={() => this.props.next()} className="btn">Démarrer l'étude</a>
            </div>
        );
    }
}