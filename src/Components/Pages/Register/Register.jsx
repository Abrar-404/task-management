import { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { FcGoogle } from 'react-icons/fc';
import { GiEnergyArrow } from 'react-icons/gi';
import { AuthContext } from '../../Providers/AuthProvider';
import Swal from 'sweetalert2';
import Button from '../Button/Button';

const Register = () => {
  const { registerUser, googleSignIn } = useContext(AuthContext);
  const [errorRegi, setErrorRegi] = useState('');
  const [successRegi, setSuccessRegi] = useState('');
  const naviGate = useNavigate();

  const handleGoogleSignIn = () => {
    googleSignIn()
      .then(result => {
        Swal.fire({
          imageUrl: `https://i.ibb.co/H4HnLmL/yippee-yay.gif`,
          title: 'WOOHOOO!!!! Welcome To The World!!!!',
          width: 600,
          padding: '3em',
          color: '#7CFC00',
          background: '#fff url()',
          backdrop: `
    rgba(0,0,123,0.4)
    top
    no-repeat
  `,
        });
        naviGate('/login');
        console.log(result.user);
      })
      .catch(error => {
        console.error(error);
      });
  };

  const handleRegister = e => {
    setErrorRegi('');
    setSuccessRegi('');

    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    const name = e.target.name.value;

    console.log(email, name, password);

    if (password.length < 6) {
      Swal.fire({
        imageUrl: `https://i.ibb.co/hfQtDDz/piffle-error.gif`,
        title: 'Password should be at least 6 characters long.',
        width: 600,
        padding: '3em',
        color: '#C70039 ',
        background:
          '#fff url(https://i.ibb.co/nfmHX3X/depositphotos-182476906-stock-illustration-holographic-vector-backgrounds.webp)',
        backdrop: `
    rgba(0,0,123,0.4)
    top
    no-repeat
  `,
      });
      return;
    }

    if (!/[A-Z]/.test(password)) {
      Swal.fire({
        imageUrl: `https://i.ibb.co/hfQtDDz/piffle-error.gif`,
        title: 'Password should contain at least one uppercase character.',
        width: 600,
        padding: '3em',
        color: '#C70039 ',
        background:
          '#fff url(https://i.ibb.co/nfmHX3X/depositphotos-182476906-stock-illustration-holographic-vector-backgrounds.webp)',
        backdrop: `
    rgba(0,0,123,0.4)
    top
    no-repeat
  `,
      });
      return;
    }

    if (!/[!@#$%^&*(),.?":{}|<>]/.test(password)) {
      Swal.fire({
        imageUrl: `https://i.ibb.co/hfQtDDz/piffle-error.gif`,
        title: 'Password should contain at least one special character.',
        width: 600,
        padding: '3em',
        color: '#C70039 ',
        background:
          '#fff url(https://i.ibb.co/nfmHX3X/depositphotos-182476906-stock-illustration-holographic-vector-backgrounds.webp)',
        backdrop: `
    rgba(0,0,123,0.4)
    top
    no-repeat
  `,
      });
      return;
    }

    registerUser(email, password)
      .then(result => {
        console.log(result);
        Swal.fire({
          imageUrl: `https://i.ibb.co/H4HnLmL/yippee-yay.gif`,
          title: 'WOOHOOO!!!! Welcome To The World!!!!',
          width: 600,
          padding: '3em',
          color: '#7CFC00',
          background: '#fff url()',
          backdrop: `
    rgba(0,0,123,0.4)
    top
    no-repeat
  `,
        });
        naviGate('/login');
        setSuccessRegi();
      })
      .catch(error => {
        console.error(error);
      });
  };

  return (
    <>
      <ToastContainer />
      <div className="hero min-h-screen">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl text-white font-bold">Register!</h1>
            <img
              className="w-[200px] h-[190px] mt-10 rounded-full"
              src="https://i.ibb.co/9h9vZ2q/rsc2020-elpradiant2020.gif"
              alt=""
            />
          </div>
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-slate-700 bg-opacity-60">
            <form onSubmit={handleRegister} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-white font-bold">Name</span>
                </label>
                <input
                  type="text"
                  placeholder="Your Name"
                  className="input input-bordered"
                  required
                  name="name"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-white font-bold">Email</span>
                </label>
                <input
                  type="email"
                  placeholder="Enter Your Email"
                  className="input input-bordered"
                  required
                  name="email"
                />
              </div>

              <div className="form-control">
                <label className="label">
                  <span className="label-text text-white font-bold">
                    Password
                  </span>
                </label>
                <input
                  type="password"
                  placeholder="password"
                  className="input input-bordered"
                  required
                  name="password"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <a
                    href="#"
                    className="label-text-alt text-white font-bold link link-hover"
                  >
                    Forgot password?
                  </a>
                </label>
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary">Register</button>
              </div>

              {
                <p className="text-white">
                  Already Have An Account? Please{' '}
                  <Link className="font-bold text-blue-700" to="/login">
                    Login
                  </Link>
                </p>
              }

              <div
                className="w-full justify-center items-center flex mx-auto"
                onClick={handleGoogleSignIn}
              >
                <div className="text-3xl -rotate-45 w-9 text-red-600">
                  <GiEnergyArrow></GiEnergyArrow>
                </div>
                <Button>
                  <button className="text-3xl w-full text-center flex mx-auto">
                    <FcGoogle></FcGoogle>
                  </button>
                </Button>
                <div className="text-3xl w-9 -rotate-[225deg] text-red-600">
                  <GiEnergyArrow></GiEnergyArrow>
                </div>
              </div>
            </form>
            {errorRegi && (
              <p className="text-center text-red-500">{errorRegi}</p>
            )}
            {successRegi && <p className="text-green-500">{successRegi}</p>}
          </div>
        </div>
      </div>
    </>
  );
};

export default Register;
