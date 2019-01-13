import React from 'react'

export function Congratulation(props) {
    return (
        <div className="congratulation container">
            <p>Félicitation vous avez résolu le problème. <br/> Nous vous remercions pour votre temps et votre participation.</p>
            <br/>
            <a href="https://github.com/dederobert/tours_de_hanoi" target="_blank"><i className="fab fa-github" title="GitHub du projet"></i></a>
        </div>
    );
}