import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ProdctCard from './componants/ProductCard'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <ProdctCard name ="Laptop" Price ="100,000LKR" img ="https://picsum.photos/id/1/200/300"/>
      </div>
        
    </>
  )
}

export default App
