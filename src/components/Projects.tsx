import { SectionBase } from "./SectionBase";
import { ProjectCard } from "./ProjectCard";
import { projects } from "../constants/projects";

export default function Projects() {
    return (
        <SectionBase id="projects" title="Proyectos">
            {/* A modificar la distribución del contenido cuando se agreguen más proyectos */}
            <div className="flex flex-col items-center space-y-12">
                {projects.map((project) => (
                <ProjectCard
                    key={project.title}
                    title={project.title}
                    image={project.image}
                    technologies={project.technologies}
                    githubUrl={project.githubUrl}
                    demoUrl={project.demoUrl}
                    isDeployed={project.isDeployed}
                >
                    {project.description}
                </ProjectCard>
                ))}
            </div>
        </SectionBase>
    );
}