import ButtonLink from "../common/ButtonLink";
export interface SeminarioLinkProps {
    src?: string;
    children?: React.ReactNode;
  }
  
  function Seminario({src}: SeminarioLinkProps) {
    return (
        <div className="flex flex-col items-center w-[210px]">
          <div className="flex items-end justify-center w-[210px] h-[210px]">
            <img
            src={src} className="max-w-[210px] max-h-[210px]" alt="Curso"
            />
          </div>
          <ButtonLink
            className="flex bg-[#fa057b] w-[151px] h-[43px] rounded-[5px] mt-[15px]"
            href=""
            children={<div className="flex place-content-evenly w-full">
              <div className="text-white text-[20px] leading-[40px]">Más Info</div>
              <img src={"../src/assets/icons/flecha.png"} width={34} height={28.5}/>
              </div>}
          />
        </div>
    );
  }
  
  export default Seminario;