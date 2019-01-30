import React from 'react'

export function Congratulation(props){
    return (
        <div className="congratulation">
            <p>Félicitation vous avez résolu le problème. <br/> Pouvez vous prendre quelques minutes pour répondre à
                ce questionnaire :</p><br/>
            <br/>
            <a href="https://github.com/dederobert/tours_de_hanoi" rel="noopener noreferrer" target="_blank"><i className="fab fa-github" title="GitHub du projet"></i></a>
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