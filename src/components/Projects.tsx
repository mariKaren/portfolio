import { SectionBase } from "./SectionBase";
import { ProjectCard } from "./ProjectCard";
import { projects } from "../constants/projects";

export default function Projects() {
    return (
        <SectionBase id="projects" title="Proyectos" maxWidth="max-w-5xl">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 place-items-center lg:place-items-start">
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