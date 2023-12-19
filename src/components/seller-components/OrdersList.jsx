import { Link } from "react-router-dom";

export default function OrdersList() {
  return (
    <section id="orders-list" className="p-8 mb-10">
      <h1 className="text-xl font-bold mb-2">Daftar Pesanan</h1>
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>Nomor Pesanan</th>
              <th>Tanggal</th>
              <th>Nama Pembeli</th>
              <th>Total Pembayaran</th>
              <th>Status Pembayaran</th>
              <th>Status Pesanan</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            <tr>
              <td>1</td>
              <td>15/12/2023</td>
              <td>Budi Hartono</td>
              <td>Rp250,000.00</td>
              <td>Lunas</td>
              <td>Selesai</td>
              <td>
                <Link to="/seller/transaction/:id">
                  {" "}
                  <button className="btn btn btn-xs bg-green-primary mb-2 mr-2 truncate md:text-clip">
                    Lihat Detail
                  </button>
                </Link>
                <button className="btn btn btn-xs bg-yellow-primary truncate md:text-clip">
                  Kirim Pesanan
                </button>
              </td>
            </tr>
            {/* row 2 */}
            <tr>
              <td>2</td>
              <td>12/12/2023</td>
              <td>Anton Budiman</td>
              <td>Rp100,000.00</td>
              <td>Lunas</td>
              <td>Diproses</td>
              <td>
                <Link to="/seller/transaction/:id">
                  <button className="btn btn-xs bg-green-primary mb-2 mr-2">
                    Lihat Detail
                  </button>
                </Link>
                <button className="btn btn-xs bg-yellow-primary">
                  Kirim Pesanan
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className="card bg-base-100 shadow">
        <div className="card-body">
          <div className="grid lg:grid-cols-7 md:grid-cols-2 gap-4">
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
              <h2 className="card-title text-xs">Action</h2>
              <button className="btn btn-primary btn-xs">Buy Now</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
