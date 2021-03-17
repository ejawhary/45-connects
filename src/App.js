import { Fragment } from 'react';
import Table from './components/assets/table/Table';
import Webcam1 from './components/assets/webcams/Webcam1';
import Webcam2 from './components/assets/webcams/Webcam2';
import Webcam3 from './components/assets/webcams/Webcam3';
import Webcam4 from './components/assets/webcams/Webcam4';
import './App.scss';

const App = () => {
	return (
		<Fragment>
			<div className="container">
				<Webcam1 />
				<Webcam2 />
				<Webcam3 />
				<Webcam4 />
				<Table />
			</div>
		</Fragment>
	);
};

export default App;
