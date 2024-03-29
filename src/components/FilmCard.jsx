export function FilmCard ({children, description, rating, picture}){
    return (
        <article className="relative h-screen w-auto group cursor-pointer">
            <img src={`https://image.tmdb.org/t/p/w500${picture}`} alt={children} className="absolute top-0 left-0 h-full w-full -z-10 object-cover"/>

            <div className="hidden group-hover:flex bg-black/80 flex-col items-center justify-center gap-4 absolute top-0 left-0 w-full h-full animate-fade-in px-4">
                <h1 className="text-center text-white text-2xl">{children}</h1>
                <p className="text-white max-w-[60ch]">{description}</p>
                <p className="text-white max-w-[60ch]">{rating}</p>
            </div>
        </article>
    )
}