import image from "@/assets/ekstraksipurifikasi.png";
import imageMobile from "@/assets/PROSES ESTRAKSI PURIFIKASI ALFA MANGOSTIN - MOBILE.png";
const purifikasi = () => {
  return (
    <div className="my-12 px-4 lg:px-0">
      <div className="md:hidden">
        <img src={imageMobile} alt="" />
      </div>
      <div className="hidden md:grid place-content-center">
        <img src={image} alt="" />
      </div>
    </div>
  );
};

export default purifikasi;
