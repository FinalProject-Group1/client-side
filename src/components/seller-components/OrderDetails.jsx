import { Link } from "react-router-dom";

export default function OrderDetails() {
  return (
    <section id="order-details" className="p-8 mb-10">
      <h1 className="text-xl font-bold mb-3">Details Pesanan</h1>
      <div className="mb-3">
        Status Pesanan: <span className="font-bold">Diproses</span>
        <button className="btn btn-xs bg-yellow-primary ml-3">
          Kirim Pesanan
        </button>
      </div>
      <div className="grid lg:grid-cols-2 gap-3">
        <div className="card-normal bg-gray-100 rounded">
          <div className="card-body">
            <h2 className="card-title text-lg">Informasi Pesanan</h2>
            <div className="grid grid-cols-4 gap-3 text-sm">
              <p>Cabe Rawit Merah</p>
              <p className="grid justify-items-end">Rp100,000</p>
              <p className="grid justify-items-center">x 1</p>
              <p className="grid justify-items-end">Rp100,000</p>
            </div>
            <div className="grid grid-cols-4 gap-3 text-sm">
              <p>Bawang Merah</p>
              <p className="grid justify-items-end">Rp75,000</p>
              <p className="grid justify-items-center">x 2</p>
              <p className="grid justify-items-end">Rp150,000</p>
            </div>
            <div className="grid grid-cols-2 gap-3 text-sm">
              <p>Subtotal</p>
              <p className="grid justify-items-end">Rp250,000</p>
            </div>
            <div className="grid grid-cols-2 gap-3 text-sm">
              <p>Ongkos Kirim</p>
              <p className="grid justify-items-end">Rp50,000</p>
            </div>
            <div className="grid grid-cols-2 gap-3 font-bold text-sm">
              <p>Jumlah Pembayaran</p>
              <p className="grid justify-items-end">Rp300,000</p>
            </div>
          </div>
        </div>
        <div className="card-normal bg-gray-100 rounded">
          <div className="card-body">
            <h2 className="card-title text-lg">Informasi Pembeli</h2>
            <div className="grid grid-cols-2 gap-3 text-sm">
              <p>Nama</p>
              <p>Charlie Brown</p>
            </div>
            <div className="grid grid-cols-2 gap-3 text-sm">
              <p>Nomor Handphone</p>
              <p>081829098745</p>
            </div>
            <div className="grid grid-cols-2 gap-3 text-sm">
              <p>Alamat</p>
              <p>Jl. Sudirman Raya Blok ABC no. 39</p>
            </div>
            <div className="grid grid-cols-2 gap-3 text-sm">
              <p>Kota/Kabupaten</p>
              <p>Jakarta Pusat</p>
            </div>
          </div>
        </div>
      </div>
      <Link to="/seller">
        {" "}
        <button className="btn bg-red-primary text-white mt-3">Kembali</button>
      </Link>
    </section>
  );
}
