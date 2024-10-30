import Carousel from "../common/Carousel";

function Reviews() {
  const slides = [
    {
      src: "../src/assets/merida.png",
      text: "Mérida, Yucatán"
    },
    {
      src: "../src/assets/cancun.png",
      text: "Cancún, Quintana Roo"
    },
    {
      src: "../src/assets/acapulco.png",
      text: "Acapulco, Guerrero"
    },
    {
      src: "../src/assets/xalapa.png",
      text: "Xalapa, Veracruz"
    },
    {
      src: "../src/assets/xalapa2.png",
      text: "Xalapa, Veracruz"
    },
    {
      src: "../src/assets/acapulco2.png",
      text: "Acapulco, Guerrero"
    },
    {
      src: "../src/assets/puebla.png",
      text: "Puebla, Puebla"
    },
    {
      src: "../src/assets/xalapa3.png",
      text: "Xalapa, Veracruz"
    },
    {
      src: "../src/assets/boca.png",
      text: "Boca del Río, Veracruz"
    },
  ];
  return (
    <section
      id="reviews"
      className="flex max-w-7xl h-[700px] flex-col items-center px-8 py-20 lg:m-auto lg:flex-row lg:px-12"
    >
      <Carousel slides={slides} />
    </section>
  );
}

export default Reviews;