import React from "react";



export class Questions extends React.Component{

    constructor(props) {
        super(props);
        this.state = {
            age: "-1",
            gender: "-1",
            rate_interest: "-1",
            rate_stimu: "-1",
            rate_visu: "-1",
            rate_complexity: "-1",
            rate_reactivity: "-1",
            evaluate_time: "-1",
            time_long: "-1",
            rate_focus: "-1",
            rate_raisonnable: "-1",
            rate_time_satis: "-1",
            rate_wait: "-1",
        }
    }

    save() {
        const params =
            "user=" + this.props.user +
            "&game_type=" + this.props.gameType +
            "&clicks=" + this.props.clicks +
            "&timer=" + this.props.timer +
            "&age=" + this.state.age +
            "&gender=" + this.state.gender +
            "&rate_interest=" + this.state.rate_interest +
            "&rate_stimu="+ this.state.rate_stimu +
            "&rate_visu=" + this.state.rate_visu +
            "&rate_complexity=" + this.state.rate_complexity +
            "&rate_reactivity=" + this.state.rate_reactivity +
            "&evaluate_time=" + this.state.evaluate_time +
            "&time_long=" + this.state.time_long +
            "&rate_focus=" + this.state.rate_focus +
            "&rate_raisonnable=" + this.state.rate_raisonnable +
            "&rate_time_satis=" + this.state.rate_time_satis +
            "&rate_wait=" + this.state.rate_wait;

        const xhttp = new XMLHttpRequest();
        xhttp.open("GET", "https://unrepented-apportio.000webhostapp.com/saver_question_hanoi.php?"+params);
        xhttp.send();
    }

