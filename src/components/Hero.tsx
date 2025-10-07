import { Link as ScrollLink } from "react-scroll";
import { Download, ArrowDown } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

export default function Hero() {
    return (
        <section
        id="hero"
        className="min-h-screen flex flex-col justify-center items-center text-center px-6 fc-white font-secondary"
        >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-10 font-primary">Full Stack Developer</h1>

            {/* Botones principales */}
            <div className="flex flex-wrap justify-center gap-6 mb-10">
                {/* Descargar CV */}
                <a
                href="/cv/Mari_Karen.pdf"
                download
                className="flex items-center gap-2 bg-c-purple hover:bg-purple-secondary px-6 py-3 rounded-lg transition-colors"
                >
                    <Download size={20} /> Descargar CV
                </a>

                {/* Ver proyectos */}
                <ScrollLink
                to="projects"
                smooth={true}
                duration={1200}
                offset={-80}//compensa el header fijo
                className="flex items-center gap-2 bg-gray-800 hover:bg-gray-700 px-6 py-3 rounded-lg transition-colors cursor-pointer"
                >
                    Ver proyectos <ArrowDown size={20} />
                </ScrollLink>
            </div>

            {/* Redes sociales */}
            <div className="flex gap-6">
                <a
                href="https://github.com/mariKaren"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:fc-purple transition-colors"
                >
                    <FaGithub size={32} />
                </a>
                <a
                href="https://www.linkedin.com/in/karen-mari/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:fc-purple transition-colors"
                >
                    <FaLinkedin size={32} />
                </a>
            </div>
        </section>
    );
}