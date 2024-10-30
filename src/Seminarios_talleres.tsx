import Nav from "./sections/Nav";
import Proximos_cursos from "./sections/Proximos_cursos";
import Eventos from "./sections/Eventos";
import Barra_inferior from "./sections/Barra_inferior";

function Seminarios_talleres() {
  return (
    <>
      <Nav />
      <div className="flex flex-col items-center justify-center bg-[#F7F1DF]">
        <Proximos_cursos />
        <Eventos />
        <Barra_inferior />
      </div>
    </>
  );
}

export default Seminarios_talleres;