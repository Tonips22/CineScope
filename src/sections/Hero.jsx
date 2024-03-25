import { Search } from '../components/Search.jsx'

export function Hero (){

    return(
        <section className="relative h-screen flex flex-col items-center justify-center bg-gradient-to-b from-transparent from-30% to-dark to-80%">
            <video src="./Dune.mp4" loop muted autoPlay className=' absolute top-0 left-0 w-full h-full -z-10 object-cover object-center '></video>
            <Search width={'1/2'}></Search>
        </section>
    )
}


