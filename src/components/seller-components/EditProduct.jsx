export default function EditProduct() {
  return (
    <section id="add-product" className="p-8">
      <h1 className="text-xl font-bold mb-2">Edit Produk</h1>

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
      <button className="btn bg-blue-primary text-white">Ubah Produk</button>
    </section>
  );
}
