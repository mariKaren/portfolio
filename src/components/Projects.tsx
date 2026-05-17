import { SectionBase } from "./SectionBase";
import { ProjectCard } from "./ProjectCard";
import { projects } from "../constants/projects";

export default function Projects() {
    return (
        <SectionBase id="projects" title="Proyectos" maxWidth="max-w-5xl">
            <div className="space-y-12">
                {projects.map((project, index) => (
                <ProjectCard
                    key={project.title}
                    title={project.title}
                    image={project.image}
                    technologies={project.technologies}
                    githubUrl={project.githubUrl}
                    demoUrl={project.demoUrl}
                    isDeployed={project.isDeployed}
                    reverse={index % 2 !== 0}
                >
                    {project.description}
                </ProjectCard>
                ))}
            </div>
        </SectionBase>
    );
}