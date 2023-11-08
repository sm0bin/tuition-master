import { Outlet } from 'react-router-dom';
import Header from '../shared/Header';
import Footer from '../shared/Footer';

const Root = () => {
    return (
        <div>
            <Header></Header>
            <div className='max-w-7xl mx-4 md:mx-4 lg:mx-auto '>
                <Outlet></Outlet>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Root;