import NewsThirdLayout from "@/layouts/NewsThird";
import WrapperThirdLayout from "@/layouts/NewsThird/WrapperThird";
import img1 from "@/assets/5bfa69a0-a152-11eb-aced-b1e4142150fb 1.png";
import img2 from "@/assets/Vladimir_Lenin 1.png";
import img3 from "@/assets/download (5) 1.png";
import img4 from "@/assets/YCv63VfL_400x400 1.png";

const ThirdSection = () => {
  return (
    <>
      <NewsThirdLayout>
        <div className="grid place-content-center lg:place-content-end">
          <WrapperThirdLayout>
            <div className="grid place-content-center grid-cols-1 md:grid-cols-[30%_70%]">
              <div>
                <img src={img1} className="rounded-l-2xl" alt="" />
              </div>
              <div className="p-3 grid justify-center items-center">
                <p className="text-2xl">
                  Kanker bisa mengambil semua kemampuan fisik ku. Tapi tidak
                  bisa menyatukan pikiran, hati, dan jiwa ku.
                </p>
                <p className="text-white mt-2">
                  <span className="font-bold">Jim Valvano, </span>Mantan pelatih
                  basket perguruan tinggi dan penggiat kanker
                </p>
              </div>
            </div>
          </WrapperThirdLayout>
        </div>
        <div className="grid place-content-center lg:place-content-end">
          <WrapperThirdLayout>
            <div className="grid justify-center items-center grid-cols-1 md:grid-cols-[30%_70%]">
              <div>
                <img src={img2} className="rounded-l-2xl" alt="" />
              </div>
              <div className="p-3 grid justify-center items-center">
                <p className="text-2xl">
                  Hal terpenting dalam sakit adalah jangan pernah putus asa.
                </p>
                <p className="text-white mt-2">
                  <span className="font-bold">Nikolai Lenin, </span>mantan
                  pemimpin Uni Soviet yang juga selamat dari kanker.
                </p>
              </div>
            </div>
          </WrapperThirdLayout>
        </div>
        <div className="grid place-content-center lg:place-content-end">
          <WrapperThirdLayout>
            <div className="grid justify-center items-center grid-cols-1 md:grid-cols-[30%_70%]">
              <div>
                <img src={img3} className="rounded-l-2xl" alt="" />
              </div>
              <div className="p-3 grid justify-center items-center">
                <p className="text-2xl">
                  Kanker adalah panggilan untuk membangunkan. Kanker adalah
                  pengingat bahwa hidup itu berharga dan waktu itu adalah hadiah
                </p>
                <p className="text-white mt-2">
                  <span className="font-bold">Dr. Phyllis Kosminsky. </span>Ahli
                  psikologi klinis dan penulis.
                </p>
              </div>
            </div>
          </WrapperThirdLayout>
        </div>
        <div className="grid place-content-center lg:place-content-end">
          <WrapperThirdLayout>
            <div className="grid justify-center items-center grid-cols-1 md:grid-cols-[30%_70%]">
              <div className="">
                <img src={img4} className="rounded-l-2xl" alt="" />
              </div>
              <div className="p-3 grid justify-center items-center">
                <p className="text-2xl">
                  Kanker dapat menyentuh setiap aspek kehidupanmu, tetapi tidak
                  dapat mengendalikan sikap, semangat, atau keyakinanmu.
                </p>
                <p className="text-white mt-2">
                  <span className="font-bold">Melanie K. Schnoll Begun. </span>
                  Penyintas kanker yang menjadi penggiat kanker.
                </p>
              </div>
            </div>
          </WrapperThirdLayout>
        </div>
      </NewsThirdLayout>
    </>
  );
};

export default ThirdSection;
