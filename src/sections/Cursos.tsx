import Curso from "../common/Curso";

function Cursos() {
  return (
    <section className="flex flex-col items-center w-full">
      <div className="flex flex-col items-left w-[1000px]">
        <div className="font-['system-ui'] font-bold text-[#fa057b] text-[57px] mt-[70px] mb-[-5px]">
        Cursos más nuevos</div>
        <div className="font-['system-ui'] text-[21px] font-[350] leading-[25px]">
        Desbloquea tu potencial y acelera tu crecimiento con nuestros <br/>
        cursos especializados. ¡Aprende con nosotros y lidera en tu industria!
        </div>
        <div className="font-['system-ui'] text-[#46cbd5] text-[18px] mt-[15px] cursor-pointer underline">
          Ver todos los cursos
        </div>
      </div>
      <div className="flex items-center w-[1000px] justify-between">
        <Curso src="../src/assets/trafficker.webp" children="Trafficker"/>
        <Curso src="../src/assets/aceleracion.webp" children="Programa Aceleración en Ventas"/>
        <Curso src="../src/assets/manager.webp" children="Community manager para creativos"/>
      </div>
    </section>
  );
}

export default Cursos;