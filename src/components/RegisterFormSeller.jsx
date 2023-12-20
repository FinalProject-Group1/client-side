import { Link } from 'react-router-dom';
// import SubmitButton from "./SubmitButton";

const RegisterFormSeller = () => {
	return (
		<form className="w-full h-full py-10 flex flex-col justify-center items-center gap-4 rounded-s-2xl transition-opacity">
			<h1 className="text-2xl font-bold">Daftar Penjual</h1>
			<img
				src="/qr_code.png"
				alt=""
				className="w-1/2 h-1/2 mix-blend-multiply	"
			/>
			<label className="font-bold">atau</label>
			<div className="mt-8 max-w-max">
				{/* <SubmitButton text="Daftar Lewat WhatsApp" /> */}
				<Link
					to="https://wa.link/al05zy"
					className="py-2 px-6 w-full bg-gradient-to-r from-gray-600 to-green-primary rounded-lg text-lg font-bold text-slate-100"
				>
					Daftar Lewat Whatsapp
				</Link>
			</div>
			<label className="text-sm my-6">
				Anda punya akun?{' '}
				<span className=" text-green-primary font-bold hover:underline cursor-pointer">
					Masuk Sekarang
				</span>
			</label>
		</form>
	);
};

export default RegisterFormSeller;
