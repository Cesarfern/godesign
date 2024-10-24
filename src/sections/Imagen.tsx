export interface ImagenLinkProps {
    src?: string;
    children?: React.ReactNode;
    className?: string;
    className2?: string;
  }
  
  function Imagen({ children, className, className2, src }: ImagenLinkProps) {
    return (
        <div className={className}>
            {children}
            <img className={className2} src={src} />
        </div>
    );
  }

  export default Imagen;