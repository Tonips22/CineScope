
export function MovieModal({children, description, rating, ratingColor, picture, open, onClose}){
    return (
        <div className='fixed top-16 left-16 right-16 bottom-16 backdrop-blur-md bg-neutral-50/80 dark:bg-black/80 grid grid-cols-3 animate-fade-in animate-duration-200 z-10 cursor-default'>
            <img className='col-span-1 w-full h-full object-cover' src={`https://image.tmdb.org/t/p/w500${picture}`} alt={children}/>

            <div className="col-span-2 p-10 flex flex-col justify-between">
                <div className="col-span-2 flex flex-col justify-start gap-12">
                    <h1 className="text-white text-5xl text-center">{children}</h1>

                    <p className="text-white">{description}</p>

                    <p>Realases Date 22/03/2003</p>

                    <p className={`text-[#242424] max-w-[60ch] px-4 py-2 rounded-full ${ratingColor} text-center self-center`}><i className="fa-solid fa-star"></i> {rating}</p>
                </div>

                <p className='text-white flex items-center justify-center gap-2'>
                    Information powered by 
                    <img className='max-w-20' src="./tmdblogo.svg" alt="TMDB logo" />
                </p>
            </div>

            <i class="fa-solid fa-xmark absolute right-2 top-2 text-white text-2xl cursor-pointer z-20" onClick={onClose}></i>
      </div>
    )
}

export default MovieModal;