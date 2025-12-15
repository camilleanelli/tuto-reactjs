import { useState } from "react"

const title = "Welcome <strong>Camille</strong>to My React App"
const style = {color: 'red', backgroundColor: 'lightgray'}
const showTitle = true
const todos = [
  { id: 1, text: 'Learn React' },
  { id: 2, text: 'Build a React App' },
  { id: 3, text: 'Deploy the App' }
]
// on peut renvoyer un neu react comme un nombre une string ou variable
// l'attribut style peut prendre un objet tout comme les autre attributs
// l'attribut listener onClick prend une fonction
// le showTitle permet de faire un rendu conditionnel True && True = True
// mais on peut utliser la syntaxe ternaire aussi ShowTitle ? <h1>...</h1> : <h1>Demo</h1>
// le system de key dans une liste permet d'identifier chaque element de la liste de facon unique
function App() {

  const handleClick = () => {
    alert('Button clicked!')
  }

  // incrementer un compteur
  // let count = 0
  // on va utiliser le hook useState pour creer un etat local au composant
  // setCount est une fonction qui permet de modifier l'etat count
  const [count, setCount] = useState(0)
// setcount permet de modifier la valeur de count et de re-render le composant

  const increment = () => {
    console.log('Increment clicked')
    // pour prendre la valeur a l'etat actuel de count on peut utiliser une fonction
    // setCount((prevCount) => prevCount + 1)
    setCount(count + 1)
  }

  // incrementer un age de l'utilisateur
  const [user, setUser] = useState({name: 'Camille', age: 25})

  const incrementAge = () => {
    // on met a jour l'age de l'utilisateur en copiant les autres proprietes avec le spread operator
    setUser({...user, age: user.age + 1})
  }
  return <>
      <p>Compteur: {count}</p>
      <button onClick={increment}>Increment</button>
      // afficher les infos de l'utilisateur
      <p>Nom: {user.name}, Age: {user.age}</p>
      <button onClick={incrementAge}>Increment Age</button>
      <Title color="blue">Hello from Title Component</Title>
      {
        showTitle && <h1 onClick={handleClick} id="title" className="title">{title}</h1>
      }
      <input type="text" style={style} placeholder="Enter text here" />
      <p>This is a sample React application.</p>
      <ul>
        {
          todos.map(todo =>(<li key={todo.id}>{todo.text}</li>))
        }
      </ul>


  </>

}

// on peut creer d'autres composants et les importer ici pour les utiliser
// children permet de recuperer le contenu entre les balises du composant
// color et hidden sont des props que l'on peut passer au composant
// composant Title toujours en PascalCase
function Title ({color, children, hidden}) {
  console.log(color)
  console.log(children)
  if (hidden) return null

  // props = {id: 'main-title', className: 'title'}
  // on peut ajouter des attributs dynamiquement avec le spread operator {...props}
  const props = {id: 'main-title', className: 'title'}
  return <h1 style={{color: color}} {...props}>{children}</h1>
}

export default App
