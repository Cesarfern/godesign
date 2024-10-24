import ButtonLink from "../common/ButtonLink";

function Nav() {
  const servidor = window.location.origin;
  console.log(servidor);
  const textLinkClasses =
    "text-[#fa057b] hover:text-gray-900 text-[20px] font-['system-ui'] font-bold p-8";

  const navLinks = [
    { href: "/quienes-somos", children: "¿Quiénes somos?" },
    { href: "/seminarios-talleres", children: "Seminarios y Talleres" },
    { href: "/quienes-somos", children: "Mis Cursos" },
    { href: "/comprar", children: "Comprar" },
  ];

  return (
    <div className="flex h-[102px] w-full items-center justify-evenly border-b-[5px] border-[#c7c7c7]">
      <div className="flex mx-8">
        <ButtonLink
          href="/"
          className="w-[120px]"
          children={<img src={"../src/assets/logos/logo_codesign.webp"} alt="Kobodrop logo" />}
        />
      </div>
        {navLinks.map((link, index) => (
          <ButtonLink
            key={index}
            href={link.href}
            children={link.children}
            className={textLinkClasses}
          />
        ))}
      <div className="flex items-center justify-around mx-8">
        <ButtonLink
            href="#"
            children={<img src={"../src/assets/logos/carrito.png"} width={34} height={28.5} alt="Kobodrop logo" />}
          />
          <ButtonLink
            href="#"
            children={<div className="flex items-center justify-around">
              <img src={"../src/assets/logos/icono-sesion.png"} width={32} height={32} className="mx-3" alt="Kobodrop logo" />
              <div className="font-['system-ui'] text-[#757575]">Iniciar sesión</div></div>}
          />
          
      </div>
    </div>
  );
}
export default Nav;
