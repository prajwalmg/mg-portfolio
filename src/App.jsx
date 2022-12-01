import React from 'react'

import './App.css'
import Github from './components/Github/Github'
import Introduction from './components/Introduction/Introduction'
import Projects from './components/Projects/Projects'

function App() {
  return (
    <div className="App">
      <Introduction />
      <Projects />
      <Github />
    </div>
  )
}

export default App
