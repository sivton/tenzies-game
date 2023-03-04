import React from "react"

export default function Die(props) {

    let dieFace = "";

    switch (props.value) {
        case 1:
            dieFace = "/images/dieFace1.png";
            break
        case 2:
            dieFace = "/images/dieFace2.png";
            break
        case 3:
            dieFace = "/images/dieFace3.png";
            break
        case 4:
            dieFace = "/images/dieFace4.png";
            break
        case 5:
            dieFace = "/images/dieFace5.png";
            break
        case 6:
            dieFace = "/images/dieFace6.png";
            break
        default:
            break
    }

    const styles = {
        backgroundColor: props.isHeld ? "#59E391":"white"
    }

    return (
        <div className="dice--box" style={styles} onClick={props.holdDice}>
            {/* <p className="dice--text">{props.value}</p> */}
            <img className="dice--img" src={`${dieFace}`} />
        </div>
    )

}