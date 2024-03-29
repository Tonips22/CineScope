import { useState } from 'react'
import { Header} from './components/Header.jsx'
import { Content } from './sections/Content.jsx'
import { Hero } from './sections/Hero.jsx'

function App() {
  return (
    <>
    <Header></Header>
    <Hero></Hero>
    <Content></Content>
    </>
  )
}

export default App
