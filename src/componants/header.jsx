import { Link } from "react-router-dom";

export default function Header(){
    return(
        <header className="w-full h-[100px] flex bg-accent">
            <img src="./logo.png" className="h-full" alt="Logo"/>

            <div className="w-full h-full flex text-primary text-xl justify-center items-center gap-[40px]">
                <Link to="/">Home</Link>
                <Link to="/products">Products</Link>
                <Link to="/about">About</Link>
                <Link to="/contact">Contact</Link>

            </div>

        </header>
    )
}