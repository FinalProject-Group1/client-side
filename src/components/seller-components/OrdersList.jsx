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
    </section>
  );
}
