import React from 'react'
import Die from "./components/Die"

export default function App() {

    const [dice, setDice] = React.useState(allNewDice)

    function allNewDice(){
        let newDice = [];
        for (let i=0;i<10;i++){
            newDice.push(Math.floor(Math.random() * 6) + 1);
        }
        return newDice;
    }

    const diceElements = dice.map(num => <Die num={num} />)

    return (
        <main>
            <div className="dice--container">
                {diceElements}
            </div>
        </main>
    )
}

