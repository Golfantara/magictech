import NewsLayout from "@/layouts/News";
import WrapperLayout from "@/layouts/News/Wrapper";
import img1 from "@/assets/Screenshot_2022_0907_105040 1.png";
import img2 from "@/assets/Screenshot_2022_0907_105253 1.png";
import img3 from "@/assets/Screenshot_20220907_110324 1.png";
import img4 from "@/assets/Screenshot_2022_0907_105451 1.png";

const NewsSection = () => {
  return (
    <>
      <NewsLayout>
        <div className="grid place-content-center lg:place-content-end">
          <WrapperLayout>
            <p className="text-lg">
              Kanker Merupakan Penyebab Kematian <br /> No 2 Di Dunia
            </p>
            <div className="h-1 w-full bg-white my-2 rounded-l-full rounded-r-full"></div>
            <img src={img1} alt="" className="w-fit" />
          </WrapperLayout>
        </div>
        <div className="grid place-content-center lg:place-content-start">
          <WrapperLayout>
            <p className="text-lg">
              396,914 penderita Kanker di Indonesia <br /> pada tahun 2020
            </p>
            <div className="h-1 w-full bg-white my-2 rounded-l-full rounded-r-full"></div>
            <img src={img2} alt="" className="w-fit" />
          </WrapperLayout>
        </div>
        <div className="grid place-content-center lg:place-content-end">
          <WrapperLayout>
            <p className="text-lg">
              946,088 masyarakat diprediksi <br /> terserang kanker di tahun
              2025
            </p>
            <div className="h-1 w-full bg-white my-2 rounded-l-full rounded-r-full"></div>
            <img src={img3} alt="" className="w-fit" />
          </WrapperLayout>
        </div>
        <div className="grid place-content-center lg:place-content-start">
          <WrapperLayout>
            <p className="text-lg">Biaya Pengobatan Kanker yang Mahal</p>
            <div className="h-1 w-full bg-white my-2 rounded-l-full rounded-r-full"></div>
            <img src={img4} alt="" className="w-fit" />
          </WrapperLayout>
        </div>
      </NewsLayout>
    </>
  );
};

export default NewsSection;
