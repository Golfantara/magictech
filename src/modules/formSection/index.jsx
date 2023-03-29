const form = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 place-content-center">
      <div className="grid place-content-center">
        <div className="grid place-content-center w-[360px] grid-cols-1">
          <div className="grid place-content-center text-center">
            <h3>Contact</h3>
            <p>
              Dibuka Kesempatan juga Informasi produk dan penesaban bisa
              menghubungi kontak dibawah ini
            </p>
          </div>
          <div className="grid place-content-center text-center py-6">
            <img
              src="https://source.unsplash.com/100x100"
              className="rounded-full"
              alt=""
            />
            <p className="mt-2">Pesan Sekarang</p>
          </div>
          <div className="grid place-content-center">
            <p>0821-1788-8144</p>
            <p>0821-1788-8688</p>
          </div>
        </div>
      </div>

      <div>
        <form className="grid place-content-center" action="">
          <div className="grid place-content-center w-[360px] grid-cols-1">
            <label htmlFor="nama">Nama Anda :</label>
            <input
              className="bg-gray-200 shadow-lg rounded-lg p-1"
              type="text"
            />
          </div>
          <div className="grid grid-cols-1 ">
            <label htmlFor="whatsapp">Whatsapp :</label>
            <input
              className="bg-gray-200 shadow-lg rounded-lg p-1"
              type="number"
            />
          </div>
          <div className="grid grid-cols-1 ">
            <label htmlFor="email">Email : </label>
            <input
              className="bg-gray-200 shadow-lg rounded-lg p-1"
              type="email"
            />
          </div>
          <div className="grid grid-cols-1 ">
            <label htmlFor="message">Message : </label>
            <textarea
              className="bg-gray-200 shadow-lg rounded-lg p-1"
              type="text"
            />
          </div>
          <div className="grid place-content-center ">
            <button className="p-2 my-2 rounded-lg bg-yellow-200">Send</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default form;
