import React, { useState, useRef } from "react";
import Swal from "sweetalert2";
import Router from "next/router";

const Form = () => {
  const formRef = useRef(null);
  const [disable, setDisable] = useState(false);
  const [form, setForm] = useState({
    nama: "",
    email: "",
    number: "",
  });

  const handleOnChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const scriptUrl =
    "https://script.google.com/macros/s/AKfycbyhtgYZaVKuJ0KyzfnjFbIkSxLyx3sl_WWNPlEi3GVJVh-wowGOOR7ICvq-lgHH9A9F9A/exec";

  const handleSubmit = (e) => {
    e.preventDefault();
    setDisable(true);
    fetch(scriptUrl, { method: "POST", body: new FormData(formRef.current) })
      .then((res) => {
        console.log("SUCCESSFULLY SUBMITTED");
        Swal.fire(
          "Sukses",
          "Pesanan berhasil terkirim, kamu akan diarahkan ke halaman pembayaran dan akan dihubungi oleh tim Kejepangan",
          "success"
        );
        setForm({
          nama: "",
          email: "",
          number: "",
        });
        setDisable(false);
        Router.push("/success");
      })
      .catch((err) => {
        console.log(err);
        Swal.fire("Error", "Gagal melakukan pemesanan", "error");
      });
  };

  return (
    <div className="shadow-lg max-w-xl bg-slate-200 rounded m-auto my-7 p-5">
      <h2 className="text-2xl font-semibold my-2">
        Form Pemesanan Ebook Kejepangan
      </h2>
      <form
        method="post"
        ref={formRef}
        onSubmit={handleSubmit}
        name="google-sheet"
      >
        <div>
          <input
            type="text"
            onChange={handleOnChange}
            value={form.nama}
            name="nama"
            placeholder="Nama Kamu"
            className="my-2 p-2 rounded w-full border border-slate-300"
            required
          />
        </div>
        <div>
          <input
            type="email"
            onChange={handleOnChange}
            value={form.email}
            name="email"
            placeholder="Email Kamu"
            className="my-2 p-2 rounded w-full border border-slate-300"
            required
          />
        </div>
        <div>
          <input
            type="number"
            onChange={handleOnChange}
            value={form.number}
            name="number"
            placeholder="Nomor WA Kamu"
            className="my-2 p-2 rounded w-full border border-slate-300"
            required
          />
        </div>
        <div className="my-4">
          <p className="mb-2">Metode Pembayaran:</p>
          <img
            src="/PaymentMethod.png"
            alt="Metode Pembayaran"
            className="shadow rounded"
          />
        </div>
        <div>
          <button
            className={
              disable
                ? "my-2 px-5 py-2 bg-slate-400 text-slate-200 font-semibold rounded"
                : "my-2 px-5 py-2 bg-orange-400 text-white font-semibold rounded hover:bg-orange-300 hover:text-black"
            }
            type="submit"
            disabled={disable}
          >
            {disable ? "Tunggu Sebentar" : "Selesaikan Order"}
          </button>
        </div>
      </form>
    </div>
  );
};

export default Form;
