import React from 'react'

function Conoce() {
  return (
    <section className="flex flex-col items-center bg-white px-[110px] pt-2">
        <h1 className="font-['system-ui'] font-bold text-[#fa057b] text-[57px] mt-5 mb-9">
        Conoce nuestra misión y visión</h1>
        <iframe className='z-[1]' width="811" height="453" src={"https://www.youtube.com/embed/HBSh1t4uip0"}></iframe>
        <img
          className="absolute top-[1345px] right-[135px] z-0 w-[520px]"
          src={"../src/assets/logos/wix.webp"} width={402} height={492}
        />
    </section>
  );
}

export default Conoce;