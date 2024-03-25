import { useEffect, useState } from 'react';
import './Header.css'

export function Header(){
    const [theme, setTheme] = useState(()=>{
        if(window.matchMedia('(prefers-color-scheme: dark)').matches){
            return 'dark'
        }

        return 'light'
    })

    useEffect(() =>{
        if(theme === "dark"){
            document.querySelector('html').classList.add("dark")
        }else{
            document.querySelector('html').classList.remove("dark")
        }
    }, [theme])

    const handleChangeTheme = () => {
        setTheme(prevTheme => prevTheme === "light" ? "dark" : "light");
    }

    return (
        <header className="fixed top-0 left-0 w-full z-50 flex flex-row items-center justify-between px-8 py-4  animate-fade-in-up">
            <a href="\"><h1 className="text-3xl"><span className="font-bold text-primary">Cine</span>Scope</h1></a>

            <nav className=' flex flex-row items-center justify-center gap-4'>
                <label class="switch">
                <input type="checkbox" checked={theme === "dark"} onChange={handleChangeTheme}/>
                    <span class="slider"></span>
                </label>
                
                <a href="https://github.com/Tonips22" target="blank" className=' grid content-center text-3xl text-white hover:text-primary hover:scale-110 transition-all'><i class="fa-brands fa-github "></i></a>
            </nav>
        </header>
    )
}
    
export default Header;
