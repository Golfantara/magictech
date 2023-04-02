import Line from "@/layouts/fifthLayout";

const marketPlace = () => {
  return (
    <div className="border-y-2 my-12 py-12 grid place-content-center">
      <div className="text-center">
        <h4>PEMESANAN</h4>
      </div>
      <div className="text-center">
        <p>Sebagai langkah dalam memudahkan pelanggan,</p>
        <p>kami menyediakan penjualan dari berbagai platform marketplace</p>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-4 place-content-center gap-4">
        <div className="md:col-start-2 grid place-content-center">
          <button className="bg-[#5DB552] text-[#FFE5E6] py-2 px-5 rounded-lg">
            Tokopedia
          </button>
        </div>
        <div className="md:col-start-3 grid place-content-center">
          <button className="bg-[#E9552D] text-[#FFE5E6] py-2 px-5 rounded-lg">
            Shopee
          </button>
        </div>
      </div>
    </div>
  );
};

export default marketPlace;
