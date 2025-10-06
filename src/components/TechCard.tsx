import { motion } from "framer-motion";
import type { IconType } from "react-icons";

interface TechCardProps {
  name: string;
  icon: IconType;
}

export function TechCard({ name, icon: Icon}: TechCardProps) {
  return (
    /* El div tiene el objetivo de controlar la animación de interacción  */
    <motion.div
      className="flex flex-col items-center justify-center border border-gray-700 rounded-lg w-28 h-28 hover:shadow-[0_0_10px_#9333ea] transition-all cursor-pointer"
      whileHover={{ scale: 1.05 }}
      transition={{ type: "spring", stiffness: 300 }}
    >
      <Icon className="w-10 h-10 md:h-12" />
      <span className="text-sm text-center mt-2">{name}</span>
    </motion.div>
  );
}