import React from "react"

export default function Die(props) {

    const styles = {
        backgroundColor: props.isHeld ? "#59E391":"white"
    }

    return (
        <div className="dice--box" style={styles} onClick={props.holdDice}>
            <p className="dice--text">{props.value}</p>
        </div>
    )

}