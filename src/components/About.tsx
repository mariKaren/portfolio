import { SectionBase } from "./SectionBase";

export default function About() {
    return (
        <SectionBase id="about" title="Sobre mí">
            <p>
                ¡Hola! Soy <span className="italic fc-purple">Karen</span>,
                desarrolladora Full Stack recientemente formada y apasionada por la
                programación. En ella encontré lo que más me atraía de mis estudios
                previos en contabilidad y de mi gran amor por la matemática: la{" "}
                <span className="font-semibold italic">lógica</span>, la{" "}
                <span className="font-semibold italic">resolución de problemas</span> y
                el <span className="font-semibold italic">pensamiento analítico</span>.
            </p>
            <p>
                Desde entonces me he dedicado con constancia al aprendizaje. He
                completado cursos de desarrollo web, JavaScript y React, y recientemente
                finalicé un{" "}
                <span className="italic fc-purple">
                Máster en Full Stack Development
                </span>
                .
            </p>
            <p>
                Me interesa especialmente el{" "}
                <span className="italic fc-purple">frontend</span>, aunque también
                disfruto trabajar en el backend y entender el funcionamiento completo de
                los proyectos. Me defino como una persona curiosa, constante y orientada
                al aprendizaje continuo, siempre buscando crecer y aportar valor en cada
                equipo del que forme parte.
            </p>
        </SectionBase>
    );
}
