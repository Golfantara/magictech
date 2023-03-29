import Line from "@/layouts/fifthLayout";

const fifthSection = () => {
  return (
    <div className="mt-12">
      <h1 className="text-start px-4 md:px-0 md:text-center text-3xl md:text-5xl font-bold text-[#C92064]">
        HANYA KAMI, SATU-SATUNYA YANG TELAH <br /> MENGGUNAKAN HERBAL CANGGIH
        <div className="grid place-content-center">
          <Line />
        </div>
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:px-64 px-4 gap-8 place-content-center">
        <div className="text-lg">
          <p>
            Dunia herbal terus menerus berkembang untuk menemukan solusi terbaik
            bagi masyarakat. Seperti penggunaan bahan temu putih yang dikenal
            sebagai antikanker.
          </p>
          <p className="mt-4">
            Dahulu, temu putih dikonsumsi langsung seperti digeprek, diseduh,
            atau lainnya. Kemudian hadirlah ekstraksi yang menghasilkan ekstrak
            temu putih. Namun, nyatanya konsumsi temu putih baik secara langsung
            maupun dari ekstraknya belum cukup menjadi solusi karena masih
            bercampur dengan senyawa lain.
          </p>
        </div>
        <div className="text-lg">
          <p>
            Kini telah hadir teknologi yang bisa mengekstrak kembali hasil
            ekstraksi tersebut sehingga menghasilkan kinerja herbal yang lebih
            optimal yang kemudian disebut ekstrak terpurifikasi.
          </p>
          <p className="mt-4">
            Magictech merupakan paduan ekstrak terpurifikasi dari temu putih dan
            ekstrak kulit manggis yang dapat bekerja saling menguatkan dan
            melengkapi saat dikonsumsi bersama.
          </p>
        </div>
      </div>
    </div>
  );
};

export default fifthSection;
