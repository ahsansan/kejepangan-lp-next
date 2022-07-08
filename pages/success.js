import Head from "next/head";
import Footer from "../components/footer";
import styles from "../styles/Home.module.css";

export default function Success() {
  return (
    <div>
      <Head>
        <title>Terima Kasih Telah Order Paket Ebook Kejepangan</title>
        <meta
          name="description"
          content="Terima Kasih Telah Melakukan Pemesanan Paket Ebook Kejepangan."
        />
      </Head>

      <div className={styles.container}>
        <div className="shadow-lg max-w-xl bg-slate-200 rounded m-auto my-7 p-5">
          <h2 className="text-2xl font-bold text-center">
            Terima Kasih Telah Order
          </h2>
          <div className="flex flex-row flex-wrap my-6 justify-center items-center">
            <div className="w-[1/3]">
              <img
                src="/CaraAsikBelajarKanji.png"
                alt="Cara Asik Belajar Kanji"
                className="rounded w-32"
              />
            </div>
            <div className="w-[1/3]">
              <img
                src="/MenguasaiKosakata.png"
                alt="Menguasai Kosakata"
                className="w-32"
              />
            </div>
            <div className="w-[1/3]">
              <img
                src="/FormulaKaiwa.png"
                alt="Formula Kaiwa"
                className="w-32"
              />
            </div>
          </div>
          <p className="text-xl font-semibold text-red-700 text-center">
            Paket Ebook Kejepangan
          </p>
          <p className="text-lg italic text-slate-800 text-center">Rp 50.000</p>
          <hr />
          <p className="font-semibold text-sm my-5 italic">
            Silahkan transfer ke salah satu rekening ini :
          </p>
          <div className="flex flex-row flex-wrap mb-5 rounded bg-white">
            <div className="w-[1/4]">
              <img src="/BCA.png" alt="Bank BCA" className="rounded m-3" />
            </div>
            <div className="w-[3/4] ml-3 my-4 text-sm">
              <p className="font-bold">BCA</p>
              <p>5610264125</p>
              <p>Muhammad Maulana Ahsan</p>
            </div>
          </div>
          <div className="flex flex-row flex-wrap mb-5 rounded bg-white">
            <div className="w-[1/4]">
              <img
                src="/Mandiri.png"
                alt="Bank Mandiri"
                className="rounded m-3"
              />
            </div>
            <div className="w-[3/4] ml-3 my-4 text-sm">
              <p className="font-bold">Mandiri</p>
              <p>178-000-1599-048</p>
              <p>Muhammad Maulana Ahsan</p>
            </div>
          </div>
          <div className="flex flex-row flex-wrap mb-5 rounded bg-white">
            <div className="w-[1/4]">
              <img src="/GoPay.png" alt="GoPay" className="rounded m-3" />
            </div>
            <div className="w-[3/4] ml-3 my-4 text-sm">
              <p className="font-bold">GoPay</p>
              <p>0822-2600-5644</p>
              <p>Muhammad Maulana Ahsan</p>
            </div>
          </div>
          <div className="flex flex-row flex-wrap mb-5 rounded bg-white">
            <div className="w-[1/4]">
              <img src="/OVO.png" alt="OVO" className="rounded m-3" />
            </div>
            <div className="w-[3/4] ml-3 my-4 text-sm">
              <p className="font-bold">OVO</p>
              <p>0822-2600-5644</p>
              <p>Muhammad Maulana Ahsan</p>
            </div>
          </div>
          <div className="flex flex-row flex-wrap mb-5 rounded bg-white">
            <div className="w-[1/4]">
              <img src="/Dana.png" alt="OVO" className="rounded m-3" />
            </div>
            <div className="w-[3/4] ml-3 my-4 text-sm">
              <p className="font-bold">DANA</p>
              <p>0822-2600-5644</p>
              <p>Muhammad Maulana Ahsan</p>
            </div>
          </div>
          <div className="flex flex-row flex-wrap mb-5 rounded bg-white">
            <div className="w-[1/4]">
              <img
                src="/ShopeePay.png"
                alt="ShopeePay"
                className="rounded m-3"
              />
            </div>
            <div className="w-[3/4] ml-3 my-4 text-sm">
              <p className="font-bold">ShopeePay</p>
              <p>0822-2600-5644</p>
              <p>Muhammad Maulana Ahsan</p>
            </div>
          </div>
          <div className="text-sm mt-9">
            <p>Sudah melakukan transfer?</p>
            <div className="flex flex-row p-2 bg-green-700 w-[200px] text-center rounded hover:bg-green-600 my-3">
              <img src="/waicon.svg" alt="wa" />
              <a
                href="https://api.whatsapp.com/send?phone=6285855997747&text=Saya%20sudah%20transfer%20kak%2C%20tolong%20segera%20diproses%20%F0%9F%98%81"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white ml-1"
              >
                Konfirmasi Pembayaran
              </a>
            </div>
          </div>
        </div>
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
}
