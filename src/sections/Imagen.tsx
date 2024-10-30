export interface ImagenLinkProps {
    src?: string;
    className?: string;
    className2?: string;
  }
  
  function Imagen({ className, className2, src }: ImagenLinkProps) {
    return (
        <div className={className}>
            <img className={className2} src={src} />
        </div>
    );
  }

  export default Imagen;