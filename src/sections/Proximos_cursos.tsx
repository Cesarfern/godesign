import Seminario from "../common/Seminario";

function Proximos_cursos() {
  return (
    <section className="flex flex-col items-center w-[1000px] bg-white">
        <div className="font-['system-ui'] font-bold text-[#fa057b] text-[48px] mb-[35px]">
        Próximos Cursos</div>
        <div className="flex mt-[20px] mb-[35px] w-full justify-evenly">
          <Seminario src="../src/assets/cobrar.webp" />
          <Seminario src="../src/assets/segmenta.webp" />
          <Seminario src="../src/assets/fb-ads.webp" />
          <Seminario src="../src/assets/disena.webp" />
        </div>
        <div className="flex mt-[20px] mb-[35px] w-full justify-evenly">
          <Seminario src="../src/assets/ventas.webp" />
          <Seminario src="../src/assets/monetiza.webp" />
          <Seminario src="../src/assets/disena2.webp" />
          <Seminario src="../src/assets/fb-ads2.webp" />
        </div>
        <div className="flex mt-[20px] mb-[35px] w-full justify-evenly">
          <Seminario src="../src/assets/elemental.webp" />
          <Seminario src="../src/assets/diseno-publicitario.webp" />
          <Seminario src="../src/assets/Ilustración-jfif.webp" />
          <Seminario src="../src/assets/escala.webp" />
        </div>
    </section>
  );
}

export default Proximos_cursos;