import { SectionBase } from "./SectionBase";
import { TechCard } from "./TechCard";
import { technologies } from "../constants/technologies";
import { motion } from "framer-motion";

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } }, /* para que cada hijo con su variante empiece su animación 0.1s después del anterior */
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

export default function Technology() {
  return (
    <SectionBase id="technology" title="Tecnologías">
      {/* Contenedor de las tecnologías */}
      <motion.div
        className="grid gap-6 justify-items-center [grid-template-columns:repeat(auto-fit,minmax(120px,1fr))]"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        {/* Cart de cada una de ellas */}
        {technologies.map((tech) => (
          /* Se crea el div para controlar la animación de entrada*/
          <motion.div key={tech.name} variants={itemVariants}>
            <TechCard {...tech} />
          </motion.div>
        ))}
      </motion.div>
    </SectionBase>
  );
}
