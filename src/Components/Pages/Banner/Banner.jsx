import bannerImg from '../../../assets/871 [Converted].svg';
import '../../Styles/text.css';
import '../../Styles/bannerbutton.css';
import { Link } from 'react-router-dom';

const Banner = () => {
  return (
    <div className="relative">
      <img className="w-full h-30vh" src={bannerImg} alt="" />
      <div className="absolute  md:text-2xl md:left-14 md:top-48 text-[#983BE9] font-extrabold lg:text-4xl text-base lg:left-40 left-2 lg:top-[350px] top-[120px]">
        <h1>Manage Tasks Efficiently</h1>

        <Link to="/dashboard">
          <button className="mt-10 bittu">Let's Explore</button>
        </Link>
      </div>
    </div>
  );
};

export default Banner;
