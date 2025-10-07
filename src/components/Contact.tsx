import { FaLinkedin, FaEnvelope } from "react-icons/fa";
import { SectionBase } from "./SectionBase";

export default function Contact() {
    const email = "kbm1999@hotmail.es";
    const linkedinUrl = "https://www.linkedin.com/in/karen-mari/";

    /* Componente interno solo para esta página */
    const ButtonContact = ({
        href,
        icon,
        label,
        external = false,
    }: {
        href: string;
        icon: React.ReactNode;
        label: string;
        external?: boolean;
    }) => (
        <a
        href={href}
        target={external ? "_blank" : undefined}
        rel={external ? "noopener noreferrer" : undefined}
        className="flex flex-col items-center justify-center gap-2 border border-gray-700 hover:shadow-[0_0_10px_#9333ea] font-semibold rounded-lg shadow-md transition-all duration-500 min-w-[110px] max-w-[280px] w-full py-8"
        >
        {icon}
        <span className="text-center">{label}</span>
        </a>
    );

    return (
        <SectionBase id="contact" title="Contacto">
            <div className="flex justify-center gap-5 md:gap-10 mt-2">
                <ButtonContact href={`mailto:${email}`} icon={<FaEnvelope size={30} />} label="Email" />
                <ButtonContact href={linkedinUrl} icon={<FaLinkedin size={30} />} label="LinkedIn" external />
            </div>
        </SectionBase>
    );
}