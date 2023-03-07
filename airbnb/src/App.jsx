import './App.css'
import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Card from './components/card'
import cardData from './data'
import LocationData from './/datafile/journalData'
import Boxes from './datafile/boxes'
import JournalNav from './components/JournalNav'
import Location from './components/location'
import Contact from './components/Contact'
import Box from './components/Box'

function App(props) {

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

  const [boxes, setBox] = React.useState(Boxes)

  function toggle (id) {
    setBox(prevSquare=> {
      return prevSquare.map((box)=> {
        return box.id === id ? {...box, on: !box.on}: box
      })
    })
  }

  const squares = boxes.map(boxi => (
    <Box key={boxi.id}
         on={boxi.on} 
         func ={()=> toggle(boxi.id)}
    />
  ))

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
      {squares}
      
    </div>
  )
}

export default App
