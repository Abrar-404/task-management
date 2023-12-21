import { Link, NavLink, useNavigate } from 'react-router-dom';
// import img from '../../assets/logo.svg';
import { useContext } from 'react';
import { AuthContext } from '../../AuthProvider/AuthProvider';
import '../../Styles/signout.css';

const Navbar = () => {
  const { user, signOutUser } = useContext(AuthContext);
  const naviGate = useNavigate();

  const handleSignOut = () => {
    signOutUser()
      .then(result => {
        naviGate('/');
        console.log(result?.user);
      })
      .catch(error => {
        console.error(error);
      });
  };

  const navs = (
    <>
      <li className="text-white">
        <NavLink to="/">Home</NavLink>
      </li>
      {user ? null : (
        <>
          <li className="text-white">
            <NavLink to="/login">Login</NavLink>
          </li>
          <li className="text-white">
            <NavLink to="/register">Register</NavLink>
          </li>
          <li className="text-white">
            <NavLink to="/hackathons">Hackathons</NavLink>
          </li>
          <li className="text-white">
            <NavLink to="/profile">Profile</NavLink>
          </li>
          <li className="text-white">
            <NavLink to="/dashboard">Dashboard</NavLink>
          </li>
        </>
      )}
      {user && (
        <>
          <li className="text-white">
            <NavLink to="/createtask">Create Tasks</NavLink>
          </li>
          <li className="text-white">
            <NavLink to="/profile">Profile</NavLink>
          </li>
          <li className="text-white">
            <NavLink to="/dashboard">Dashboard</NavLink>
          </li>
        </>
      )}
    </>
  );

  return (
    <>
      <div className="navbar bg-[#FF2C9C] shadow-xl">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn text-white btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content t mt-3 z-[1] p-2 shadow bg-gray-900 bg-opacity-60 rounded-box w-52"
            >
              {navs}
            </ul>
          </div>
          <img className="max-w-[150px] max-h-[80px]" src="" alt="" />
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{navs}</ul>
        </div>
        <div className="navbar-end">
          {user?.email ? (
            <div className="dropdown dropdown-end">
              <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                <div className="w-10 rounded-full">
                  <img src={user.photoURL} alt={user.displayName} />
                </div>
              </label>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
              >
                <li>
                  <button className="btn text-base mb-2 btn-sm btn-ghost">
                    {user.displayName}
                  </button>
                </li>
                <li>
                  <button
                    class="Btn flex justify-center mx-auto"
                    onClick={handleSignOut}
                  >
                    <div class="sign">
                      <svg viewBox="0 0 512 512">
                        <path d="M377.9 105.9L500.7 228.7c7.2 7.2 11.3 17.1 11.3 27.3s-4.1 20.1-11.3 27.3L377.9 406.1c-6.4 6.4-15 9.9-24 9.9c-18.7 0-33.9-15.2-33.9-33.9l0-62.1-128 0c-17.7 0-32-14.3-32-32l0-64c0-17.7 14.3-32 32-32l128 0 0-62.1c0-18.7 15.2-33.9 33.9-33.9c9 0 17.6 3.6 24 9.9zM160 96L96 96c-17.7 0-32 14.3-32 32l0 256c0 17.7 14.3 32 32 32l64 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-64 0c-53 0-96-43-96-96L0 128C0 75 43 32 96 32l64 0c17.7 0 32 14.3 32 32s-14.3 32-32 32z"></path>
                      </svg>
                    </div>

                    <div class="text">Sign Out</div>
                  </button>
                </li>
              </ul>
            </div>
          ) : (
            <Link to="/login">
              <button className="btn btn-circle border-none text-xs text-white bg-[#983BE9]">
                Login
              </button>
            </Link>
          )}
        </div>
      </div>
    </>
  );
};

export default Navbar;
