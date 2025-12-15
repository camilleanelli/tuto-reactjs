import { useState } from "react"


// nouveau composant App2 pour un formulaire simple
function App2() {
  // const handleSubmit = (event) => {
  //   event.preventDefault()
  //   console.log(event.target.value)
  // }

  // textarea controle
  const [value, setValue] = useState('')
  const handleChange = (event) => {
    setValue(event.target.value)
    console.log(event.target.value)
  }
  // checkbox controle
  const [checked, setChecked] = useState(true)
  const toggleCheckbox = () => {
    setChecked(!checked)
  }

  //on cree un etat pour savoir si les CGU sont acceptées
  const [isTermAccepted, setIsTermAccepted] = useState(false)



  return <form>
    {/* // onCheck prop pour recuperer l'etat du checkbox est une callback avec on par convention pour un event */}
    <CGUcheckbox checked={isTermAccepted} onCheck={setIsTermAccepted} />
    {/* <input type='text' name="firstname" defaultValue='Joe'/> */}
    <textarea name="bio" value={value} onChange={handleChange}></textarea>
    <input type="checkbox" name="subscribe" checked={checked} onChange={toggleCheckbox} />
    {/* // checked permet de lier l'etat du checkbox a l'etat du composant */}
    <button disabled={!isTermAccepted} type="submit">Submit</button>
  </form>
}

function CGUcheckbox(checked, onCheck) {
  return  <div>
    <label>
      <input type="checkbox" checked={checked} onChange={(e) => onCheck(e.target.value)} />
      Accepter les CGU
    </label>
  </div>
}

export default App2
