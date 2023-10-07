
import { Link } from 'react-router-dom';

const Login = () => {
  return (
    <div className="  min-h-screen bg-base-200">
      <div className="">
        <div className="text-4xl font-bold text-center mt-4">Please Login now</div>
        <div className="card mx-auto flex-shrink-0 mt-4 w-full max-w-sm py-10 shadow-2xl bg-base-100">
          <form className="card-body mx-auto">
            <div className="form-control ">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input type="email" placeholder="email" name="email" className="input input-bordered" required />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input type="password" placeholder="password" name="password" className="input input-bordered" required />
              <label className="label">
                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
              </label>
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-primary">Login</button>
            </div>
          </form>
          <p className='text-center'>Don't have an account <Link to="/register" className='text-blue-700 font-bold'>Register</Link> </p>
          <hr />
        </div>
      </div>
    </div>
  );
};

export default Login;