import Boton from "../common/Boton";
export interface CursoLinkProps {
    src?: string;
    children?: React.ReactNode;
  }
  
  function CursoLink({ src, children}: CursoLinkProps) {
    return (
        <div className="flex flex-col w-[240px] items-left">
            <img
            src={src} className="w-[240px] h-[236px]" alt="Curso"
            />
            <div className="w-full h-[88px] font-['system-ui'] font-bold text-[18px] mt-[28px] text-ellipsis">
                {children}
            </div>
            <Boton 
            className="w-full h-[51px] rounded-[11px] font-['system-ui'] text-[18px] font-bold text-white bg-[#fa057b] 
            border-2 hover:bg-[#a682a4] hover:text-white hover:border-none"
            children={"Quiero Inscribirme"}
            />
        </div>
    );
  }
  
  export default CursoLink;
  