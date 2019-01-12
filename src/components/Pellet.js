import React from "react";

export function Pellet(props) {
        return (
            <button className={"pellet pellet-"+props.size+" tower-"+props.towerSize+(props.clicked?" clicked":"")+(props.ghost?" ghost":"")+(props.invalid?" invalid":"")} onClick={props.onClick}>
                {props.size}
                </button>
        )
}