export function Footer(){
    const date = new Date()
    const year = date.getFullYear()

    return (
        <footer className=" flex flex-row items-center justify-between p-4 bg-primary text-neutral-50">
            <p>&copy;{year} <span className="text-secondary font-bold">Cine</span>Scope</p>

            <div className="flex flex-row items-center justify-center gap-2">
                <p>Powered by</p>
                <a href="https://www.themoviedb.org/?language=es" target="_blank">
                    <img className="max-w-10" src="./tmdb-logo.png" alt="The Movie Data Base logo" />
                </a>
                    
            </div>
        </footer>
    )
}