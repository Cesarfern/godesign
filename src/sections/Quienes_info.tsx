import ButtonLink from "../common/ButtonLink";

function Quienes_info() {
  const estilos = "w-[39px] mx-[5px]";
  return (
    <section className="flex flex-col items-center w-full bg-[#E8E6E6]">
        <div className="flex mb-[30px] mt-[40px]">
          <ButtonLink
            href="https://www.instagram.com/godesign_mx/"
            children={<img className={estilos} src={"../src/assets/icons/insta.webp"} alt="Instagram logo"/>}
          />
          <ButtonLink
            href="https://www.facebook.com/GoDesignMx"
            children={<img className={estilos} src={"../src/assets/icons/face.webp"} alt="Facebook logo"/>}
          />
          <ButtonLink
            href="https://www.youtube.com/channel/UCX_qA0LNN2AQzH8EHGhxJPQ"
            children={<img className={estilos} src={"../src/assets/icons/youtube.webp"} alt="Youtube logo"/>}
          />
          <ButtonLink
            href="https://www.tiktok.com/@godesignmx"
            children={<img className={estilos} src={"../src/assets/icons/tiktok.webp"} alt="Tiktok logo"/>}
          />
        </div>
        <div className="font-['system-ui'] text-[23px]">
        Acerca de</div>
        <div className="font-['system-ui'] font-bold text-[#fa057b] text-[48px] mb-[35px]">
        GO DESIGNE MX</div>
        <div className="font-['system-ui'] text-[#757575] text-[17px] font-[700] leading-[30px] w-[735px] text-center">
        Somos una agencia capacitadora y de desarrollo de proyectos de marketing y ventas. 
        Un equipo de profesionales en distintas áreas de la comunicación, 
        especializados en brindar conocimientos a través de asesorías, desarrollo de proyectos, 
        cursos de marketing digital, diseño publicitario y arte en México y Latinoamérica.
        </div>
        <div className="w-[980px] h-[291px] bg-[url('../src/assets/merida.png')] bg-center">
        </div>
        <div className="font-['system-ui'] font-[500] text-[32px] mt-[20px] mb-[35px]">
        Mérida, Yucatán</div>
    </section>
  );
}

export default Quienes_info;