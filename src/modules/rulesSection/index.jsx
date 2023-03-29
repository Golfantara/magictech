import { lazy } from "react";
const TableSection = lazy(() => import("@/modules/rulesSection/table"));

const Rules = () => {
  return (
    <div className="my-24">
      <div className="grid grid-cols-1 lg:grid-cols-2 place-content-center lg:px-64">
        <div className="grid px-4 lg:px-0 lg:place-content-center">
          <p className="text-[#1D88C9] mb-4 text-3xl md:text-4xl font-bold">
            ANJURAN PEMAKAIAN
          </p>
          <img src="https://source.unsplash.com/500x500" alt="" />
        </div>
        <div className="grid px-4 lg:px-0 lg:place-content-center">
          <p className="font-bold my-4">Dosis Pemakaian</p>
          <p className="mb-2">• 1 X 1 Sehari = Untuk Pencegahan</p>
          <p className="mb-2">• 3 X 1 Sehari = Untuk Stadium Awal</p>
          <p className="mb-2">• 4 X 2 Sehari = Untuk Stadium Lanjutan</p>
          <div className="h-1 w-full bg-black my-2"></div>
          <p className="font-bold my-4">Ketentuan</p>
          <p className="mb-2">• Diminum Setelah Makan</p>
          <p className="mb-2">• Diminum Pada jam yang Sama Setiap Hari</p>
          <p className="ml-4 mb-2 underline italic">Contohnya :</p>
          <TableSection />
        </div>
      </div>
    </div>
  );
};

export default Rules;
