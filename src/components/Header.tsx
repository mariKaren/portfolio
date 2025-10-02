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
        <header className="fixed top-0 backdrop-blur-md left-0 w-full shadow-lg z-50 font-secondary">
            <div className="max-w-7xl mx-auto flex items-center justify-between px-8 py-4">
                {/*Nombre */}
                <Link
                    to="hero"
                    smooth={true}
                    duration={1000}
                    offset={-80}
                    className="text-xl font-bold font-primary fc-gray tracking-wide cursor-pointer"
                    >
                    Karen Mari
                </Link>

                {/* Links - desktop */}
                <nav className="hidden md:flex gap-8 fc-white">
                    {links.map((link) => (
                        <Link
                            key={link.name}
                            to={link.href.replace("#", "")}
                            smooth={true}
                            duration={1200}
                            offset={-80} // compensa el header fijo
                            spy={true} 
                            className="cursor-pointer hover:fc-gray"
                            activeClass="font-bold fc-purple"
                            >
                            {link.name}
                            </Link>
                    ))}
                </nav>

                {/* Botón menú mobile */}
                <button
                className="md:hidden fc-gray"
                onClick={() => setOpen(!open)}
                >
                {open ? <X size={28} /> : <Menu size={28} />}
                </button>
            </div>

            {/* Menú desplegable mobile */}
            {open && (
                <div className="md:hidden shadow-md bg-black/70 backdrop-blur-md rounded-lg p-4 mx-4">
                    <nav className="flex flex-col items-center gap-4 fc-white">
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
                            activeClass="font-bold fc-purple"
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