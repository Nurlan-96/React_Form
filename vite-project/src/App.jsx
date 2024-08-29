import React from 'react'
import Input from './components/Input'

function App() {
  const handleSubmit = (e) => {
    e.preventDefault();
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <Input type="text" inputtext="Name"/>
        <Input type="text" inputtext="Surname"/>
        <Input type="number" inputtext="Age"/>
        <Input type="email" inputtext="Email" />
        <Input type="password" inputtext="Password"/>
        <button type="submit">Submit</button>
      </form>
    </div>
  )
}

export default App
