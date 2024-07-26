export function Footer(){
    const date = new Date()
    const year = date.getFullYear()

    return (
        <footer className=" flex flex-row items-center justify-between p-4 bg-primary text-neutral-50">

            <div className="flex flex-row items-center justify-center gap-2">
                <p className="text-xs">Powered by</p>
                <a href="https://www.themoviedb.org/?language=es" target="_blank">
                    <img className="max-w-8" src="./tmdb-logo.png" alt="The Movie Data Base logo" />
                </a>

            </div>

            <p>&copy;{year} <span className="text-secondary font-bold">Cine</span>Scope</p>
                    
            <a href="https://github.com/Tonips22/CineScope" target="blank" className=' grid content-center text-2xl text-[#F8F8F8] hover:text-secondary hover:scale-110 transition-all'><i className="fa-brands fa-github "></i></a>
        </footer>
    )
}