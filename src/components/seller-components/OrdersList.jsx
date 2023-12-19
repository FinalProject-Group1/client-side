import { Link } from "react-router-dom";

export default function OrdersList() {
  return (
    <section id="orders-list" className="p-8 mb-10">
      <h1 className="text-xl font-bold mb-2">Daftar Pesanan</h1>
      <div className="overflow-x-auto"></div>
      <div className="card bg-base-100 shadow mb-4">
        <div className="card-body">
          <div className="grid lg:grid-cols-7 md:grid-cols-3 sm:grid-cols-2 gap-4">
            <div className="grid grid-rows-2 gap-1">
              <h2 className="card-title text-xs">Nomor Pesanan</h2>
              <span>1</span>
            </div>
            <div className="grid grid-rows-2 gap-1">
              <h2 className="card-title text-xs">Tanggal</h2>
              <span>19/12/2024</span>
            </div>
            <div className="grid grid-rows-2 gap-1">
              <h2 className="card-title text-xs">Nama Toko</h2>
              <span>Toko Bagus</span>
            </div>
            <div className="grid grid-rows-2 gap-1">
              <h2 className="card-title text-xs">Total Pembayaran</h2>
              <span>Rp125,000.00</span>
            </div>
            <div className="grid grid-rows-2 gap-1">
              <h2 className="card-title text-xs">Status Pembayaran</h2>
              <span>Lunas</span>
            </div>
            <div className="grid grid-rows-2 gap-1">
              <h2 className="card-title text-xs">Status Pesanan</h2>
              <span>Selesai</span>
            </div>
            <div className="grid grid-rows-2 gap-1">
              <Link to="/seller/transaction/:id">
                <button className="w-full btn btn-xs bg-green-primary truncate md:text-clip">
                  Lihat Detail
                </button>
              </Link>
              <button className="w-full btn btn-xs bg-yellow-primary truncate md:text-clip">
                Kirim Pesanan
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="card bg-base-100 shadow mb-4">
        <div className="card-body">
          <div className="grid lg:grid-cols-7 md:grid-cols-3 sm:grid-cols-2 gap-4">
            <div className="grid grid-rows-2 gap-1">
              <h2 className="card-title text-xs">Nomor Pesanan</h2>
              <span>1</span>
            </div>
            <div className="grid grid-rows-2 gap-1">
              <h2 className="card-title text-xs">Tanggal</h2>
              <span>19/12/2024</span>
            </div>
            <div className="grid grid-rows-2 gap-1">
              <h2 className="card-title text-xs">Nama Toko</h2>
              <span>Toko Bagus</span>
            </div>
            <div className="grid grid-rows-2 gap-1">
              <h2 className="card-title text-xs">Total Pembayaran</h2>
              <span>Rp125,000.00</span>
            </div>
            <div className="grid grid-rows-2 gap-1">
              <h2 className="card-title text-xs">Status Pembayaran</h2>
              <span>Lunas</span>
            </div>
            <div className="grid grid-rows-2 gap-1">
              <h2 className="card-title text-xs">Status Pesanan</h2>
              <span>Selesai</span>
            </div>
            <div className="grid grid-rows-2 gap-1">
              <Link to="/seller/transaction/:id">
                <button className="w-full btn btn-xs bg-green-primary truncate md:text-clip">
                  Lihat Detail
                </button>
              </Link>
              <button className="w-full btn btn-xs bg-yellow-primary truncate md:text-clip">
                Kirim Pesanan
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
