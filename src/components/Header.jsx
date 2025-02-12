import { useEffect, useState } from 'react';
import './Header.css'
import Arrow from './Arrow.jsx';

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
        <>
        <header className="absolute top-0 left-0 w-full z-50 flex flex-row items-center justify-between px-8 py-4  animate-fade-in-up">
            <a href="\"><h1 className="text-3xl text-[#F8F8F8]"><span className="font-bold text-primary">Cine</span>Scope</h1></a>

            <nav className=' flex flex-row items-center justify-center gap-4'>
                <label className="switch">
                <input type="checkbox" checked={theme === "dark"} onChange={handleChangeTheme}/>
                    <span className="slider"></span>
                </label>
                
                <a href="https://github.com/Tonips22" target="blank" className=' grid content-center text-3xl text-[#F8F8F8] hover:text-primary hover:scale-110 transition-all'><i className="fa-brands fa-github "></i></a>
            </nav>
        </header>

        <Arrow/>
        </>
    )
}
    
export default Header;
