import bannerImg from '../../../assets/871 [Converted].svg';
import '../../Styles/text.css';

const Banner = () => {
  return (
    <div className="relative">
      <img className="w-full h-30vh" src={bannerImg} alt="" />
      <h1 className="absolute text-flicker-in-glow md:text-2xl md:left-14 md:top-48 text-[#983BE9] font-extrabold lg:text-4xl text-base lg:left-40 left-2 lg:top-[350px] top-[120px]">
        Manage Tasks Efficiently
      </h1>
    </div>
  );
};

export default Banner;
