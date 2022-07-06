import Head from "next/head";

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

      <div className="shadow-lg max-w-xl bg-slate-200 rounded m-auto my-7 p-5">
        <h2>Terima Kasih Telah Order</h2>
        <p>Image</p>
        <p>Paket Ebook Kejepangan</p>
        <p>Rp 50.000</p>
        <hr />
        <p>Silahkan transfer ke salah satu rekening ini :</p>
        <p>BCA</p>
        <p>5610264125</p>
        <p>Muhammad Maulana Ahsan</p>
        <p>Mandiri</p>
        <p>178-000-1599-048</p>
        <p>Muhammad Maulana Ahsan</p>
        <p>GoPay</p>
        <p>0822-2600-5644</p>
        <p>Muhammad Maulana Ahsan</p>
        <p>OVO</p>
        <p>0822-2600-5644</p>
        <p>Muhammad Maulana Ahsan</p>
        <p>DANA</p>
        <p>0822-2600-5644</p>
        <p>Muhammad Maulana Ahsan</p>
        <p>ShopeePay</p>
        <p>0822-2600-5644</p>
        <p>Muhammad Maulana Ahsan</p>
      </div>
    </div>
  );
}
