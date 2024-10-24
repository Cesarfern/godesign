import Boton from "../common/Boton";

function Hero() {
  return (
    <section className="flex w-full items-center justify-evenly bg-[#fa057b] px-[110px] pt-2">
      <div className="w-[426px]">
        <h1 className="text-left font-['system-ui'] font-bold text-white text-[50px] leading-[1.15]">
        ¿Qué es <br/>
        Go Design?
        </h1>
        <p className="w-[34ch] font-['system-ui'] text-center text-white md:text-left mt-5 mb-9">
        Somos una agencia <strong>capacitadora</strong> y de <br/>
        desarrollo de proyectos de marketing y <br/>
        ventas. Ofrecemos servicios de asesoría <br/>
        personalizada y cursos con presencia en <br/>
        México y Latinoamérica.
        </p>
        <Boton 
          className="w-[201px] h-[51px] rounded-[5px] font-['system-ui'] text-[18px] font-bold text-[#794577] bg-white
           hover:bg-[#a682a4] hover:text-white"
          children={"Ver cursos online"}
        />
        <Boton 
          className="w-[201px] h-[51px] rounded-[5px] font-['system-ui'] text-[18px] font-bold text-white bg-[#fa057b] 
          border-2 hover:bg-[#a682a4] hover:text-white hover:border-none ml-6"
          children={"Ver cursos online"}
        />
      </div>
      <div>
        <img
          className="hidden rounded-2xl xl:flex"
          src={"../src/assets/pagina.webp"} width={402} height={492}
          alt="A woman happily using Kobodrop"
        />
      </div>
    </section>
  );
}

export default Hero;