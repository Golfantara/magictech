import dokter from "@/assets/Group 6.png";
import bgDr from "@/assets/Group60.png";
const Profile = () => {
  return (
    <div
      className="md:h-screen py-12 md:py-0 w-full bg-cover bg-no-repeat"
      style={{ backgroundImage: `url(${bgDr})` }}
    >
      <div className="grid grid-cols-1 lg:grid-cols-2 place-content-center px-4 lg:px-64">
        <div className="grid place-content-center">
          <img src={dokter} alt="" className="rounded-full" />
        </div>
        <div className="grid place-content-center py-12 text-white">
          <p className="text-4xl font-bold">Dr. Insan Agung Nugroho</p>
          <div className="w-full h-0.5 bg-white my-4"></div>
          <p className="font-bold text-xl">Konsultan Medis</p>
          <p className="my-2 text-lg">
            Dokter Insan Agung Nugroho adalah Konsul Medis terbaik kami yang
            lahir tanggal 27 Juli 1974.
          </p>
          <p className="mb-3 text-lg">
            Memulai jenjang kedokteran di Universitas Sebelas Maret Tahun 1993
            dengan banyak kendala terutama biaya, membuat beliau berpikir
            kreatif untuk memulai bisnis. Dimulai dari bisnis jualan kue, daging
            ayam potong, hingga beternak ayam
          </p>
          <p className="mb-3 text-lg">
            Tahun 1999 beliau bertemu metode terapi Thibbuna Nabawi pada saat
            menjadi relawan di RS al-Fatah, Ambon. Berkat pengalaman ini, beliau
            pun mulai fokus pada pengobatan terapi herbal alami.
          </p>
          <p className="mb-3 text-lg">
            Sebagai konsultan medis, beliau pernah menjadi guest speaker di PT.
            Green Herba pada 2006, memberikan seminar herbal di beberapa tempat
            di Indonesia, membuka konsultasi medis di PT. Habbatussauda Obat
            Segala Penyakit
          </p>
        </div>
      </div>
    </div>
  );
};

export default Profile;
