import CustomInput from './CustomInput';
import SubmitButton from './SubmitButton';

const RegisterFormBuyer = () => {
	return (
		<form className="w-full h-full py-10 flex flex-col justify-center items-center gap-4 rounded-s-2xl transition-opacity">
			<h1 className="text-4xl font-bold mb-8">Daftar Pembeli</h1>
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
			<label className="text-sm">
				Anda punya akun?{' '}
				<span className=" text-green-primary font-bold hover:underline cursor-pointer">
					Masuk Sekarang
				</span>
			</label>
		</form>
	);
};

export default RegisterFormBuyer;
