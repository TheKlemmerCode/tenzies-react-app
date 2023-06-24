import { useEffect, useState } from 'react'
import {nanoid} from "nanoid"

import './assets/css/App.css'

import Die from './assets/components/Die'

function App() {
  const [dice, setDice] = useState(allNewDice())
  const [tenzies, setTenzies] = useState(false)

  useEffect(() => {
    console.log("Dice Changed")
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
        <div className='container'>
          <h1 className="title">Tenzies</h1>
          <p className="instructions">Roll until all dice are the same. Click each die to freeze it at its current value between rolls.</p>
          <div className='dice-container'>
            {diceElements}
          </div>
          <button className='roll-button' onClick={rollDice}>Roll</button>
        </div>
      </main>
  )
}

export default App
