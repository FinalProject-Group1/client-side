import { Link } from "react-router-dom";

export default function ProductList() {
  return (
    <section id="products-list" className="p-8 mb-10">
      <h1 className="text-xl font-bold mb-2">Daftar Produk</h1>
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th></th>
              <th>Nama Produk</th>
              <th>Kategori</th>
              <th>Harga</th>
              <th>Jumlah Stok</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            <tr>
              <td>
                <div className="avatar">
                  <div className="mask rounded w-40 h-40">
                    <img
                      src="https://images.unsplash.com/photo-1565685225009-fc85d9109c80"
                      alt="Bawang Merah Image"
                    />
                  </div>
                </div>
              </td>
              <td>
                <div className="flex items-center gap-3">
                  <div>
                    <div className="font-bold">Bawang Merah</div>
                  </div>
                </div>
              </td>
              <td>Sayuran</td>
              <td>Rp50,000.00</td>
              <td>34</td>
              <td>
                <Link to="/seller/products/:id">
                  <button className="btn bg-yellow-primary btn-xs">Ubah</button>
                </Link>
              </td>
            </tr>
            {/* row 2 */}
            <tr>
              <td>
                <div className="avatar">
                  <div className="mask rounded w-40 h-40">
                    <img
                      src="https://images.unsplash.com/photo-1546860255-95536c19724e"
                      alt="Cabe Rawit Merah"
                    />
                  </div>
                </div>
              </td>
              <td>
                <div className="flex items-center gap-3">
                  <div>
                    <div className="font-bold">Cabe Rawit Merah</div>
                  </div>
                </div>
              </td>
              <td>Sayuran</td>
              <td>Rp22,000.00</td>
              <td>12</td>
              <td>
                <Link to="/seller/products/:id">
                  <button className="btn bg-yellow-primary btn-xs">Ubah</button>
                </Link>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>
  );
}
