import { Header} from './components/Header.jsx'
import { Search } from './components/Search.jsx'
import { Footer } from './sections/Footer.jsx'

function App() {
  return (
    <>
      <Header></Header>

      <section className="hero relative h-screen flex flex-col items-center justify-center bg-gradient-to-b from-transparent from-50% to-[#242424]">
            <video src="./Dune.mp4" loop muted autoPlay className=' absolute top-0 left-0 w-full h-full -z-10 object-cover object-center '></video>
            <Search></Search>
      </section>

      <section className="p-4 res-content grid grid-cols-2 place-content-center min-h-full mx-0 my-auto gap-4 lg:grid-cols-3 ">
      </section>

      <Footer></Footer>
    </>
  )
}

export default App
