import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Link } from "react-scroll";

type NavLink = {
    name: string;
    href: string;
};

export default function Header() {
    const [open, setOpen] = useState(false);

    const links:NavLink[] = [
        { name: "Sobre mí", href: "#about" },
        { name: "Proyectos", href: "#projects" },
        { name: "Tecnologías", href: "#tecnology"},
        { name: "Contacto", href: "#contact" },
    ];

    return (
        <header className="fixed top-0 backdrop-blur-md left-0 w-full shadow-lg z-50 source-sans">
            <div className="max-w-7xl mx-auto flex items-center justify-between px-8 py-4">
                
                {/* Logo o Nombre */}
                <h1 className="text-xl font-bold playfair-display font-color-gray tracking-wide">Karen Mari</h1>

                {/* Links - desktop */}
                <nav className="hidden md:flex gap-8 font-color-white">
                    {links.map((link) => (
                        <Link
                            key={link.name}
                            to={link.href.replace("#", "")}
                            smooth={true}
                            duration={1200}
                            offset={-80} // compensa el header fijo
                            spy={true} 
                            className="cursor-pointer transition-colors"
                            activeClass="font-bold font-c-purple"
                            >
                            {link.name}
                            </Link>
                    ))}
                </nav>

                {/* Botón menú mobile */}
                <button
                className="md:hidden font-color-gray"
                onClick={() => setOpen(!open)}
                >
                {open ? <X size={28} /> : <Menu size={28} />}
                </button>
            </div>

            {/* Menú desplegable mobile */}
            {open && (
                <div className="md:hidden shadow-md bg-black/70 backdrop-blur-md rounded-lg p-4 mx-4">
                    <nav className="flex flex-col items-center gap-4 font-color-white">
                        {links.map((link) => (
                        <Link
                            key={link.name}
                            to={link.href.replace("#", "")}
                            smooth={true}
                            duration={1500}
                            offset={-80}
                            spy={true}
                            onClick={() => setOpen(false)}
                            className="cursor-pointer w-full text-center py-3 bg-purple-black rounded-lg hover:bg-purple-black font-semibold"
                            activeClass="font-bold font-c-purple"
                        >
                            {link.name}
                        </Link>
                        ))}
                    </nav>
                </div>
            )}
        </header>
    );
}