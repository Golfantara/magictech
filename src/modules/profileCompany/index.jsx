const profileCompany = () => {
  return (
    <div className="my-12">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 place-content-center px-4 lg:px-64">
        <div className="grid place-content-center">
          <img
            src="https://source.unsplash.com/522x370"
            className="rounded-lg"
            alt=""
          />
        </div>
        <div className="grid place-content-center">
          <p className="text-[#1D88C9] text-4xl font-bold mb-10">
            MAGICTECH TEAM
          </p>
          <p className="mb-2 text-lg">
            Dengan Bismillah dan Niat untuk Memajukan Bangsa. Perkenalkan, Tim
            Besar Magictech yang selalu bekerja keras menciptakan produk dan
            pelayanan terbaik untuk masyarakat Indonesia.
          </p>
          <p className="mb-2 text-lg">
            Insyallah. Dengan silaturahmi yang di junjung tinggi, kualitas
            produk akan selalu berada dalam kondisi terbaik bagi anda sekalian.
          </p>
          <p className="text-[#1D88C9] text-lg">
            Karena kami percaya dengan keberadaan kami masyarakat akan
            mendapatkan pengobatan alami terbaik.
          </p>
        </div>
      </div>
    </div>
  );
};

export default profileCompany;
