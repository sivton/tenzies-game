import React from 'react'
import Die from "./components/Die"
import { nanoid } from "nanoid"
import useWindowSize from 'react-use/lib/useWindowSize'
import Confetti from 'react-confetti'

export default function App() {

    const [dice, setDice] = React.useState(allNewDice())
    const [tenzies, setTenzies] = React.useState(false)
    const [rolls, setRolls] = React.useState(0)

    React.useEffect(() => {
        const allHeld = dice.every(die => die.isHeld)
        const firstValue = dice[0].value
        const allSameValue = dice.every(die => die.value===firstValue)
        if (allHeld && allSameValue) {
            setTenzies(true)
            // console.log("You won!")
        }
    }, [dice])


    function generateNewDie(){
        return {
            id: nanoid(),
            value: Math.ceil(Math.random() * 6),
            isHeld: false   
        }
    }

    function allNewDice() {
        let newDice = [];
        for (let i = 0; i < 10; i++) {
            newDice.push({
                id: nanoid(),
                value: Math.floor(Math.random() * 6) + 1,
                isHeld: false
            });
        }
        return newDice;
    }


    function rollDice() {
        if (!tenzies) {
            setDice(oldDice => oldDice.map(die => {
                return die.isHeld ? die : generateNewDie()
            }))
        } else {
            setTenzies(false)
            setDice(allNewDice)
        }
        setRolls(oldRolls => oldRolls + 1)
    }

    function holdDice(id){
        setDice(oldDice => oldDice.map(die => {
            return die.id === id ? {...die, isHeld:!die.isHeld} : die
        }))
    }

    const diceElements = dice.map(die =>
        <Die 
            key={die.id} 
            value={die.value} 
            isHeld={die.isHeld} 
            holdDice={() => holdDice(die.id)}
        />
    )

    const { width, height } = useWindowSize()

    return (
        <main>
            {tenzies && <Confetti width={width} height={height}/>}
            <h1 className="title">Tenzies</h1>
            <p className="instructions">Roll until all dice are the same. Click each die to freeze it at its current value between rolls.</p>
            <p className="rolls">Rolls: {rolls}</p>
            <div className="dice--container">
                {diceElements}
            </div>
            <button className="roll--dice" onClick={rollDice}>{tenzies ? "New Game" : "Roll"}</button>
        </main>
    )
}

