import Hero from "./sections/Hero";
import Conoce from "./sections/Conoce";
import Imagen from "./sections/Imagen";
import Nav from "./sections/Nav";
import Cursos from "./sections/Cursos";

function Inicio() {
  return (
    <>
      <Nav />
      <Hero />
      <Imagen className="w-[full] bg-black" src="../src/assets/estadisticas.webp" className2="w-[1400px] m-auto"/>
      <Conoce />
      <Cursos />
    </>
  );
}

export default Inicio;