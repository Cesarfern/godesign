export interface BotonLinkProps {
    children?: React.ReactNode;
    className?: string;
  }
  
  function Boton({ children, className }: BotonLinkProps) {
    return (
        <button
          children={children}
          className={className}
        ></button>
    );
  }

  export default Boton;