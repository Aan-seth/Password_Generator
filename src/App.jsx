import { useState } from 'react'
import './App.css'
import {UC,LC,NC,SC} from'./data/PassChar'


function App() {
  let [uppercase, setUppercase] = useState(false);
  let [lowercase, setLowercase] = useState(false);
  let [numbers, setNumbers] = useState(false);
  let [symbols, setSymbols] = useState(false);
  let [passwordlength, setPasswordlength] = useState(10)
  let [fpass, SetFpass] =useState('')

  let createPassword = () => {
    let finalPass=''
    let charset = ''
    if (uppercase || lowercase || numbers || symbols) {
      if (uppercase)charset += UC;
      if(lowercase)charset+=LC;
      if(numbers)charset+=NC;
      if(symbols)charset+=SC;
      for(let i=0;i<passwordlength;i++){
        finalPass+=charset.charAt(Math.floor(Math.random()*charset.length))
      }
      SetFpass(finalPass)
    }
    else {
      alert("Please select anyone checkbox...")
    }
  }

  let copypass=()=>{
    navigator.clipboard.writeText(fpass)
  }

  return (
    <>
      <div className='passwordbox'>
        <h2>Password Generator</h2>
        <div className='passwordin'>
          <input type="text" readOnly value={fpass} /><button onClick={copypass}>Copy</button>
        </div>
        <div className='passlength'>
          <label>Password length</label>
          <input type="number" value={passwordlength} onChange={(event)=>setPasswordlength(event.target.value)} max={20} min={10} />
        </div>
        <div className='passlength'>
          <label>Including uppercase letters</label>
          <input type="checkbox" checked={uppercase} onChange={() => setUppercase(!uppercase)} />
        </div>
        <div className='passlength'>
          <label>Including lowercase letters</label>
          <input type="checkbox" checked={lowercase} onChange={() => setLowercase(!lowercase)} />
        </div>
        <div className='passlength'>
          <label>Including number</label>
          <input type="checkbox" checked={numbers} onChange={() => setNumbers(!numbers)} />
        </div>
        <div className='passlength'>
          <label>Including symbols</label>
          <input type="checkbox" checked={symbols} onChange={() => setSymbols(!symbols)} />
        </div>
        <button className='btn' onClick={createPassword}>Generate Password</button>
      </div>
    </>
  )
}

export default App
