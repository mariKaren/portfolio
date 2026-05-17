import type{ JSX } from "react";
import bwc from '../assets/projects/bwc.png';
import mlj from '../assets/projects/mlj.png';

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
        <p>Aplicación <strong> Full-Stack</strong> para la gestión y descubrimiento de libros. Cuenta con un sistema de <strong> autenticación</strong> por roles (Usuario/Admin) mediante Laravel Sanctum, permitiendo a los lectores administrar su <strong>wishlist</strong> y escribir <strong>reseñas</strong>, mientras que los administradores moderan el contenido y gestionan el catálogo (CRUD de libros y autores) a través de un <strong> panel de control</strong> dedicado.</p>
      </>
    ),
  },
  {
    title: "My Little Joke",
    image: mlj,
    technologies: ["React", "TypeScript", "Tailwind", "JokeAPI", "SweetAlert2" ],
    githubUrl:"https://github.com/mariKaren/myLittleJoke.git",
    isDeployed: true,
    demoUrl:"https://mylittlejoke.netlify.app/",
    description: (
      <>
        <p>
          <strong>MyLittleJoke</strong> es una app web creada con{" "}
          <strong>React, TypeScript</strong> y <strong>TailwindCSS</strong> que se conecta a la{" "}
          <strong>JokeAPI</strong> para mostrar bromas por categoría. Permite guardar favoritas,
          bloquear las no deseadas y cuenta con una 404 con humor 🎭. 
          Incluye paginación, control de peticiones y alertas interactivas con <strong>SweetAlert2</strong>.
        </p>
      </>
    ),
  }
];