const Problem = () => {
  return (
    <div className="shadow-lg max-w-xl bg-slate-200 rounded m-auto mt-7">
      <div id="home" className="bg-white px-3 py-11 rounded">
        <h2 className="text-red-700 text-2xl font-bold text-center">
          FORMULA PEDE & JAGO NGOMONG JEPANG
        </h2>
      </div>
      <div className="p-4">
        <p className="font-bold my-2">
          Kamu pernah kebayang gak, Kamu bisa jago ngobrol sama orang Jepang?
        </p>
        <p className="text-sm my-2">
          Kamu bisa mengerti apa yang dia omongin, dan Kamu juga bisa membalas
          obrolan dia, jadi bisa ngobrol asik dengan dia sampek gak kerasa
          berjam jam waktu telah berlalu.
        </p>
      </div>
      <div className="mb-7 flex justify-center">
        <a
          href="#ebook"
          className="px-5 py-2 bg-orange-400 text-white font-semibold rounded hover:bg-orange-500"
        >
          Dapatkan Ebooknya Sekarang
        </a>
      </div>
      <div>
        <img src="/Ngobrol.png" alt="Orang Ngobrol" />
      </div>
      <div className="p-4">
        <p className="font-bold my-2">Tapi sayangnya...</p>
        <p className="text-sm my-2">
          Ngomong itu bukan &quot;
          <span className="italic line-through text-red-800">doang</span>&quot;,
          banyak orang kan yang dengan mudahnya men judge &quot;Ngomong doang
          mah gampang&quot;.
        </p>
        <p className="text-sm my-2">
          Dalam kenyataan yang sebenarnya, ngomong adalah skill yang harus
          dipelajari dan dilatih sampek bisa lancar dan gak gagap lagi.
        </p>
        <p className="font-bold my-2">
          Beberapa kendala yang biasanya membuat orang susah untuk ngomong dalam
          bahasa Jepang :
        </p>
      </div>
      <div className="p-4">
        <ul className="list-none list-inside marker:text-red-500">
          <li className="my-1">
            <span className="bg-red-500 text-white py-1 px-2 mr-2">X</span>{" "}
            Minder dan merasa tidak mampu.
          </li>
          <li className="my-1">
            <span className="bg-red-500 text-white py-1 px-2 mr-2">X</span>{" "}
            Takut salah.
          </li>
          <li className="my-1">
            <span className="bg-red-500 text-white py-1 px-2 mr-2">X</span> Gak
            bisa bikin topik.
          </li>
        </ul>
      </div>
      <div className="p-4">
        <p className="font-bold my-2">Tenang...</p>
        <p className="text-sm my-2">
          Aku juga pernah mengalami masa masa itu, bahkan jauh sebelum Aku
          mengenal bahasa Jepang.
        </p>
        <p className="text-sm my-2">Aku dulu anak yang pendiam dan pemalu.</p>
        <p className="text-sm my-2">
          Jangankan ngobrol sama orang baru, sama teman atau saudara yang udah
          kenal lama aja masih takut untuk mengungkapkan sesuatu.
        </p>
        <p className="text-sm my-2">
          Tapi karena Aku pengen banget bisa asik ketika ngobrol, akhirnya Aku
          memutuskan untuk berproses dan memperbaiki kualitas diri.
        </p>
        <p className="text-sm my-2">
          Alhamdhulillah sekarang Aku tidak lagi takut untuk ngomong, bahkan
          bisa menjadi seorang penggiat social media yang harus ngomong di depan
          kamera.
        </p>
        <p className="text-sm my-2">
          Hal yang bahkan tidak pernah Aku bayangkan sebelumnya.
        </p>
        <p className="font-bold my-2 text-red-800">
          Kali ini, Aku mau sharing pengalaman dan tips aja nih buat Kamu yang
          sedang belajar bahasa Jepang.
        </p>
        <p className="font-bold my-2">
          Selain tips agar bisa pede dan lancar ngomong dalam bahasa Jepang, Aku
          juga menulis 2 ebook lainya.
        </p>
        <p className="font-bold my-2">
          Membahas tentang hal yang juga sering menjadi masalah bagi para
          pelajar bahasa Jepang.
        </p>
      </div>
    </div>
  );
};

export default Problem;
