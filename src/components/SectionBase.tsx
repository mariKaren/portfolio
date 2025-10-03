import { motion } from "framer-motion";

interface SectionBaseProps {
    id: string;
    title: string;
    children: React.ReactNode;
}

export function SectionBase({ id, title, children }: SectionBaseProps) {
    return (
        <section id={id} className="px-6 py-16 fc-white">
            <div className="max-w-3xl mx-auto text-center font-secondary space-y-10">
                {/* Título con animación */}
                <motion.h2
                className="relative inline-block text-2xl md:text-4xl font-bold font-primary after:content-[''] after:block after:h-[3px] after:w-1/2 after:mx-auto after:mt-5 after:bg-purple-600 after:shadow-[0_0_8px_1px_#9333ea] after:rounded-full"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
                viewport={{ once: false, amount: 0.3 }}
                >
                {title}
                </motion.h2>

                {/* Bloque de contenido */}
                <motion.div
                className="md:text-lg space-y-6 leading-relaxed text-justify"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1.2, ease: "easeOut", delay: 0.4 }}
                viewport={{ once: false, amount: 0.3 }}
                >
                {children}
                </motion.div>
            </div>
        </section>
    );
}