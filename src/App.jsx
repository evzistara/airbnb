import './App.css'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Card from './components/Card'
import data from "./cardsInfo.js"


function App() {
  const cards = data.map( (item) => {
    return <Card 
    key={item.key}
    item = {item}
    />
  })

  return (
    <>
      <Navbar />
      <Hero />
      <section className="cards-list">
        {cards}
      </section>
      
    </>
  )
}

export default App
