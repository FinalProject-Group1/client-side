const SideBar = () => {
	return (
		<div className="drawer lg:drawer-open bg-teal-500">
			<input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
			<div className="drawer-content flex flex-col items-center justify-center">
				{/* Page content here */}
				<label
					htmlFor="my-drawer-2"
					className="btn btn-primary drawer-button lg:hidden"
				>
					Open drawer
				</label>
			</div>
			<div className="drawer-side w-full">
				<label
					htmlFor="my-drawer-2"
					aria-label="close sidebar"
					className="drawer-overlay"
				></label>
				<ul className="menu p-4 w-80 min-h-full bg-green-primary text-base-content">
					{/* Sidebar content here */}
					<li>
						<a className="text-md font-bold flex flex-row gap-4 text-slate-50">
							<img
								src="/vegetables.jpg"
								alt=""
								className="w-1/4 mix-blend-multiply"
							/>
							Sayuran
						</a>
					</li>
					<li>
						<a className="text-md font-bold flex flex-row gap-4 text-slate-50">
							<img src="/fruits.jpg" alt="" className="w-1/4 h-full" />
							Buah - Buahan
						</a>
					</li>
				</ul>
			</div>
		</div>
	);
};

export default SideBar;
