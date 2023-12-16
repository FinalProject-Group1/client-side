import SubmitButton from './SubmitButton';

const RegisterFormSeller = () => {
	return (
		<form className="w-full h-full py-10 flex flex-col justify-center items-center gap-4 rounded-s-2xl transition-opacity">
			<h1 className="text-4xl font-bold mb-8">Daftar Penjual</h1>
			<img
				src="/qr_code.png"
				alt=""
				className="w-1/2 h-1/2 mix-blend-multiply	"
			/>
			<label className="font-bold">or</label>
			<div className="mt-8 max-w-max h-full">
				<SubmitButton text="Daftar Lewat WhatsApp" />
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

export default RegisterFormSeller;
