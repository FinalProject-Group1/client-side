// import CustomInput from '../components/CustomInput';
import { useState } from 'react';
import RegisterFormBuyer from '../components/RegisterFormBuyer';
import RegisterFormSeller from '../components/RegisterFormSeller';
// import SubmitButton from '../components/SubmitButton';

const Register = () => {
	const [isBuyer, setIsBuyer] = useState(true);

	return (
		<div className="w-full h-screen py-20 px-20 bg-[url('/bg-terra-2.jpg')]">
			<div className="w-full h-full flex flex-row rounded-2xl">
				<div className="w-1/2 h-full px-20 flex flex-col items-center rounded-s-2xl backdrop-blur-lg bg-opacity-70 bg-slate-100 hover:bg-opacity-100 transition-opacity">
					<div className="w-1/2 flex rounded-xl my-2">
						<button
							onClick={() => setIsBuyer(true)}
							className={`flex-1 py-2 rounded-l-lg text-slate-50 font-medium ${
								isBuyer ? 'bg-green-primary' : 'bg-gray-300 text-gray-500'
							}`}
						>
							Pembeli
						</button>
						<button
							onClick={() => setIsBuyer(false)}
							className={`flex-1 py-2 rounded-r-lg text-slate-50 font-medium ${
								isBuyer ? 'bg-gray-300 text-gray-500' : 'bg-green-primary'
							}`}
						>
							Penjual
						</button>
					</div>
					{isBuyer ? <RegisterFormBuyer /> : <RegisterFormSeller />}
				</div>
				<div className="w-1/2 h-full rounded-e-2xl bg-contain backdrop-blur-xl">
					<img
						src="/Terrarium_Logo_transparent.png"
						alt=""
						className="w-full h-full"
					/>
				</div>
			</div>
		</div>
	);
};

export default Register;
