import NavbarBuyer from '../components/NavbarBuyer';
import { Outlet } from 'react-router-dom';

const BuyerLayout = () => {
	return (
		<div className="w-full min-h-screen">
			<NavbarBuyer />
			{/* <div className="pt-20"> */}
			<Outlet />
			{/* </div> */}
		</div>
	);
};

export default BuyerLayout;
