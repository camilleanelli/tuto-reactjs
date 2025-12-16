import { useEffect, useState, useMemo } from "react"
import React from "react"

function AppHook() {
  const [number, setNumber] = useState("")
  const [counter, setCounter] = useState(number ? parseInt(number) : 0)


  // Mettre à jour le compteur lorsque le nombre change
  React.useEffect(() => {
    setCounter(number ? parseInt(number) : 0)
  }, [number])

  const handleChange = (value) => {
    setNumber(value)
    setCounter(value)
  }

  useEffect(() => {
    const timer = setInterval(() => {
    setCounter((prevCounter) => prevCounter <=1 ? 0 : prevCounter - 1)
  }, 1000)
    return () => clearInterval(timer)
  }, [number])
//clearInterval permet de nettoyer le timer lorsque le composant est démonté ou lorsque le nombre change

  const triggerTimer = () => {
    setCounter(number ? parseInt(number) : 0)
  }

  // pour useMemo
  const [name, setName] = useState("")
  const [password, setPassword] = useState("")
  // on cree un fonction pour gerer la securite du mot de passe
  const security = useMemo(() => {
    return calculatePasswordSecurity(password)
    }, [password])

  return <div>
    <h1>Utilisation des useEffect </h1>
    <Input type="number" placeholder="Entrez un chiffre" onChange={handleChange} value={number}/>
    <p>Compteur: {counter}</p>
    <button onClick={triggerTimer}>Again</button>

    <h1>Utilisation de useMemo </h1>
    {/* // useMemo permet de mémoriser une valeur calculée entre les rendus */}
    <Input type="text" placeholder="Nom" onChange={setName} value={name} label="Nom"/>
    <Input type="password" placeholder="Mot de passe" onChange={setPassword} value={password} label="Mot de passe"/>
    securite du mot de passe: {security}

  </div>
}

function Input({ value, onChange, placeholder, label, type }) {
  return <input
    label={label}
    type={type}
    className="form-control"
    value={value}
    onChange={(e) => onChange(e.target.value)}
    placeholder={placeholder}
  />
}

function calculatePasswordSecurity(pwd = '') {
  if (pwd.length > 8 && /[A-Z]/.test(pwd) && /[0-9]/.test(pwd)) {
    return "Fort"
  } else if (pwd.length >= 6) {
    return "Moyen"
  } else {
    return "Faible"
  }
}

export default AppHook
