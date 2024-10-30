import ButtonLink from "../common/ButtonLink";
import ButtonBlank from "../common/ButtonBlank.jsx";

function Barra_inferior() {
  return (
    <section className="flex w-full h-[65px] items-center justify-evenly bg-[#E8E6E6] px-[110px]">
        <img
          className="w-[22px] h-[22px]"
          src={"../src/assets/icons/ads.webp"}
          alt="Ads"
        />
        <ButtonBlank
        href="https://www.facebook.com/GoDesignMx"
        children={<img className="w-[27px]" src={"../src/assets/icons/face2.webp"} alt="Facebook"/>}
        />
        <div className="w-[445px] font-['system-ui'] text-[15px] text-[#A0A09F] leading-[24px]">
        © 2023 Sitio Creado por Go Design!, Veracruz, México
        </div>
        <ButtonLink
        className="bg-[#EEEDED] text-black font-['system-ui'] text-[13px] w-[120px] h-[33px] leading-[33px] text-center
        hover:bg-[#794577] hover:text-white"
        href=""
        children={"Aviso de Privacidad"}
        />
    </section>
  );
}

export default Barra_inferior;