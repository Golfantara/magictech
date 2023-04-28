import { Link } from "react-router-dom";

const marketPlace = () => {
  return (
    <div className="border-y-2 my-12 py-12 grid place-content-center">
      <div className="text-center">
        <h4 className="font-bold text-3xl">PEMESANAN</h4>
      </div>
      <div className="text-center">
        <p>Sebagai langkah dalam memudahkan pelanggan,</p>
        <p>kami menyediakan penjualan dari berbagai platform marketplace</p>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-4 mt-2 place-content-center gap-4">
        <div className="md:col-start-2 grid place-content-center hover:scale-90">
          <Link
            to="https://www.tokopedia.com/herbalsehatnabi/manggistech-untuk-kanker-leukemia-kanker-paru-kanker-payudara?extParam=whid%3D105882"
            target="_blank"
            className="bg-[#5DB552] text-[#FFE5E6] py-2 px-5 rounded-lg"
          >
            Tokopedia
          </Link>
        </div>
        <div className="md:col-start-3 grid place-content-center hover:scale-90">
          <Link
            to="https://shopee.co.id/Manggistech-untuk-Leukeumia-Kanker-Usus-Besar-Kanker-Paru-Kanker-Payudara-Kanker-Prostat-Kanker-Pankreas-Kanker-Kulit-Kanker-Mulut-Kanker-Tulang-Kanker-otak-Kanker-liver-Hepar-i.25592855.18914542625?sp_atk=a8f7c15a-05d9-4eee-b22c-ca5ab6be142b&xptdk=a8f7c15a-05d9-4eee-b22c-ca5ab6be142b"
            className="bg-[#E9552D] text-[#FFE5E6] py-2 px-5 rounded-lg"
            target="_blank"
          >
            Shopee
          </Link>
        </div>
      </div>
    </div>
  );
};

export default marketPlace;
