import { Outlet } from 'react-router-dom';
import Navbar from '../Pages/Navbar/Navbar';

const MainLayout = () => {
  return (
    <div className="max-w-[425px] md:max-w-[768px] lg:max-w-[1400px] mx-auto">
      <div>
        <div>
          <Navbar></Navbar>
        </div>
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default MainLayout;
