export default function UpdateOrderStatus() {
  return (
    <section id="update-order-status" className="p-8 mb-10">
      <h1 className="text-xl font-bold mb-2">Ubah Status Pesanan</h1>
      <label className="form-control w-full max-w-xs">
        <div className="label">
          <span className="label-text">Status Pesanan</span>
        </div>
        <select className="select select-bordered w-full max-w-xs">
          <option>Belum Diproses</option>
          <option>Diproses</option>
          <option>Dikirim</option>
          <option>Selesai</option>
        </select>
        <div className="label"></div>
      </label>
      <button className="btn bg-blue-primary text-white">Simpan</button>
    </section>
  );
}
