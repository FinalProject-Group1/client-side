import { useEffect, useState } from 'react';
import api from '../api';
import { getToken } from '../features/user/actions';

export default function Profile() {
	const [profile, setProfile] = useState({
		address: '',
		city: '',
		fullname: '',
		id: '',
		phoneNumber: '',
		role: '',
		saldo: '',
		shopName: '',
	});
	const fetch = async () => {
		const token = getToken();
		try {
			const { data } = await api.get('/profile', {
				headers: {
					Authorization: `Bearer ${token}`,
				},
			});
			setProfile(data);
		} catch (error) {
			console.log(error);
		}
	};

	useEffect(() => {
		fetch();
	}, []);

	// console.log(profile);

	return (
		<div className="w-full min-h-screen gap-10 px-20 py-10 pt-24">
			<div className="text-3xl font-bold text-zinc-900 mb-10">Profile</div>
			<div className="w-full flex">
				{/* <div className="w-2/3 flex-col">
          <div className="card bg-base-100 shadow">
            <div className="card-body">
              <div className="card-title text-base">Nama Lengkap:</div>
              <span>Kevin Fami Anggara</span>
              <div className="card-title text-base">Email:</div>
              <span>kevinfanggara@gmail.com</span>
              <div className="card-title text-base">Nomor Handphone:</div>
              <span>081807756659</span>
              <div className="card-title text-base">Alamat:</div>
              <span>Jalan Selat Batam Blok D4 No. 2, Duren Sawit</span>
              <div className="card-title text-base">Kota/Kabupaten:</div>
              <span>Jakarta Timur</span>
            </div>
          </div>
        </div> */}
				<div className="w-2/3 flex-col">
					<div className="grid lg:grid-cols-2 md:grid-cols-2 gap-4">
						<div className="card bg-base-100 shadow">
							<div className="card-body">
								<div className="card-title text-base">Nama Lengkap:</div>
								<span>{profile.fullname}</span>
								<div className="absolute top-5 right-5">
									<svg
										xmlns="http://www.w3.org/2000/svg"
										fill="none"
										viewBox="0 0 24 24"
										strokeWidth="1.5"
										stroke="currentColor"
										data-slot="icon"
										className="w-8 h-8 stroke-green-primary"
									>
										<path
											strokeLinecap="round"
											strokeLinejoin="round"
											d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
										/>
									</svg>
								</div>
							</div>
						</div>
						<div className="card bg-base-100 shadow">
							<div className="card-body">
								<div className="card-title text-base">Email:</div>
								<span>-</span>
								<div className="absolute top-5 right-5">
									<svg
										xmlns="http://www.w3.org/2000/svg"
										fill="none"
										viewBox="0 0 24 24"
										strokeWidth="1.5"
										stroke="currentColor"
										data-slot="icon"
										className="w-8 h-8 stroke-green-primary"
									>
										<path
											strokeLinecap="round"
											strokeLinejoin="round"
											d="M16.5 12a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0Zm0 0c0 1.657 1.007 3 2.25 3S21 13.657 21 12a9 9 0 1 0-2.636 6.364M16.5 12V8.25"
										/>
									</svg>
								</div>
							</div>
						</div>
						<div className="card bg-base-100 shadow">
							<div className="card-body">
								<div className="card-title text-base">Nomor Handphone:</div>
								<span>{profile.phoneNumber}</span>
								<div className="absolute top-5 right-5">
									<svg
										xmlns="http://www.w3.org/2000/svg"
										fill="none"
										viewBox="0 0 24 24"
										strokeWidth="1.5"
										stroke="currentColor"
										data-slot="icon"
										className="w-8 h-8 stroke-green-primary"
									>
										<path
											strokeLinecap="round"
											strokeLinejoin="round"
											d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z"
										/>
									</svg>
								</div>
							</div>
						</div>
						<div className="card bg-base-100 shadow">
							<div className="card-body">
								<div className="card-title text-base">Alamat:</div>
								<span>{profile.address}</span>
								<div className="absolute top-5 right-5">
									<svg
										xmlns="http://www.w3.org/2000/svg"
										fill="none"
										viewBox="0 0 24 24"
										strokeWidth="1.5"
										stroke="currentColor"
										data-slot="icon"
										className="w-8 h-8 stroke-green-primary"
									>
										<path
											strokeLinecap="round"
											strokeLinejoin="round"
											d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
										/>
									</svg>
								</div>
							</div>
						</div>
						<div className="card bg-base-100 shadow">
							<div className="card-body">
								<div className="card-title text-base">Kota/Kabupaten:</div>
								<span>{profile.city}</span>
								<div className="absolute top-5 right-5">
									<svg
										xmlns="http://www.w3.org/2000/svg"
										fill="none"
										viewBox="0 0 24 24"
										strokeWidth="1.5"
										stroke="currentColor"
										data-slot="icon"
										className="w-8 h-8 stroke-green-primary"
									>
										<path
											strokeLinecap="round"
											strokeLinejoin="round"
											d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
										/>
										<path
											strokeLinecap="round"
											strokeLinejoin="round"
											d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z"
										/>
									</svg>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
