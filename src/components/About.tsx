import { SectionBase } from "./SectionBase";

export default function About() {
    return (
        <SectionBase id="about" title="Sobre mí">
            <p>
                ¡Hola! Soy <span className="italic fc-purple">Karen</span>. Mi pasión por la
                programación nació de mi amor por las matemáticas, donde desarrollé una{" "}
                <span className="font-semibold italic">forma de pensar analítica</span> y{" "}
                <span className="font-semibold italic">
                    orientada a la resolución de problemas
                </span>
                , cualidades que hoy definen mi enfoque como desarrolladora.
            </p>

            <p>
                Tras completar un{" "}
                <span className="italic fc-purple">
                    Máster en Full Stack Development
                </span>
                , me incorporé al equipo de{" "}
                <span className="italic fc-purple">beon.Worldwide</span> como{" "}
                <span className="italic fc-purple">
                    Desarrolladora Junior
                </span>
                . Actualmente trabajo diseñando componentes visuales en React,
                desarrollando arquitecturas con Supabase y construyendo lógica backend y
                APIs con Laravel.
            </p>

            <p>
                Aunque disfruto trabajando en todo el ecosistema de una aplicación, el{" "}
                <span className="italic fc-purple">frontend</span> es el área que más me
                apasiona. Me motiva crear experiencias intuitivas, funcionales y bien
                estructuradas, sin perder de vista cómo cada parte del sistema se conecta
                entre sí.
            </p>

            <p>
                Me considero una profesional curiosa, constante y orientada al aprendizaje
                continuo, convencida de que la{" "}
                <span className="font-semibold italic">adaptabilidad</span> y el{" "}
                <span className="font-semibold italic">trabajo en equipo</span> son claves
                para afrontar con éxito cualquier desafío técnico.
            </p>
        </SectionBase>
    );
}
