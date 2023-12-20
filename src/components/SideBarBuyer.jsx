import { Link, Outlet } from 'react-router-dom';

const SideBarBuyer = () => {
	return (
		<section id="sidebar">
			<div className="drawer lg:drawer-open">
				<input id="my-drawer" type="checkbox" className="drawer-toggle" />
				<div className="drawer-content flex flex-col">
					{/* Page content here */}

					<Outlet />
				</div>
				<div className="flex-none pl-2 lg:hidden">
					<label
						htmlFor="my-drawer"
						aria-label="open sidebar"
						className="btn btn-square btn-ghost"
					>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							fill="none"
							viewBox="0 0 24 24"
							className="inline-block w-6 h-6 stroke-current"
						>
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								strokeWidth="2"
								d="M4 6h16M4 12h16M4 18h16"
							></path>
						</svg>
					</label>
				</div>

				<div className="drawer-side">
					<label
						htmlFor="my-drawer"
						aria-label="close sidebar"
						className="drawer-overlay"
					></label>
					<ul className="menu p-4 w-80 min-h-full bg-green-primary text-slate-50 text-md font-medium">
						{/* Sidebar content here */}
						<li className="mb-2 hover:font-bold">
							<Link to="/products">Semua</Link>
						</li>
						<li className="mb-2 hover:font-bold">
							<Link to="/products?category=sayuran">Sayuran</Link>
						</li>
						<li className="mb-2 hover:font-bold">
							<Link to="/products?category=buah">Buah - Buahan</Link>
						</li>
						<li className="mb-2 hover:font-bold">
							<Link to="/products?category=sembako">Sembako</Link>
						</li>
						<li className="mb-2 hover:font-bold">
							<Link to="/products?category=daging">Daging</Link>
						</li>
					</ul>
				</div>
			</div>
		</section>
	);
};

export default SideBarBuyer;
