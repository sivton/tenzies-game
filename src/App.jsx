import React from 'react'
import Die from "./components/Die"
import { nanoid } from "nanoid"

export default function App() {

    const [dice, setDice] = React.useState(allNewDice)

    function allNewDice() {
        let newDice = [];
        for (let i = 0; i < 10; i++) {
            newDice.push({
                id: nanoid(),
                value: Math.floor(Math.random() * 6) + 1,
                isHeld: true
            });
        }
        window.console.log(newDice);
        return newDice;
    }

    function rollDice() {
        setDice(allNewDice())
    }

    function holdDice(id){
        console.log(id)
    }

    const diceElements = dice.map(die =>
        <Die 
            key={die.id} 
            value={die.value} 
            isHeld={die.isHeld} 
            holdDice={() => holdDice(die.id)}
        />
    )

    return (
        <main>
            <div className="dice--container">
                {diceElements}
            </div>
            <button className="roll--dice" onClick={rollDice}>Roll</button>
        </main>
    )
}

