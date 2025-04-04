import './App.css'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Card from './components/Card'
import Wedding from "./assets/wedding-photography.png"
import Mountain from "./assets/mountain-bike.png"
import Zaferes from "./assets/zaferes.png"


function App() {

  return (
    <>
      <Navbar />
      <Hero />
      <section className="cards-list">
        <Card 
        img={Zaferes}
        status="SOLD OUT"
        score="5.0"
        reviewNumber={6}
        name="Life lessons with Katie Zaferes"
        price={136}
        />
      
        <Card 
        img={Wedding}
        status="ONLINE"
        score="5.0"
        reviewNumber={30}
        name="Learn wedding photography"
        price={125}
        />
        
        <Card 
        img={Mountain}
        score="4.8"
        reviewNumber={2}
        name="Group Mountain Biking"
        price={50}
        />
      </section>
      
    </>
  )
}

export default App
