import Head from "next/head";
import Footer from "../components/footer";
import styles from "../styles/Home.module.css";
import Router from "next/router";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Bahasa Jepang Asik by @kejepangan</title>
        <meta name="description" content="Bahasa Jepang Asik by @kejepangan." />
      </Head>

      <div className={styles.container}>
        <div className="shadow-lg max-w-xl bg-slate-100 rounded m-auto mt-7 p-5">
          <img
            src="/favicon.ico"
            alt="Ahsan Kejepangan"
            className="rounded-xl shadow-lg mx-auto mb-5 border-slate-200 border-[1px]"
          />
          <h2 className="text-2xl font-bold text-center">Ahsan - Kejepangan</h2>
          <p className="text-sm text-center">
            Membantu kamu untuk belajar bahasa Jepang dengan asik.
          </p>
          <div id="links" className="mt-8">
            <div className="text-center mt-3 bg-orange-200 rounded hover:bg-orange-300">
              <button
                onClick={() => Router.push("/ebook")}
                className="p-3 w-full"
              >
                Paket Ebook Kejepangan
              </button>
            </div>
            <div className="text-center mt-3 bg-orange-200 rounded hover:bg-orange-300">
              <a
                href="https://bit.ly/gotradeAhsan"
                target="_blank"
                rel="noreferrer"
              >
                <p className="p-3 w-full">
                  Mulai Investadi di Gotrade Indonesia Mulai dari $1
                </p>
              </a>
            </div>
            <div className="text-center mt-3 bg-orange-200 rounded hover:bg-orange-300">
              <a
                href="https://contentacademy.id/member/aff/go/seomaulana?i=5"
                target="_blank"
                rel="noreferrer"
              >
                <p className="p-3 w-full">
                  Belajar Menjadi Konten Kreator di Instagram
                </p>
              </a>
            </div>
          </div>
        </div>
        <div className="shadow-lg max-w-xl bg-slate-200 rounded mt-2 mb-7 m-auto p-5">
          <div id="sosmed">
            <div className="my-3 text-center">
              <img
                src="/IG.png"
                alt="Instagram"
                width={50}
                className="block m-auto"
              />
              <p className="font-bold">Instagram</p>
              <p className="font-bold">@kejepangan</p>
              <div className="text-center mt-3 bg-orange-700 text-white rounded hover:bg-orange-800 max-w-xs block m-auto">
                <a
                  href="https://instagram.com/kejepangan"
                  target="_blank"
                  rel="noreferrer"
                >
                  <p className="p-3 w-full">Follow</p>
                </a>
              </div>
            </div>
            <div className="my-3 text-center">
              <img
                src="/TikTok.png"
                alt="TikTok"
                width={50}
                className="block m-auto"
              />
              <p className="font-bold">TikTok</p>
              <p className="font-bold">@kejepangan</p>
              <div className="text-center mt-3 bg-slate-700 text-white rounded hover:bg-slate-800 max-w-xs block m-auto">
                <a
                  href="https://www.tiktok.com/@kejepangan"
                  target="_blank"
                  rel="noreferrer"
                >
                  <p className="p-3 w-full">Follow</p>
                </a>
              </div>
            </div>
            <div className="my-3 text-center">
              <img
                src="/Youtube.png"
                alt="Youtube"
                width={50}
                className="block m-auto"
              />
              <p className="font-bold">Youtube</p>
              <p className="font-bold">Kejepangan</p>
              <div className="text-center mt-3 bg-red-700 text-white rounded hover:bg-red-800 max-w-xs block m-auto">
                <a
                  href="https://www.youtube.com/channel/UCZfT07x6pRpjwecfw3TJK_A"
                  target="_blank"
                  rel="noreferrer"
                >
                  <p className="p-3 w-full">Subscribe</p>
                </a>
              </div>
            </div>
          </div>
          <div id="kerjasama">
            <p className="text-slate-600 mt-5 text-center">
              Untuk Brand Endorsement, Webinar, Pemateri Klik disini:
            </p>
            <div className="text-center mt-3 bg-green-700 text-white rounded hover:bg-green-800 max-w-xs block m-auto">
              <a
                href="https://wa.me/6285855997747?text=Hello%20kak%2C%20saya%20mau%20mengajukan%20kerjasama%20dengan%20%40kejepangan"
                target="_blank"
                rel="noreferrer"
              >
                <p className="p-3 w-full">Chat Manager Ahsan</p>
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
