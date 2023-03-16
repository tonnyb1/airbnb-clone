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
import Joke from './components/Joke'
import jokes from './datafile/jokes'
import jokesData from './datafile/jokes'
import FormData from './components/FormData'
import WindowTracker from './components/WindowTracker'

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

  const jokes = jokesData.map(joke => (
    <Joke 
      id = {joke.id}
      setup= {joke.setup}
      punchline= {joke.punchline}
    />
  ))

  const [show, setShow] = React.useState(true)

  function toggleShow() {
    setShow(prevShow => !prevShow)
  }

  

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
      {jokes}
      <FormData />
      <div className="container">
        <button onClick={toggleShow} className="buttonWin">
            Toggle Window Tracker
        </button>
        {show && <WindowTracker />}
      </div>
    </div>
  )
}

export default App
