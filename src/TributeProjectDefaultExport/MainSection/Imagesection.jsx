import Image from "../assets/diogo-jota.jpg";

function Imagesection() {
  return (
    <div className=" display-flex self-center height-120 w-60 rounded-lg overflow-hidden shadow-lg width-120 border-radius-8px objectFit-cover">
      <img src={Image} alt="Diogo Jota's photo" />
    </div>
  );
}
export default Imagesection;
