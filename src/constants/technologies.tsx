import { SiJavascript, SiCss3, SiHtml5, SiReact, SiPhp, SiLaravel, SiTailwindcss, SiMysql, SiGithub, SiMongodb, SiTypescript, SiNodedotjs, SiBootstrap, SiGit } from "react-icons/si";
import type { IconType } from "react-icons";

export interface Tech {
  name: string;
  icon: IconType;
}

export const technologies: Tech[] = [
  { name: "JavaScript", icon: SiJavascript },
  { name: "CSS3", icon: SiCss3 },
  { name: "HTML5", icon: SiHtml5 },
  { name: "React", icon: SiReact },
  { name: "PHP", icon: SiPhp },
  { name: "Laravel", icon: SiLaravel },
  { name: "Tailwind CSS", icon: SiTailwindcss },
  { name: "MySQL", icon: SiMysql },
  { name: "GitHub", icon: SiGithub },
  { name: "MongoDB", icon: SiMongodb },
  { name: "TypeScript", icon: SiTypescript },
  { name: "Node.js", icon: SiNodedotjs },
  { name: "Bootstrap", icon: SiBootstrap },
  { name: "Git", icon: SiGit },
];