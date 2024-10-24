import ButtonLink from "../common/ButtonLink";

function Comprar_section() {
    const li_style="font-['system-ui'] font-[350] my-[10px]"
  return (
    <section className="flex flex-col items-center bg-[#E8E6E6]">
        <img className="w-[600px] my-[27px]" src={"./src/assets/programa-trafficker.gif"}/>
        <div className="flex justify-evenly">
            <div className="flex flex-col items-center">
                <img className="w-[270px]" src={"./src/assets/compra-segura.webp"}/>
                <img className="w-[370px] my-[70px]" src={"./src/assets/trafficker-producto.png"}/>
                <div className="flex">
                    <img className="w-[170px]" src={"./src/assets/mercado-libre.webp"}/>
                    <img className="w-[170px]" src={"./src/assets/paypal.webp"}/>
                </div>
            </div>
            <div className="bg-white px-[58px] ml-[30px]">
                <div className="flex flex-col items-center w-[394px] h-[700px] mt-[20px]">
                    <div className="text-[15px] w-[140px] h-[30px] leading-[30px] bg-[#794577] text-white font-['system-ui'] text-center mb-[-15px] z-10">
                        RECOMENDADO
                    </div>
                    <div className="flex flex-col items-center font-['system-ui'] font-[350] bg-[#ffe5ee] w-[452px] py-[30px] border-[1px] border-[#ccc] z-0">
                        <div className="text-[23px]">
                            Programa Trafficker
                        </div>
                        <div className="flex">
                            <div className="pt-[8px] text-[18px]">MXN</div><strong className="text-[70px] font-[400]">1975</strong>
                        </div>
                        <div className="text-center mb-[40px]">
                            Crea Campañas de Mkt Digital como todo <br/> un Profesional
                        </div>
                        <ButtonLink
                            className="bg-[#794577] text-white font-['system-ui'] w-[294px] h-[48px] leading-[48px] text-center"
                            href=""
                            children={"Comprar Ahora"}
                        />
                    </div>
                    <ul className="flex flex-col items-center w-[452px] border-x-[1px] border-b-[1px] border-[#ccc] py-[15px]">
                        <li className={li_style}>✅ Más de 60 Tutoriales</li>
                        <li className={li_style}>✅ Constancia de Aprobación</li>
                        <li className={li_style}>✅ Presentaciones en PDF</li>
                        <li className={li_style}>✅ 3 Módulos: Trafficker, Segmenta, Neuromarketing</li>
                        <li className={li_style}>✅ Garantía de Satisfacción por 14 días</li>
                        <li className={li_style}>✅ Grupo de Soporte en Fb</li>
                        <li className={li_style}>✅ Ingresar a la Comunidad de Traffickers Latam</li>
                    </ul>
                </div>
            </div>
        </div>
    </section>
  );
}

export default Comprar_section;