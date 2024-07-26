import { Header} from './components/Header.jsx'
import { Footer } from './sections/Footer.jsx'
import './App.css'

function App() {
  return (
    <>
      <Header></Header>

      <section className="hero relative h-screen flex flex-col items-center justify-center bg-gradient-to-b from-transparent from-50% to-[#242424]">
            <video src="./Dune.mp4" loop muted autoPlay className=' absolute top-0 left-0 w-full h-full -z-10 object-cover object-center '></video>
            
            <div className="search animate-fade-in-up flex flex-row items-center justify-between bg-dark rounded-3xl w-1/2 px-8 py-4 gap-2 transition-shadow">
              <input type="text" placeholder="Introduzca una película" className="input text-white outline-none bg-transparent w-full"/>
              <i className="fa-solid fa-magnifying-glass text-primary cursor-pointer hover:bg-primary hover:text-dark p-2 rounded-full transition-colors"></i>
          </div>

      </section>

      <section className="p-4 res-content grid grid-cols-2 place-content-center min-h-full mx-0 my-auto gap-4 lg:grid-cols-3 ">
      </section>

      <Footer></Footer>
    </>
  )
}

export default App
