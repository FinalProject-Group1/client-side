import './App.css';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import Shipment from './pages/Shipment';
import ShopSeller from './pages/ShopSeller';

function App() {
	return (
		<div className="w-full h-screen">
			{/* <Login /> */}
			{/* <Register /> */}
			{/* <Home /> */}
			<Shipment />
			{/* <ShopSeller /> */}
		</div>
	);
}

export default App;
