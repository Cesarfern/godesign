import Nav from "./sections/Nav";
import Proximos_cursos from "./sections/Proximos_cursos";

function Seminarios_talleres() {
  return (
    <>
      <Nav />
      <div className="flex justify-center bg-[#F7F1DF]">
        <Proximos_cursos />
      </div>
    </>
  );
}

export default Seminarios_talleres;