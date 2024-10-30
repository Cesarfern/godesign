import Boton from "../common/Boton";

function Servicios_integrales() {
  return (
    <section className="flex w-full items-left  bg-black px-[110px] pt-2">
      <div className="w-[426px] ml-[145px] mb-[48px]">
        <img
          className="w-[320px]"
          src={"../src/assets/servicios-integrales.webp"}
          alt="Servicios integrales de agencia"
        />
        <p className="w-[445px] font-['system-ui'] text-[17px] text-white md:text-left mb-9 ml-[28px] leading-[24px]">
Transformamos ideas en impacto. Como agencia digital, fusionamos estrategias de marketing de vanguardia con diseño publicitario
cautivador.<br/>
Desde la concepción hasta la ejecución, cada proyecto se impulsa con nuestra dedicación a la excelencia.<br/><br/>
¡Maximiza tu estrategia con nuestra fórmula probada con creatividad!
        </p>
        <Boton 
          className="w-[181px] h-[51px] rounded-[5px] font-['system-ui'] text-[18px] font-bold text-white bg-[#37c7d2]
           hover:bg-[#2c9fa8] hover:text-white  ml-4"
          children={"Contactar"}
        />
        <Boton 
          className="w-[181px] h-[51px] rounded-[5px] font-['system-ui'] text-[18px] font-bold text-[#37c7d2] bg-black
          border-2 border-[#37c7d2] hover:bg-[#2c9fa8] hover:text-white hover:border-none ml-4"
          children={"Ver portafolio"}
        />
      </div>
    </section>
  );
}

export default Servicios_integrales;