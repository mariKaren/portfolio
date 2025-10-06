import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";

export default function Footer() {
    return (
        <footer className="border-t border-gray-800 font-secondary mt-30">
            <div className="mx-auto flex flex-col items-center justify-center gap-4 px-8 py-6 text-gray-400">
                
                {/* Enlaces a redes */}
                <div className="flex gap-6 text-2xl">
                    <a
                        href="mailto:kbm1999@hotmail.es"
                        className="hover:fc-purple transition-colors duration-300"
                        aria-label="Enviar correo"
                    >
                        <FaEnvelope />
                    </a>

                    <a
                        href="https://www.linkedin.com/in/karen-mari/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:fc-purple transition-colors duration-300"
                        aria-label="Perfil de LinkedIn"
                    >
                        <FaLinkedin />
                    </a>

                    <a
                        href="https://github.com/mariKaren"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:fc-purple transition-colors duration-300"
                        aria-label="Repositorio de GitHub"
                    >
                        <FaGithub />
                    </a>
                </div>

                {/* Línea divisoria */}
                <div className="w-24 h-[2px] bg-c-purple rounded-full shadow-[0_0_6px_#9333ea]" />

                {/* Texto inferior */}
                <p className="text-sm text-gray-400">
                © {new Date().getFullYear()}{" "}
                <span className="text-purple-400 font-medium">Karen Mari</span>. Todos los derechos reservados.
                </p>
            </div>
        </footer>
    );
}