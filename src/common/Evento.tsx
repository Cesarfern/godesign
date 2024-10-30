import ButtonLink from "../common/ButtonLink";
export interface EvemtoLinkProps {
    src?: string;
    titulo1?: string;
    titulo2?: string;
    imagen_izquierda?: string;
  }
  
  function Evemto({ src, titulo1, titulo2, imagen_izquierda}: EvemtoLinkProps) {
    var estilo="";
    if(imagen_izquierda=="no"){
        estilo="flex flex-row-reverse mt-[20px] mb-[35px] w-[859px] justify-evenly";
    }
    else{
        estilo="flex mt-[20px] mb-[35px] w-[859px] justify-evenly";
    }
    return (
        <div className={estilo}>
            <img
            className="w-[428px]"
            src={src}
            alt="Imagen del evento"
            />
          <div className="flex flex-col font-['system-ui'] items-center w-[428px] py-[60px]">
            <div className="text-[19px] font-[350]">{titulo1}</div>
            <div className="text-[28px] font-[350] mt-[5px]">{titulo2}</div>
            <div className="flex my-[38px]"> 
              <div className="w-[28px] h-[28px] bg-[url('../src/assets/icons/usuario-icon.png')] bg-center">
              </div>
              <div className="text-[14px] leading-[28px] ml-[15px]">Ver todos</div>
            </div>
            <ButtonLink
            className="bg-[#794577] text-white w-[160px] h-[42px] leading-[42px] text-center"
            href=""
            children={"Detalles"}
          />
          </div>
        </div>
    );
  }
  
  export default Evemto;