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
}

export function ProjectCard({
    title,
    children,
    image,
    technologies,
    githubUrl,
    demoUrl,
    isDeployed = false,
}: ProjectCardProps) {
    const [showAlert, setShowAlert] = useState(false);

    /* si la demo esta lista se abrirá en otra pestaña y sino se dará la opción de ver el github */
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
        className="border border-gray-700 rounded-xl overflow-hidden shadow-md hover:shadow-[0_0_10px_#9333ea] transition-all duration-500 max-w-2xl mx-auto"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true, amount: 0.3 }}
        >
            <img src={image} alt={title} className="w-full h-56 object-cover" />

            <div className="p-6 space-y-4">
                <h3 className="text-xl md:text-2xl font-bold font-primary">{title}</h3>
                {/* Para que la descripcion se ajuste a las necesidades de cada proyecto */}
                <div className="text-left sm:text-justify">{children}</div>

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

                <div className="flex flex-wrap justify-center gap-4 sm:gap-6 pt-4 text-base">
                    <button
                        onClick={() => window.open(githubUrl, "_blank")}
                        className="min-w-[140px] max-w-[200px] sm:w-full px-4 py-2 bg-gray-800 rounded-md hover:bg-gray-700 transition text-center"
                    >
                        Ver en GitHub
                    </button>

                    <button
                        onClick={handleDemoClick}
                        className="min-w-[140px] max-w-[200px] sm:w-full px-4 py-2 bg-c-purple rounded-md hover:bg-purple-secondary transition text-center"
                    >
                        Ver demo
                    </button>
                </div>

                {showAlert && (
                <div className="mt-4 text-sm text-yellow-400">
                    🚧 El despliegue está en proceso.  
                    Podés revisar el código en{" "}
                    <a
                    href={githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="underline text-purple-400 hover:text-purple-300"
                    >
                    GitHub
                    </a>
                    .
                </div>
                )}
            </div>
        </motion.div>
    );
}