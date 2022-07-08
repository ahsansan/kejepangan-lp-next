import Head from "next/head";
import Footer from "../components/footer";
import Form from "../components/form";
import Price from "../components/price";
import Problem from "../components/problem";
import Solution from "../components/solution";

import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Paket Ebook Kejepangan</title>
        <meta
          name="description"
          content="Kamu bisa membeli paket ebook kejepangan disini."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className={styles.container}>
        <div>
          <Problem />
          <Solution />
          <Price />
          <Form />
        </div>
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
}
