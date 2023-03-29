import NewsLayout from "@/layouts/News";
import WrapperLayout from "@/layouts/News/Wrapper";

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
            <img src="https://source.unsplash.com/440x280" alt="" />
          </WrapperLayout>
        </div>
        <div className="grid place-content-center lg:place-content-start">
          <WrapperLayout>
            <p className="text-lg">
              396,914 penderita Kanker di Indonesia <br /> pada tahun 2020
            </p>
            <div className="h-1 w-full bg-white my-2 rounded-l-full rounded-r-full"></div>
            <img src="https://source.unsplash.com/440x280" alt="" />
          </WrapperLayout>
        </div>
        <div className="grid place-content-center lg:place-content-end">
          <WrapperLayout>
            <p className="text-lg">
              946,088 masyarakat diprediksi <br /> terserang kanker di tahun
              2025
            </p>
            <div className="h-1 w-full bg-white my-2 rounded-l-full rounded-r-full"></div>
            <img src="https://source.unsplash.com/440x280" alt="" />
          </WrapperLayout>
        </div>
        <div className="grid place-content-center lg:place-content-start">
          <WrapperLayout>
            <p className="text-lg p-4">Biaya Pengobatan Kanker yang Mahal</p>
            <div className="h-1 w-full bg-white my-2 rounded-l-full rounded-r-full"></div>
            <img src="https://source.unsplash.com/440x280" alt="" />
          </WrapperLayout>
        </div>
      </NewsLayout>
    </>
  );
};

export default NewsSection;
