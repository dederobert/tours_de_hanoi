import React from 'react'

export function Congratulation(props){
    return (
        <div className="congratulation container">
            <p>Félicitation vous avez résolu le problème. <br/><br/>
                Pour toute questions sur cette étude, merci de contacter Guillaume Gronier, chercheur en UX Design (guillaume.gronier@gmail.com)
                <br/><br/>
                Pour toute questions concernant l'application, rendez-vous sur <a href="https://github.com/dederobert/tours_de_hanoi" rel="noopener noreferrer" target="_blank">GitHub <i className="fab fa-github" title="GitHub du projet"></i></a>
            </p>
            <br/>
            <h3>Partager</h3>
            <div id="share-buttons">
                <a href="http://www.facebook.com/sharer.php?u=https://dederobert.github.io/tours_de_hanoi/"
                   target="_blank" rel="noopener noreferrer" >
                    <img src="https://simplesharebuttons.com/images/somacro/facebook.png" alt="Facebook"/>
                </a>
                <a href="https://twitter.com/share?url=https://dederobert.github.io/tours_de_hanoi/&amp;hashtags=TourDeHanoi"
                   target="_blank" rel="noopener noreferrer" >
                    <img src="https://simplesharebuttons.com/images/somacro/twitter.png" alt="Twitter"/>
                </a>
                <a href="http://reddit.com/submit?url=https://simplesharebuttons.com&amp;title=Tours de hano&iuml;"
                   target="_blank" rel="noopener noreferrer" >
                    <img src="https://simplesharebuttons.com/images/somacro/reddit.png" alt="Reddit"/>
                </a>
            </div>
        </div>
    );
}