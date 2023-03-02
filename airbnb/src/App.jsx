import './App.css'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Card from './components/card'
import cardData from './data'
import LocationData from './/datafile/journalData'
import JournalNav from './components/JournalNav'
import Location from './components/location'
import Contact from './components/Contact'

function App() {

  const card =  cardData.map((card) => {
    return (
      <Card
        key={card.id}
        {...card}
      />
    )
  })

  const JournalLocation = LocationData.map((location) => {
    return (
      <Location
        key={location.id}
        {...location}
      />
    )
  })

  return (
    <div className="App">
      <Navbar />
      <Hero />
      <section className="cardList">
        {card}
      </section>
      <JournalNav />
      {JournalLocation}
      <Contact />
      
    </div>
  )
}

export default App
