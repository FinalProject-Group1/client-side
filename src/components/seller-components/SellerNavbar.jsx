import { Link } from "react-router-dom";

export default function SellerNavbar() {
  return (
    <section id="navbar">
      <div className="navbar bg-base-100">
        <div className="flex-1">
          <img src="/Terrarium_icon.png" className="ml-4 mr-2 h-auto w-10" />
          <a className="text-xl font-fredoka">Terrarium</a>
        </div>
        <div className="flex-none">
          <div className="dropdown dropdown-end">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-circle avatar">
              <div className="w-10 rounded-full">
                <img
                  alt="Tailwind CSS Navbar component"
                  src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
                />
              </div>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
              <li>
                <Link to="/seller/account">Akun Pengguna</Link>
              </li>
              <li>
                <a className="text-red-primary">Logout</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
