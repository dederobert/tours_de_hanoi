import React from 'react'

export function Ladder(props) {

        return (
            <>
                <div className="rateInfo">{props.minVal}</div>
                <input type="radio" value="1" name={props.name} required
                       onChange={(event) => props.handleChange(event)}/>
                <input type="radio" value="2" name={props.name} onChange={(event) => props.handleChange(event)}/>
                <input type="radio" value="3" name={props.name} onChange={(event) => props.handleChange(event)}/>
                <input type="radio" value="4" name={props.name} onChange={(event) => props.handleChange(event)}/>
                <input type="radio" value="5" name={props.name} onChange={(event) => props.handleChange(event)}/>
                <input type="radio" value="6" name={props.name} onChange={(event) => props.handleChange(event)}/>
                <input type="radio" value="7" name={props.name} onChange={(event) => props.handleChange(event)}/>
                <div className="rateInfo">{props.maxVal}</div>
            </>
        );
}