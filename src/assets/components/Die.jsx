import '../css/Die.css'

function Die({ holdDie, isHeld, value }) {
    return (
        <div onClick={holdDie} className={`die-face ${isHeld ? 'die-selected' : 'die-unselected'}`}>
            {Array.from(Array(value), (_, i) => <span key={i} className="pip"> </span>)}
        </div>
    )
  }
  
  export default Die
  