import { Link } from "react-router-dom";
import image from "@/assets/MAGICTECH 04 1.png";

const Solution = () => {
  return (
    <div className="my-24">
      <div className="grid grid-cols-1 lg:grid-cols-2 place-content-center">
        <div className="grid place-content-center bg-[#FFD155] px-4 lg:pl-44 py-12">
          <p className="text-4xl font-bold mb-10">JANGAN KETINGGALAN</p>
          <p className="text-2xl font-semibold">
            KHUSUS BUAT KAMU YANG BELI <br /> SEKARANG BISA DAPET HARGA <br />
            LEBIH MIRING !!
          </p>
          <div className="h-0.5 w-1/2 bg-[#1D88C9] my-6"></div>
          <p className="text-xl mb-10">
            Buruan order dan dapetin potongan <br /> harganya sebelum kehabisan
            !!
          </p>
          <div>
            <button className="bg-[#1D88C9] text-white py-2 px-5 rounded-lg text-xl hover:font-bold">
              <Link to="https://wa.link/ncmd49" target="_blank">
                Pesan Sekarang
              </Link>
            </button>
          </div>
        </div>
        <div>
          <img src={image} className="w-full" alt="" />
        </div>
      </div>
    </div>
  );
};

export default Solution;
