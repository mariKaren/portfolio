import { motion } from "framer-motion";
import { useState } from "react";

interface ProjectCardProps {
    title: string;
    children: React.ReactNode;
    image: string;
    technologies: string[];
    githubUrl: string;
    demoUrl?: string; 
    isDeployed?: boolean;
    reverse?:boolean
}

export function ProjectCard({
    title,
    children,
    image,
    technologies,
    githubUrl,
    demoUrl,
    isDeployed = false,
    reverse = false,
}: ProjectCardProps) {
    const [showAlert, setShowAlert] = useState(false);

    /* Si la demo en línea está disponible, se abrirá en una nueva pestaña; de lo contrario, se ofrecerá la opción de visitar el repositorio en GitHub. */
    const handleDemoClick = () => {
        if (!isDeployed) {
        setShowAlert(true);
        setTimeout(() => setShowAlert(false), 4000);
        } else {
        window.open(demoUrl, "_blank");
        }
    };

    return (
        <motion.div
        className="border border-gray-700 rounded-xl overflow-hidden shadow-md hover:shadow-[0_0_10px_#9333ea] transition-all duration-500 max-w-6xl mx-auto"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true, amount: 0.3 }}
        >
            <div className={`flex flex-col lg:items-center ${reverse ? "lg:flex-row-reverse" : "lg:flex-row"}`}>
                {/* Contenedor de la Imagen */}
                <div className="w-full lg:w-2/5 pb-2 sm:p-5 flex justify-center items-center">
                    <img 
                        src={image} 
                        alt={title} 
                        className="w-full lg:max-w-[95%] h-64 md:h-78 object-cover object-top rounded-xl shadow-sm" 
                    />
                </div>
                
                {/* Contenedor del Texto */}
                <div className="w-full lg:w-3/5 p-6 space-y-4">
                    <h3 className="text-xl md:text-2xl font-bold font-primary">{title}</h3>
                    
                    <div className="text-left sm:text-justify text-gray-300">{children}</div>

                    {/* Tecnologías */}
                    <div className="flex flex-wrap gap-2">
                        {technologies.map((tech) => (
                            <span
                                key={tech}
                                className="bg-purple-black text-purple-300 text-sm px-3 py-1 rounded-full border bc-purple"
                            >
                                {tech}
                            </span>
                        ))}
                    </div>

                    {/* Botones */}
                    <div className="flex flex-wrap justify-center gap-4 sm:gap-6 pt-4 text-base">
                        <button
                            onClick={() => window.open(githubUrl, "_blank")}
                            className="min-w-[140px] max-w-[200px] sm:w-full lg:w-auto px-6 py-2 bg-gray-800 rounded-md hover:bg-gray-700 transition text-center"
                        >
                            Ver en GitHub
                        </button>

                        <button
                            onClick={handleDemoClick}
                            className="min-w-[140px] max-w-[200px] sm:w-full lg:w-auto px-6 py-2 bg-c-purple rounded-md hover:bg-purple-secondary transition text-center"
                        >
                            Ver demo
                        </button>
                    </div>

                    {/* Alerta de Despliegue */}
                    {showAlert && (
                        <div className="mt-4 text-sm text-yellow-400 animate-fade-in">
                            🚧 El despliegue está en proceso. Podés revisar el código en{" "}
                            <a
                                href={githubUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="underline text-purple-400 hover:text-purple-300"
                            >
                                GitHub
                            </a>.
                        </div>
                    )}
                </div>
            </div>
            
        </motion.div>
    );
}