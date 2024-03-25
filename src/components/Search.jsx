import './Search.css';

export function Search ({width, animation = true}){
    return(
        <div className={`${animation ? "search animate-fade-in-up" : ""} flex flex-row items-center justify-between bg-white rounded-3xl w-${width} px-8 py-4 gap-2 transition-shadow`}>
            <input type="text" placeholder="Introduzca aquí una película" className="input text-dark outline-none bg-transparent w-full"/>
            <i class="fa-solid fa-magnifying-glass text-primary cursor-pointer"></i>
        </div>
    )
}