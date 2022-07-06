import Head from "next/head";
import Form from "../components/form";

import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Paket Ebook Kejepangan</title>
        <meta
          name="description"
          content="Kamu bisa membeli paket ebook kejepangan disini."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>
        <Form />
      </div>
    </div>
  );
}
