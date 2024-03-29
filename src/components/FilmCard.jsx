export function FilmCard ({children, description, rating, picture}){

    const ratingColor = () =>{
        if(rating > 7){
            return "bg-green-500"
        }else if(rating > 5){
            return "bg-yellow-500"
        }else{
            return "bg-red-500"
        }
    }
    return (
        <article className="relative h-[50vh] w-auto group cursor-pointer overflow-hidden lg:h-screen">
            <img loading="lazy" src={`https://image.tmdb.org/t/p/w500${picture}`} alt={children} className="absolute top-0 left-0 h-full w-full -z-10 object-cover group-hover:scale-110 transition"/>
            <p className={`absolute top-2 right-2 text-[#242424] max-w-[60ch] px-4 py-2 rounded-full ${ratingColor()}`}><i class="fa-solid fa-star"></i> {rating}</p>

            <div className="hidden group-hover:flex bg-black/80 backdrop-blur-md flex-col items-center justify-center gap-4 absolute top-0 left-0 w-full h-full animate-fade-in animate-duration-200 px-4">
                <h1 className="text-center text-[#F8F8F8] text-2xl">{children}</h1>
                <p className="text-[#F8F8F8] max-w-[60ch]">{description}</p>
                <p className={`text-[#242424] max-w-[60ch] px-4 py-2 rounded-full ${ratingColor()}`}><i class="fa-solid fa-star"></i> {rating}</p>
            </div>
        </article>
    )
}