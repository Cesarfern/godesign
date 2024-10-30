export interface ButtonLinkProps {
  href?: string;
  children?: React.ReactNode;
  className?: string;
  target2?: string;
  logo?: string;
  upperText?: string;
  lowerText?: string;
}

function ButtonLink({ href, children, className, target2 }: ButtonLinkProps) {
  return (
      <a
        href={href}
        children={children}
        className={className}
        target={target2}
      ></a>
  );
}

export default ButtonLink;
