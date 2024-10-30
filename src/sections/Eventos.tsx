import Evento from "../common/Evento";

function Eventos() {
  return (
    <section className="flex flex-col items-center w-[1000px] bg-white">
        <div className="font-['system-ui'] font-bold text-[#fa057b] text-[48px] mb-[35px]">
        Eventos</div>
        <Evento src="../src/assets/diseno-publicitario2.webp" titulo1="A determinar | Curso En Línea por Zoom" 
        titulo2="Diseño Publicitario en Línea"/>
        <Evento src="../src/assets/ilustracion-digital.webp" titulo1="A determinar | Curso En Línea por Zoom" 
        titulo2="Ilustración Digital desde 0" imagen_izquierda="no"/>
        <Evento src="../src/assets/fotografia-digital.webp" titulo1="A determinar | Curso En Línea por Zoom" 
        titulo2="Fotografía Digital"/>
    </section>
  );
}

export default Eventos;