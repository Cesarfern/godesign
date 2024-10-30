export interface ButtonBlankProps {
    href?: string;
    children?: React.ReactNode;
    className?: string;
    logo?: string;
    upperText?: string;
    lowerText?: string;
  }
  
  function ButtonBlank({ href, children, className}: ButtonBlankProps) {
    return (
        <a
          href={href}
          children={children}
          className={className}
          target="_blank"
        ></a>
    );
  }
  
  export default ButtonBlank;