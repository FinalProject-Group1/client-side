import CustomInput from '../components/CustomInput';
import SubmitButton from '../components/SubmitButton';

const Register = () => {
	return (
		<div className="w-full h-screen py-20 px-20 bg-[url('/bg-terra-2.jpg')]">
			<div className="w-full h-full flex flex-row rounded-2xl">
				<form className="w-1/2 h-full p-20 flex flex-col items-center gap-4 rounded-s-2xl backdrop-blur-lg bg-opacity-70 bg-slate-100 hover:bg-opacity-100 transition-opacity">
					<h1 className="text-4xl font-bold mb-8">Daftar</h1>
					<CustomInput
						id="fullName-form"
						label="Nama Lengkap"
						placeholder="nama lengkap"
					/>
					<CustomInput
						id="email-form"
						type="email"
						label="Email"
						placeholder="email"
					/>
					<CustomInput
						id="password-form"
						type="password"
						label="Kata Sandi"
						placeholder="kata sandi"
					/>
					<div className="mt-8 w-full h-full">
						<SubmitButton text="Daftar" />
					</div>
					<label className="b">
						Belum punya akun?{' '}
						<span className=" text-green-primary font-bold hover:underline cursor-pointer">
							Buat akun
						</span>
					</label>
				</form>
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
