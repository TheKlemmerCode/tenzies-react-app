import { useEffect, useState } from 'react'
import {nanoid} from "nanoid"
import Confetti from 'react-confetti'

import './assets/css/App.css'

import Die from './assets/components/Die'

function App() {
  const [dice, setDice] = useState(allNewDice())
  const [tenzies, setTenzies] = useState(false)

  useEffect(() => {
    const allEqual = dice.every(die => die.value === dice[0].value && die.isHeld)
    setTenzies(allEqual)
    if (allEqual) {
      console.log("You win!");
    }
  }, [dice])
  
  function allNewDice() {
    const newDice = []
    for (let i = 0; i < 10; i++) {
        newDice.push(newDie())
      }  
    return newDice
  }
  
  function newDie() {
    return {
      value: Math.ceil(Math.random() * 6),
      isHeld: false,
      id: nanoid()
    }
  }

  function newGame() {
    setDice(allNewDice);
  }

  function rollDice() {
    setDice(oldDice => oldDice.map(die => {
      return die.isHeld ? die : newDie()
    }))
  }

  function holdDie(id) {
    setDice(oldDice => oldDice.map(die => {
      return die.id === id ? {...die, isHeld: !die.isHeld} : die
    }))
  }

  const diceElements = dice.map(die => {
    return (
      <Die 
        holdDie={() => holdDie(die.id)}
        isHeld={die.isHeld}
        key={die.id} 
        value={die.value} 
      />
    )
  })
  
  return (
      <main>
        {tenzies && <Confetti />}
        <div className='container'>
          <h1 className="title">Tenzies</h1>
          <p className="instructions">Roll until all dice are the same. Click each die to freeze it at its current value between rolls.</p>
          <div className='dice-container'>
            {diceElements}
          </div>
          <button className='roll-button' onClick={tenzies? newGame : rollDice}>{tenzies ? "New Game" : "Roll"}</button>
        </div>
      </main>
  )
}

export default App
