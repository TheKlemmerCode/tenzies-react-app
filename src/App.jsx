import { useEffect, useState } from 'react'
import './assets/css/App.css'
import Die from './assets/components/Die'

function App() {
  
  return (
      <main>
        <div className='container'>
          <div className='dice-container'>
            <Die value={Math.floor(Math.random() * 6) + 1} />
            <Die value={Math.floor(Math.random() * 6) + 1} />
            <Die value={Math.floor(Math.random() * 6) + 1} />
            <Die value={Math.floor(Math.random() * 6) + 1} />
            <Die value={Math.floor(Math.random() * 6) + 1} />
            <Die value={Math.floor(Math.random() * 6) + 1} />
            <Die value={Math.floor(Math.random() * 6) + 1} />
            <Die value={Math.floor(Math.random() * 6) + 1} />
            <Die value={Math.floor(Math.random() * 6) + 1} />
            <Die value={Math.floor(Math.random() * 6) + 1} />
          </div>
        </div>
      </main>
  )
}

export default App
