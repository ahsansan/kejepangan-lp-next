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
        <div className="shadow-lg max-w-xl bg-slate-200 rounded m-auto my-7 p-5">
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
            <div className="text-center mt-3 bg-slate-300 rounded hover:bg-slate-400">
              <button
                onClick={() => Router.push("/ebook")}
                className="p-3 w-full"
              >
                Paket Ebook Kejepangan
              </button>
            </div>
            <div className="text-center mt-3 bg-slate-300 rounded hover:bg-slate-400">
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
          </div>
        </div>
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
}
