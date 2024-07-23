import '../index.css'
export default function Navbar(){
    return(
        < div className="sticky w-full top-0 left-0 bg-white border-gray-200 dark:bg-gray-900">
        <ul className="max-w-screen-xl flex flex-wrap items-right justify-around mx-auto p-4 text-lime-500">
            <li><a href="#home">Home</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#contact">Contact</a></li>
        </ul>
        </div>
    )
}
