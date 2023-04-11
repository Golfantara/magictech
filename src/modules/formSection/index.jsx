import { createClient } from "@supabase/supabase-js";
import { useState } from "react";
// import { supabase } from "@/supabase";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import { useForm } from "react-hook-form";

const supabase = createClient(
  "https://jofvxhgtyycklilvjpre.supabase.co",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImpvZnZ4aGd0eXlja2xpbHZqcHJlIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTY4MTE3NjE0MSwiZXhwIjoxOTk2NzUyMTQxfQ.mhkD-kTePEsv2Cw7oqjxkoSmlf4dqwdFhnGy0sKorWM"
);

const form = () => {
  const [nama, setNama] = useState("");
  const [whatsapp, setWhatsapp] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const [loading, setLoading] = useState(false);

  const {
    control,
    formState: { isValid },
    handleSubmit,
  } = useForm({
    mode: "all",
    defaultValues: {
      nama: "dida",
      whatsapp: "",
      email: "",
      message: "",
    },
  });

  const MySwal = withReactContent(Swal);

  const onSubmit = handleSubmit(async (data) => {
    const { nama, whatsapp, email, message } = data;
    const payload = { nama, whatsapp, email, message };
    try {
      setLoading(true);
      const { error } = await supabase
        .from("form")
        .insert({ ...payload, nama, whatsapp, email, message });
      if (error) {
        setLoading(false);
        MySwal.fire({
          title: "Telah terjadi error",
          text: error.message,
          icon: "error",
        });
      }
      setLoading(false);
      if (!error) {
        console.log(data);
        MySwal.fire({
          title: "Anda Berhasil mengisi form!",
          icon: "success",
        });
      }
    } catch (err) {
      throw err;
    }
  });

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
            <svg
              width="100px"
              height="100px"
              viewBox="0 0 48 48"
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
              xmlns:xlink="http://www.w3.org/1999/xlink"
            >
              <title>Whatsapp-color</title>
              <desc>Created with Sketch.</desc>
              <defs></defs>
              <g
                id="Icons"
                stroke="none"
                stroke-width="1"
                fill="none"
                fill-rule="evenodd"
              >
                <g
                  id="Color-"
                  transform="translate(-700.000000, -360.000000)"
                  fill="#67C15E"
                >
                  <path
                    d="M723.993033,360 C710.762252,360 700,370.765287 700,383.999801 C700,389.248451 701.692661,394.116025 704.570026,398.066947 L701.579605,406.983798 L710.804449,404.035539 C714.598605,406.546975 719.126434,408 724.006967,408 C737.237748,408 748,397.234315 748,384.000199 C748,370.765685 737.237748,360.000398 724.006967,360.000398 L723.993033,360.000398 L723.993033,360 Z M717.29285,372.190836 C716.827488,371.07628 716.474784,371.034071 715.769774,371.005401 C715.529728,370.991464 715.262214,370.977527 714.96564,370.977527 C714.04845,370.977527 713.089462,371.245514 712.511043,371.838033 C711.806033,372.557577 710.056843,374.23638 710.056843,377.679202 C710.056843,381.122023 712.567571,384.451756 712.905944,384.917648 C713.258648,385.382743 717.800808,392.55031 724.853297,395.471492 C730.368379,397.757149 732.00491,397.545307 733.260074,397.27732 C735.093658,396.882308 737.393002,395.527239 737.971421,393.891043 C738.54984,392.25405 738.54984,390.857171 738.380255,390.560912 C738.211068,390.264652 737.745308,390.095816 737.040298,389.742615 C736.335288,389.389811 732.90737,387.696673 732.25849,387.470894 C731.623543,387.231179 731.017259,387.315995 730.537963,387.99333 C729.860819,388.938653 729.198006,389.89831 728.661785,390.476494 C728.238619,390.928051 727.547144,390.984595 726.969123,390.744481 C726.193254,390.420348 724.021298,389.657798 721.340985,387.273388 C719.267356,385.42535 717.856938,383.125756 717.448104,382.434484 C717.038871,381.729275 717.405907,381.319529 717.729948,380.938852 C718.082653,380.501232 718.421026,380.191036 718.77373,379.781688 C719.126434,379.372738 719.323884,379.160897 719.549599,378.681068 C719.789645,378.215575 719.62006,377.735746 719.450874,377.382942 C719.281687,377.030139 717.871269,373.587317 717.29285,372.190836 Z"
                    id="Whatsapp"
                  ></path>
                </g>
              </g>
            </svg>
            <p className="mt-2">Pesan Sekarang</p>
          </div>
          <div className="grid place-content-center">
            <p>0821-1788-8144</p>
            <p>0821-1788-8688</p>
          </div>
        </div>
      </div>

      <div>
        <form onSubmit={onSubmit} className="grid place-content-center">
          <div className="grid place-content-center w-[360px] grid-cols-1">
            <label htmlFor="nama">Nama Anda :</label>
            <input
              control={control}
              label="Nama"
              name="nama"
              value={nama}
              onChange={(e) => setNama(e.target.value)}
              className="bg-gray-200 shadow-lg rounded-lg p-1"
              type="text"
            />
          </div>
          <div className="grid grid-cols-1 ">
            <label htmlFor="whatsapp">Whatsapp :</label>
            <input
              control={control}
              value={whatsapp}
              onChange={(e) => setWhatsapp(e.target.value)}
              className="bg-gray-200 shadow-lg rounded-lg p-1"
              type="number"
            />
          </div>
          <div className="grid grid-cols-1 ">
            <label htmlFor="email">Email : </label>
            <input
              control={control}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="bg-gray-200 shadow-lg rounded-lg p-1"
              type="email"
            />
          </div>
          <div className="grid grid-cols-1 ">
            <label htmlFor="message">Message : </label>
            <textarea
              control={control}
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="bg-gray-200 shadow-lg rounded-lg p-1"
              type="text"
            />
          </div>
          <div className="grid place-content-center ">
            <button className="p-2 my-2 rounded-lg bg-yellow-200">
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default form;