    render() {
        return(
            <div className="Questions">
                <form onSubmit={() => this.handleSubmit()}>
                    <label htmlFor="age">Quel est votre âge ? <i className="req">*</i></label>
                    <input type="number" name="age" id="age" min="10" max="99" required onChange={(event) => this.handleChange(event)}/>
                    <br/><br/>
                    <label htmlFor="gender">Etes-vous ? <i className="req">*</i></label><br/>
                    <input type="radio" name="gender" value="homme" onChange={(event) => this.handleChange(event)}/>Un homme <br/>
                    <input type="radio" name="gender" value="femme" onChange={(event) => this.handleChange(event)}/>Une femme

                    <br/><br/>
                    <label htmlFor="">Globalement, avez-vous trouvé le jeu de la Tour de Hanoï ? <span className="req">*</span></label><br/>
                    <div className="rateInfo">Pas du tout intéressant</div>
                    <input type="radio" value="1" name="rate_interest" required onChange={(event) => this.handleChange(event)}/>
                    <input type="radio" value="2" name="rate_interest" onChange={(event) => this.handleChange(event)}/>
                    <input type="radio" value="3" name="rate_interest" onChange={(event) => this.handleChange(event)}/>
                    <input type="radio" value="4" name="rate_interest" onChange={(event) => this.handleChange(event)}/>
                    <input type="radio" value="5" name="rate_interest" onChange={(event) => this.handleChange(event)}/>
                    <input type="radio" value="6" name="rate_interest" onChange={(event) => this.handleChange(event)}/>
                    <input type="radio" value="7" name="rate_interest" onChange={(event) => this.handleChange(event)}/>
                    <div className="rateInfo">Tout à fait intéressant</div>
                    <br/>
                    <div className="rateInfo">Pas du tout stimulant</div>
                    <input type="radio" value="1" name="rate_stimu" required onChange={(event) => this.handleChange(event)}/>
                    <input type="radio" value="2" name="rate_stimu" onChange={(event) => this.handleChange(event)}/>
                    <input type="radio" value="3" name="rate_stimu" onChange={(event) => this.handleChange(event)}/>
                    <input type="radio" value="4" name="rate_stimu" onChange={(event) => this.handleChange(event)}/>
                    <input type="radio" value="5" name="rate_stimu" onChange={(event) => this.handleChange(event)}/>
                    <input type="radio" value="6" name="rate_stimu" onChange={(event) => this.handleChange(event)}/>
                    <input type="radio" value="7" name="rate_stimu" onChange={(event) => this.handleChange(event)}/>
                    <div className="rateInfo">Tout à fait stimulant</div>

                    <br/><br/>
                    <label htmlFor="">Globalement, comment avez-vous trouvé l’application en ligne qui vous a permis de jouer ? <span className="req">*</span></label><br/>
                    <div className="rateInfo">Pas du tout attrayante</div>
                    <input type="radio" value="1" name="rate_visu" required onChange={(event) => this.handleChange(event)}/>
                    <input type="radio" value="2" name="rate_visu" onChange={(event) => this.handleChange(event)}/>
                    <input type="radio" value="3" name="rate_visu" onChange={(event) => this.handleChange(event)}/>
                    <input type="radio" value="4" name="rate_visu" onChange={(event) => this.handleChange(event)}/>
                    <input type="radio" value="5" name="rate_visu" onChange={(event) => this.handleChange(event)}/>
                    <input type="radio" value="6" name="rate_visu" onChange={(event) => this.handleChange(event)}/>
                    <input type="radio" value="7" name="rate_visu" onChange={(event) => this.handleChange(event)}/>
                    <div className="rateInfo">Tout à fait attrayante</div>
                    <br/>
                    <div className="rateInfo">Très compliquée à utiliser</div>
                    <input type="radio" value="1" name="rate_complexity" required onChange={(event) => this.handleChange(event)}/>
                    <input type="radio" value="2" name="rate_complexity" onChange={(event) => this.handleChange(event)}/>
                    <input type="radio" value="3" name="rate_complexity" onChange={(event) => this.handleChange(event)}/>
                    <input type="radio" value="4" name="rate_complexity" onChange={(event) => this.handleChange(event)}/>
                    <input type="radio" value="5" name="rate_complexity" onChange={(event) => this.handleChange(event)}/>
                    <input type="radio" value="6" name="rate_complexity" onChange={(event) => this.handleChange(event)}/>
                    <input type="radio" value="7" name="rate_complexity" onChange={(event) => this.handleChange(event)}/>
                    <div className="rateInfo">Très facile à utiliser</div>
                    <br/>
                    <div className="rateInfo">Pas du tout réactive</div>
                    <input type="radio" value="1" name="rate_reactivity" required onChange={(event) => this.handleChange(event)}/>
                    <input type="radio" value="2" name="rate_reactivity" onChange={(event) => this.handleChange(event)}/>
                    <input type="radio" value="3" name="rate_reactivity" onChange={(event) => this.handleChange(event)}/>
                    <input type="radio" value="4" name="rate_reactivity" onChange={(event) => this.handleChange(event)}/>
                    <input type="radio" value="5" name="rate_reactivity" onChange={(event) => this.handleChange(event)}/>
                    <input type="radio" value="6" name="rate_reactivity" onChange={(event) => this.handleChange(event)}/>
                    <input type="radio" value="7" name="rate_reactivity" onChange={(event) => this.handleChange(event)}/>
                    <div className="rateInfo">Très réactive</div>
                    <br/><br/>

                    {this.props.gameType !== -1?
                        <div className="Attente">
                            <label htmlFor="evaluate_time">Combien de temps pensez-vous avoir attendu entre chaque coup ? <span className="req">*</span></label><br/>
                            <select name="evaluate_time" id="evaluate_time" required onChange={(event) => this.handleChange(event)}>
                                <option disabled hidden selected>Choisissez</option>
                                <option value="1">1s</option>
                                <option value="2">2s</option>
                                <option value="3">3s</option>
                                <option value="4">4s</option>
                                <option value="5">5s</option>
                                <option value="6">6s</option>
                                <option value="7">7s</option>
                                <option value="8">8s</option>
                                <option value="9">9s</option>
                                <option value="10">10s</option>
                                <option value="11">11s</option>
                                <option value="12">12s</option>
                                <option value="13">13s</option>
                                <option value="14">14s</option>
                                <option value="15">15s</option>
                            </select>
                            <br/><br/>

                            <label htmlFor="time_long">Vous attendiez-vous à attendre plus ou moins longtemps entre chaque coup ? <span className="req">*</span></label><br/>
                            <input type="radio" value="moins" name="time_long" required onChange={(event) => this.handleChange(event)}/>Moins longtemps <br/>
                            <input type="radio" value="plus" name="time_long" onChange={(event) => this.handleChange(event)}/>Plus longtemps <br/>
                            <br/>

                            <label htmlFor="">Vous &ecirc;tes-vous focalisé(e) sur ce temps d'attente ? <span className="req">*</span></label><br/>
                            <div className="rateInfo">Pas du tout focalisé(e)</div>
                            <input type="radio" value="1" name="rate_focus" required onChange={(event) => this.handleChange(event)}/>
                            <input type="radio" value="2" name="rate_focus" onChange={(event) => this.handleChange(event)}/>
                            <input type="radio" value="3" name="rate_focus" onChange={(event) => this.handleChange(event)}/>
                            <input type="radio" value="4" name="rate_focus" onChange={(event) => this.handleChange(event)}/>
                            <input type="radio" value="5" name="rate_focus" onChange={(event) => this.handleChange(event)}/>
                            <input type="radio" value="6" name="rate_focus" onChange={(event) => this.handleChange(event)}/>
                            <input type="radio" value="7" name="rate_focus" onChange={(event) => this.handleChange(event)}/>
                            <div className="rateInfo">Complètement focalisé(e)</div>
                            <br/>
                            <label htmlFor="">Avez-vous trouvé cette durée d'attente raisonnable ? <span className="req">*</span></label><br/>
                            <div className="rateInfo">Pas du tout raisonnable</div>
                            <input type="radio" value="1" name="rate_raisonnable" required onChange={(event) => this.handleChange(event)}/>
                            <input type="radio" value="2" name="rate_raisonnable" onChange={(event) => this.handleChange(event)}/>
                            <input type="radio" value="3" name="rate_raisonnable" onChange={(event) => this.handleChange(event)}/>
                            <input type="radio" value="4" name="rate_raisonnable" onChange={(event) => this.handleChange(event)}/>
                            <input type="radio" value="5" name="rate_raisonnable" onChange={(event) => this.handleChange(event)}/>
                            <input type="radio" value="6" name="rate_raisonnable" onChange={(event) => this.handleChange(event)}/>
                            <input type="radio" value="7" name="rate_raisonnable" onChange={(event) => this.handleChange(event)}/>
                            <div className="rateInfo">Tout à fait raissonable</div>
                            <br/>
                            <label htmlFor="">Etes-vous satisfait de cette durée d'attente ? <span className="req">*</span></label><br/>
                            <div className="rateInfo">Pas du tout satisfait</div>
                            <input type="radio" value="1" name="rate_time_satis" required onChange={(event) => this.handleChange(event)}/>
                            <input type="radio" value="2" name="rate_time_satis" onChange={(event) => this.handleChange(event)}/>
                            <input type="radio" value="3" name="rate_time_satis" onChange={(event) => this.handleChange(event)}/>
                            <input type="radio" value="4" name="rate_time_satis" onChange={(event) => this.handleChange(event)}/>
                            <input type="radio" value="5" name="rate_time_satis" onChange={(event) => this.handleChange(event)}/>
                            <input type="radio" value="6" name="rate_time_satis" onChange={(event) => this.handleChange(event)}/>
                            <input type="radio" value="7" name="rate_time_satis" onChange={(event) => this.handleChange(event)}/>
                            <div className="rateInfo">Tout à fait satisfait</div>
                            <br/>
                            <label htmlFor="">Avez-vous trouvé cette durée d'attente justifiée ? <span className="req">*</span></label><br/>
                            <div className="rateInfo">Pas du tout justifiée</div>
                            <input type="radio" value="1" name="rate_wait" required onChange={(event) => this.handleChange(event)}/>
                            <input type="radio" value="2" name="rate_wait" onChange={(event) => this.handleChange(event)}/>
                            <input type="radio" value="3" name="rate_wait" onChange={(event) => this.handleChange(event)}/>
                            <input type="radio" value="4" name="rate_wait" onChange={(event) => this.handleChange(event)}/>
                            <input type="radio" value="5" name="rate_wait" onChange={(event) => this.handleChange(event)}/>
                            <input type="radio" value="6" name="rate_wait" onChange={(event) => this.handleChange(event)}/>
                            <input type="radio" value="7" name="rate_wait" onChange={(event) => this.handleChange(event)}/>
                            <div className="rateInfo">Tout à fait justifiée</div>
                            <br/>
                        </div>
                    :null}
                    <button type="submit" className="btn">Valider mes réponses</button>
                </form>
            </div>
        )
    }

    handleChange(event) {
        const value = event.target.value;
        const name = event.target.name;
        this.setState({
            [name]: value,
        });
        this.setState((state, props)=>({
            btnDisabled: state.gender === -1 || state.age === -1 ||
                state.preference === -1 ,
        }));
    }

    handleSubmit() {
        this.save();
        this.props.next();
    }
}