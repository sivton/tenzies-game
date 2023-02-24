import React from "react"

export default function Die(prop) {
    return (
        <div className="dice--box">
            <p className="dice--text">{prop.value}</p>
        </div>
    )
}