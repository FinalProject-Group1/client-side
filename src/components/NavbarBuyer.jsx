import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { isBuyer } from '../features/user/actions';

const NavbarBuyer = () => {
	const navigate = useNavigate();

	const handleOnLogout = () => {
		localStorage.removeItem('access_token');
		localStorage.removeItem('role');
		navigate('/');
	};

	return (
		<section id="navbar" className="w-full z-50">
			<div className="navbar z-50 shadow-md fixed bg-base-100">
				<div className="flex-1">
					<Link to={'/'}>
						<img src="/Terrarium_icon.png" className="ml-4 mr-2 h-auto w-10" />
					</Link>
					<Link to={'/'} className="text-xl font-fredoka">
						Terrarium
					</Link>
				</div>
				{isBuyer() ? (
					<div className="flex-none">
						<div className="dropdown dropdown-end">
							<div
								tabIndex={0}
								role="button"
								className="btn btn-ghost btn-circle avatar"
							>
								<div className="w-10 rounded-full">
									<svg fill="none" viewBox="0 0 24 24" height="3em" width="3em">
										<path
											fill="currentColor"
											fillRule="evenodd"
											d="M16 9a4 4 0 11-8 0 4 4 0 018 0zm-2 0a2 2 0 11-4 0 2 2 0 014 0z"
											clipRule="evenodd"
										/>
										<path
											fill="currentColor"
											fillRule="evenodd"
											d="M12 1C5.925 1 1 5.925 1 12s4.925 11 11 11 11-4.925 11-11S18.075 1 12 1zM3 12c0 2.09.713 4.014 1.908 5.542A8.986 8.986 0 0112.065 14a8.984 8.984 0 017.092 3.458A9 9 0 103 12zm9 9a8.963 8.963 0 01-5.672-2.012A6.992 6.992 0 0112.065 16a6.991 6.991 0 015.689 2.92A8.964 8.964 0 0112 21z"
											clipRule="evenodd"
										/>
									</svg>
								</div>
							</div>
							<ul
								tabIndex={0}
								className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
							>
								<li>
									<Link to="/profile">Akun Pengguna</Link>
								</li>
								<li>
									<Link to="/transaction">Transaksi</Link>
								</li>
								<li onClick={handleOnLogout}>
									<a className="text-red-primary">Logout</a>
								</li>
							</ul>
						</div>
					</div>
				) : (
					<div className="flex gap-4">
						<Link
							to={'/login'}
							className="btn btn-sm bg-green-primary text-slate-50"
						>
							Masuk
						</Link>
						<Link to={'/register'} className="btn btn-sm">
							Daftar
						</Link>
					</div>
				)}
			</div>
		</section>
	);
};

export default NavbarBuyer;
