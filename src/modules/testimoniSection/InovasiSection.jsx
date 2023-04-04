import img from "@/assets/manggistech tempu 01.png";

const InovasiSection = () => {
  return (
    <div className="grid place-content-center px-4 md:px-0">
      <div className="my-12">
        <h1 className="text-start md:text-center text-2xl md:text-5xl font-bold">
          INOVASI TERBARU
        </h1>
        <p className="text-start md:text-center text-2xl">
          Magictech, paket herbal terbaik solusi kanker
        </p>
      </div>
      <div>
        <img src={img} alt="" className="max-w-xs md:max-w-xl" />
      </div>
    </div>
  );
};

export default InovasiSection;
