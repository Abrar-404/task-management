import '../../Components/Styles/card.css';
import '../../Components/Styles/buttons2.css';

const Personalities = () => {
  return (
    <div className="mt-32 mb-32">
      <div className="flex pt-10 bg-[#FF2C9C] justify-center mx-auto">
        <h1 className="lg:text-3xl md:text-2xl text-white font-bold">
          Personalities Who Uses Our Website
        </h1>
      </div>
      <div className="bg-[#FF2C9C] pb-10 pt-10 flex lg:flex-row md:flex-col flex-col">
        <div className="card">
          <figure className="px-10 pt-10">
            <img
              src="https://www.simplilearn.com/ice9/free_resources_article_thumb/tester-or-developer-what-suits-you-the-most.jpg"
              alt="Shoes"
              className="rounded-xl w-[900px] h-[300px]"
            />
          </figure>
          <div className="card-body items-center text-center">
            <h2 className="card-title text-white">
              <button className="bitti">Developers</button>
            </h2>
          </div>
        </div>
        <div className="card">
          <figure className="px-10 pt-10">
            <img
              src="https://cdn.corporatefinanceinstitute.com/assets/professional-corporation-1024x683.jpeg"
              alt="Shoes"
              className="rounded-xl w-[900px] h-[300px]"
            />
          </figure>
          <div className="card-body items-center text-center">
            <h2 className="card-title text-white">
              <button className="bitti">Corporate Professionals</button>
            </h2>
          </div>
        </div>
        <div className="card">
          <figure className="px-10 pt-10">
            <img
              src="https://assets-global.website-files.com/63361b004a9a6ca2e185c02c/64381de771e5a35d25841ebc_independent_investment_banker%20(1).jpg"
              alt="Shoes"
              className="rounded-xl w-[900px] h-[300px]"
            />
          </figure>
          <div className="card-body items-center text-center">
            <h2 className="card-title text-white">
              <button className="bitti shadow-xl">Bankers</button>
            </h2>
          </div>
        </div>
      </div>

      <div></div>
    </div>
  );
};

export default Personalities;
