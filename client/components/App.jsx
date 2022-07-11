import React from 'react'
import AddPrompt from './AddPrompt'
import Prompts from './Prompts'

function App () {
  return (
    <>
      <header className="header">
        <h1>My Collection</h1>
      </header>
      <section className="main">
        <Prompts />
        <AddPrompt />
      </section>
    </>
  )
}

export default App
