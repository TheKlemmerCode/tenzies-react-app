import { useEffect, useState } from 'react'
import {nanoid} from "nanoid"

import Die from './assets/components/Die'

import './assets/css/App.css'

function App() {
  const [dice, setDice] = useState(allNewDice())
    
  function allNewDice() {
      const newDice = []
      for (let i = 0; i < 10; i++) {
          newDice.push({
            value: Math.ceil(Math.random() * 6),
            isHeld: false,
            id: nanoid()
          })
      }
      return newDice
  }

  function rollDice() {
    setDice(allNewDice)
  }

  const diceElements = dice.map(die => <Die key={die.id} value={die.value} />)
  
  return (
      <main>
        <div className='container'>
          <div className='dice-container'>
            {diceElements}
          </div>
          <button className='roll-button' onClick={rollDice}>Roll</button>
        </div>
      </main>
  )
}

export default App
