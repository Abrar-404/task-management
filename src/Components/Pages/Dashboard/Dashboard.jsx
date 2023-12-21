import Content from '../../Sidebar/Content';
import '../../Styles/sidebar.css';
import Sidebar from '../../Sidebar/Sidebar';


const Dashboard = () => {
  return (
    <div>
      <div className="dashboard">
        <Sidebar></Sidebar>
        <Content></Content>
      </div>
   
    </div>
  );
};

export default Dashboard;
