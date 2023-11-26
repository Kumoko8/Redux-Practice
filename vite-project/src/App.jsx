import { useState } from 'react'

function NameList(){
  const [list, setList] = useState(["John", "Mark"])
  const [name, setName] = useState("")

  const onAddName = () => {
    setList([...list, name])
    setName("")
  }

  return (
    <div>
      <ul>
        {list.map((name) => (

        <li key={name}> {name}</li>
        ))}
      </ul>
      <input
      type="text"
      value={name}
      onChange={(e) => setName(e.target.value)}
      />
      <button
      onClick= {onAddName}>
        Add Name
      </button>

    </div>
  )
}

function Counter() {
  let [count, setCount] = useState(10);

  function addOne() {
    setCount(count + 1);
  }
  return (
    <div className="App">
      <button
        onClick={addOne}>
        Count = {count}
      </button>
    </div>
  );

}

function App(){
  return(
    <div>
      <NameList/>
      <Counter/>
      <Counter/>
      <Counter/>
    </div>
  )
}
export default App;
