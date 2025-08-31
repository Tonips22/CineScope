import './MovieModal.css';

export function MovieModal({children, description, rating, ratingColor, picture, date, onClose}){
    function formatDateToText(dateString) {
        const months = [
            "January", "February", "March", "April", "May", "June",
            "July", "August", "September", "October", "November", "December"
        ];
        
        // Dividir la fecha en partes
        const [year, month, day] = dateString.split('-');
        
        // Convertir mes a nombre de mes
        const monthName = months[parseInt(month, 10) - 1];
        
        // Determinar el sufijo del día
        const dayNumber = parseInt(day, 10);
        let daySuffix = "th";
        if (dayNumber === 1 || dayNumber === 21 || dayNumber === 31) {
            daySuffix = "st";
        } else if (dayNumber === 2 || dayNumber === 22) {
            daySuffix = "nd";
        } else if (dayNumber === 3 || dayNumber === 23) {
            daySuffix = "rd";
        }
        
        // Construir la fecha formateada
        return `${dayNumber}${daySuffix} ${monthName} ${year}`;
    }

    const formartedDate = formatDateToText(date);


    return (
        <div className='moviemodal fixed top-0 left-0 w-full h-full backdrop-blur-md bg-neutral-50/80 dark:bg-black/80 grid grid-rows-3 md:grid-cols-3 md:grid-rows-1 z-[999] cursor-default overflow-auto'>
            <img className='row-span-1 md:col-span-1 w-full h-full object-cover' src={`https://image.tmdb.org/t/p/w500${picture}`} alt={children}/>

            <div className="row-span-2 md:col-span-2 p-10 flex flex-col justify-between gap-10">
                <h1 className="text-white text-4xl md:text-5xl text-center">{children}</h1>

                <p className="text-white">{description}</p>

                <p className="text-white text-sm flex gap-2 items-center"><i class="fa-solid fa-calendar text-primary"></i>{formartedDate}</p>

                <p className={`text-[#242424] max-w-[60ch] px-4 py-2 rounded-full ${ratingColor} text-center self-center`}><i className="fa-solid fa-star"></i> {rating}</p>

                <p className='text-white flex items-center justify-center gap-2 text-xs'>
                    Information powered by 
                    <img className='max-w-20' src="./tmdblogo.svg" alt="TMDB logo" />
                </p>
            </div>

            <i class="fa-solid fa-xmark absolute right-4 top-4 text-neutral-50 md:text-white text-4xl md:text-2xl cursor-pointer z-20" onClick={onClose}></i>
      </div>
    )
}

export default MovieModal;