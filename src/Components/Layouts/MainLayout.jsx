import { Outlet } from 'react-router-dom';
import Navbar from '../Pages/Navbar/Navbar';

const MainLayout = () => {
  return (
    <div className="max-w-[425px] md:max-w-[768px] lg:max-w-[1400px] mx-auto">
      <div>
        <div className="">
          <Navbar></Navbar>
        </div>
        <div className="">
          <Outlet></Outlet>
        </div>
      </div>
    </div>
  );
};

export default MainLayout;
