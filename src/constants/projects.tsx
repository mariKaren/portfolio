import type{ JSX } from "react";
import bwc from '../assets/projects/bwc.png';

export interface Project {
  title: string;
  image: string;
  technologies: string[];
  githubUrl: string;
  demoUrl?: string;
  isDeployed?: boolean;
  description: JSX.Element; // para pasar contenido React
}

export const projects: Project[] = [
  {
    title: "Book Worms Club",
    image: bwc,
    technologies: ["React", "TypeScript", "Tailwind", "PHP", "MySQL","Laravel"],
    githubUrl:"https://github.com/mariKaren/bwcProyectoFinal",
    isDeployed: false,
    description: (
      <>
        <p>Esta aplicación full-stack permite a los usuarios explorar un completo catálogo de libros y consultar detalles de cada obra. Los usuarios pueden crear, ver y eliminar sus propias reseñas, así como gestionar su lista de deseos (<strong>wishlist</strong>). El sistema de autenticación,utilizando Sanctum, incluye roles de <strong>usuario</strong> y <strong>administrador</strong>, permitiendo a los admins gestionar libros mediante CRUD, crear autores y moderar reseñas. Además, la aplicación cuenta con un listado de libros destacados y una página informativa <strong>"Sobre Nosotros"</strong>, ofreciendo una experiencia completa de descubrimiento y gestión de contenidos.</p>
      </>
    ),
  },
  
];