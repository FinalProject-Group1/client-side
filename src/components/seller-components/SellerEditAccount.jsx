export default function SellerEditAccount() {
  return (
    <section id="seller-account" className="p-8">
      <h1 className="text-xl font-bold mb-2">Akun Pengguna</h1>
      <label className="form-control w-full max-w-xs mb-2">
        <div className="label">
          <span className="label-text">Nama Toko</span>
        </div>
        <input
          type="text"
          placeholder="Type here"
          className="input input-bordered w-full max-w-xs"
        />
      </label>
      <label className="form-control w-full max-w-xs mb-2">
        <div className="label">
          <span className="label-text">Nama Lengkap</span>
        </div>
        <input
          type="text"
          placeholder="Type here"
          className="input input-bordered w-full max-w-xs"
        />
      </label>
      <label className="form-control w-full max-w-xs mb-2">
        <div className="label">
          <span className="label-text">Email</span>
        </div>
        <input
          type="email"
          placeholder="Type here"
          className="input input-bordered w-full max-w-xs"
        />
      </label>
      <label className="form-control w-full max-w-xs mb-2">
        <div className="label">
          <span className="label-text">Nomor Handphone</span>
        </div>
        <input
          type="text"
          placeholder="Type here"
          className="input input-bordered w-full max-w-xs"
        />
      </label>
      <label className="form-control w-full max-w-xs mb-2">
        <div className="label">
          <span className="label-text">Alamat</span>
        </div>
        <textarea
          className="textarea textarea-bordered h-28"
          placeholder="Alamat lengkap"></textarea>
      </label>
      <button className="btn bg-blue-primary text-white my-3">Simpan</button>
    </section>
  );
}
