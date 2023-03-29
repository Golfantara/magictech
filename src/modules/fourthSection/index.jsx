import bgFour from "@/assets/bgFourth.jpeg";

const FourthSection = () => {
  return (
    <div className="mt-12">
      <div
        className="md:h-screen py-24 md:py-0 w-full bg-cover bg-no-repeat"
        style={{ backgroundImage: `url(${bgFour})` }}
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 h-full place-content-center">
          <div className="grid place-content-center"></div>
          <div className="grid place-content-center lg:px-20">
            <p className="text-3xl md:text-5xl font-bold text-center md:text-start">
              MAGICTECH, HERBAL SOLUSI KANKER
            </p>
            <p className="text-lg text-center md:text-start">
              Sepaket kecanggihan herbal yang bekerja lebih
            </p>
            <p className="text-lg text-center md:text-start">
              optimal saat dikonsumsi
            </p>
            <div className="grid pt-6 grid-cols-2 px-4 md:px-0 gap-2 md:grid-cols-4">
              <button className="bg-[#1D88C9] p-1 py-2 rounded-lg text-base text-white">
                Beli Sekarang
              </button>
              <button className="bg-[#C92064] p-1 py-2 rounded-lg text-base text-white">
                Tanya Dokter
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FourthSection;
