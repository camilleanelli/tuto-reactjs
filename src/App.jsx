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

  return <>
      <Title />
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
function Title () {
  return <h1>This is the Title Component</h1>
}

export default App
