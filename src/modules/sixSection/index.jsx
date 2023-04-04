import bgSix from "@/assets/Group33.png";

const SixSection = () => {
  return (
    <div className="mt-12 px-4 lg:px-0">
      <div
        className="md:h-screen py-24 md:py-0 w-full bg-cover bg-no-repeat"
        style={{ backgroundImage: `url(${bgSix})` }}
      >
        <div className="grid grid-cols-1 md:grid-cols-2 h-full place-content-center">
          <div className="grid place-content-center px-2 lg:px-20">
            <p className="text-3xl md:text-5xl font-bold text-center md:text-start text-[#FABC2C] mb-6">
              MAGICTECH MENJADI SOLUSI KANKER DENGAN CARA :
            </p>
            <p className="text-lg font-bold text-white">• Apoptosis</p>
            <p className="pl-2 text-white">
              Meracuni dan melepas sel kanker secara berkala
            </p>
            <p className="text-lg font-bold text-white">• Sitotoksik</p>
            <p className="pl-2 text-white">
              Meracuni dan melepas sel kanker secara berkala
            </p>
            <p className="text-lg font-bold text-white">• Anti Engiogenesis</p>
            <p className="pl-2 text-white">
              Meracuni dan melepas sel kanker secara berkala
            </p>
            <p className="text-lg font-bold text-white">• Antioksidan</p>
            <p className="pl-2 text-white">
              Meracuni dan melepas sel kanker secara berkala
            </p>
            <p className="text-lg font-bold text-white">• Antiinflamasi</p>
            <p className="pl-2 text-white">
              Meracuni dan melepas sel kanker secara berkala
            </p>
          </div>
          <div className="grid place-content-center"></div>
        </div>
      </div>
    </div>
  );
};

export default SixSection;
