import { Link } from "react-router-dom";
import img from "@/assets/Group66.png";
import img1 from "@/assets/Cek-Produk-BPOM-BPOM-RI 1.png";
import bpom from "@/assets/NIE.pdf";
import mui from "@/assets/Halal.pdf";

const Bpom = () => {
  return (
    <div className="my-12">
      <div className="grid grid-cols-1 lg:grid-cols-2 place-content-center lg:px-64">
        <div className="grid place-content-center">
          <p className="text-[#1D88C9] text-3xl md:text-5xl font-bold">
            Berserifikat halal
            <p className="text-[#1D88C9] text-3xl md:text-5xl font-bold text-center mb-6 md:mb-12">
              dan BPOM
            </p>
          </p>
          <div className="grid place-content-center mb-4">
            <div className="grid place-content-center">
              <img src={img} alt="" />
            </div>
          </div>
        </div>
        <div className="grid place-content-center px-4">
          <p className="mb-4 text-lg">
            Produk kami sudah memiliki sertifikat halal resmi dengan
            <span className="font-bold"> No. 0013008813418</span> dan sudah
            melewati pengawasan Obat dan Makanan dengan no izin edar
            <span className="font-bold"> POM TR183311441</span>
          </p>
          <img src={img1} alt="" />
          <div className="grid grid-cols-2 md:grid-cols-3 place-content-start gap-4 mt-4">
            <div className="grid place-content-center">
              <Link
                to={bpom}
                target="_blank"
                className="underline text-[#1972F5]"
              >
                Lihat Surat BPOM
              </Link>
            </div>
            <div className="grid place-content-center">
              <Link
                to={mui}
                target="_blank"
                className="underline text-[#1972F5]"
              >
                Lihat Sertifikat Halal
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Bpom;
