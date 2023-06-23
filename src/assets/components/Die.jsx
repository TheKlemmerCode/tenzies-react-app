import '../css/Die.css'

function Die({ value }) {
    return (
        <div className='die-face'>
            {/*<h2 className="die-number">{value}</h2>*/}
            {Array.from(Array(value), (_, i) => <span key={i} className="pip"> </span>)}
        </div>
    )
  }
  
  export default Die
  