export default function AddProduct() {
  return (
    <section id="add-product" className="p-8">
      <h1 className="text-xl font-bold mb-2">Tambah Produk</h1>
      <label className="form-control w-full max-w-xs">
        <div className="label">
          <span className="label-text">Kategori Produk</span>
        </div>
        <select className="select select-bordered w-full max-w-xs">
          <option disabled selected>
            Pilih
          </option>
          <option>Sembako</option>
          <option>Sayuran</option>
          <option>Buah</option>
          <option>Daging</option>
        </select>
        <div className="label"></div>
      </label>

      <label className="form-control w-full mb-2">
        <div className="label">
          <span className="label-text">Pilih Produk</span>
        </div>

        <ul className="grid gap-4 grid-cols-2 lg:grid-cols-6 md:grid-cols-4 w-full">
          <li>
            <input
              type="radio"
              id="bawang-merah"
              name="hosting"
              defaultValue="hosting-small"
              className="hidden peer"
              required=""
            />
            <label
              htmlFor="bawang-merah"
              className="inline-flex items-center justify-between w-full p-2 text-gray-500 bg-white border border-gray-200 rounded-lg cursor-pointer peer-checked:border-blue-primary peer-checked:text-blue-primary hover:text-gray-600 hover:bg-gray-100">
              <div className="block">
                <div className="mask rounded">
                  <img
                    className="mask rounded aspect-square"
                    src="https://images.unsplash.com/photo-1565685225009-fc85d9109c80"
                    alt="Bawang Merah Image"
                  />
                </div>
                <div className="w-full text-sm mt-3 mb-2 ">Bawang Merah</div>
              </div>
            </label>
          </li>
          <li>
            <input
              type="radio"
              id="cabe-rawit"
              name="hosting"
              defaultValue="hosting-small"
              className="hidden peer"
              required=""
            />
            <label
              htmlFor="cabe-rawit"
              className="inline-flex items-center justify-between w-full p-2 text-gray-500 bg-white border border-gray-200 rounded-lg cursor-pointer peer-checked:border-blue-primary peer-checked:text-blue-primary hover:text-gray-600 hover:bg-gray-100">
              <div className="block">
                <img
                  className="mask rounded aspect-square"
                  src="https://images.unsplash.com/photo-1546860255-95536c19724e"
                  alt="Cabe Rawit Merah Image"
                />
                <div className="w-full text-sm mt-3 mb-2 ">
                  Cabe Rawit Merah
                </div>
              </div>
            </label>
          </li>
          <li>
            <input
              type="radio"
              id="bawang-merah1"
              name="hosting"
              defaultValue="hosting-small"
              className="hidden peer"
              required=""
            />
            <label
              htmlFor="bawang-merah1"
              className="inline-flex items-center justify-between w-full p-2 text-gray-500 bg-white border border-gray-200 rounded-lg cursor-pointer peer-checked:border-blue-primary peer-checked:text-blue-primary hover:text-gray-600 hover:bg-gray-100">
              <div className="block">
                <div className="mask rounded">
                  <img
                    className="mask rounded aspect-square"
                    src="https://images.unsplash.com/photo-1565685225009-fc85d9109c80"
                    alt="Bawang Merah Image"
                  />
                </div>
                <div className="w-full text-sm mt-3 mb-2 ">Bawang Merah</div>
              </div>
            </label>
          </li>
          <li>
            <input
              type="radio"
              id="cabe-rawit1"
              name="hosting"
              defaultValue="hosting-small"
              className="hidden peer"
              required=""
            />
            <label
              htmlFor="cabe-rawit1"
              className="inline-flex items-center justify-between w-full p-2 text-gray-500 bg-white border border-gray-200 rounded-lg cursor-pointer peer-checked:border-blue-primary peer-checked:text-blue-primary hover:text-gray-600 hover:bg-gray-100">
              <div className="block">
                <img
                  className="mask rounded aspect-square"
                  src="https://images.unsplash.com/photo-1546860255-95536c19724e"
                  alt="Cabe Rawit Merah Image"
                />
                <div className="w-full text-sm mt-3 mb-2 ">
                  Cabe Rawit Merah
                </div>
              </div>
            </label>
          </li>
        </ul>
      </label>

      <label className="form-control w-full max-w-xs mb-2">
        <div className="label">
          <span className="label-text">Jumlah Stok</span>
        </div>
        <input
          type="number"
          placeholder="Type here"
          min="0"
          className="input input-bordered w-full max-w-xs"
        />
      </label>

      <label className="form-control w-full max-w-xs mb-2">
        <div className="label">
          <span className="label-text">Harga</span>
        </div>
        <input
          type="number"
          placeholder="Type here"
          min="0"
          className="input input-bordered w-full max-w-xs"
        />
        <div className="label">
          <span className="label-text-alt">
            Kisaran harga: Rp34,500.00 - Rp37,000.00 / kg
          </span>
        </div>
      </label>
      <button className="btn bg-blue-primary text-white">Buat Produk</button>
    </section>
  );
}
