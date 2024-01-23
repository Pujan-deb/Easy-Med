import sideimg from '../assets/Regpage_vector.svg'
import art from '../assets/Group.svg'
import { Link, NavLink, useLocation, useNavigate } from 'react-router-dom'
import { useForm } from "react-hook-form"
import { useContext } from 'react';
import { AuthContext } from '../providers/AuthProvider';

export default function Registration() {
    const location = useLocation();
    const from = location.state?.from?.pathname || '/';
    const navigate = useNavigate();


    const {signIn} = useContext(AuthContext)

    const handleLogin = (e) => {
        e.preventDefault();
        const form = e.target
        const email = form.email.value
        const password = form.password.value
        console.log(email, password)

        signIn(email, password)
            .then(res => {
                console.log(res);
                const user = res.user;
                navigate(from, { replace: true })
            })
            .catch(err => {
                console.log(err);
            })
    }

    return (
        <div className='grid grid-cols-1 lg:grid-cols-4'>
            <div className='col-span-2 bg-[#07332F] py-16'>
                <img src={art} />
                <img src={sideimg} alt="" className='w-5/6 mx-auto' />
            </div>
            <div className='col-span-2 py-36'>
                <h2 className="text-center font-bold text-3xl mb-9">Sign in to Doc House</h2>
                <form className="max-w-sm mx-auto" onSubmit={handleLogin}>
                    <div className="mb-5">
                        <label htmlFor="email" className="font-bold block mb-2 text-sm font-medium text-xl">
                            Email Address
                        </label>
                        <input
                            name='email'
                            type="email"
                            id="email"
                            placeholder="Enter your email"
                            className="h-16 text-xl bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            required
                        />
                    </div>
                    <div className="mb-5">
                        <label htmlFor="password" className="block mb-2 text-sm font-medium text-xl font-bold">
                            Your password
                        </label>
                        <input
                            name='password'
                            type="password"
                            id="password"
                            placeholder="Enter your password"
                            className="h-16 text-xl bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            required
                        />
                    </div>
                    {/* <div className="flex items-start mb-5">
                        <div className="flex items-center h-5">
                            <input
                                id="remember"
                                type="checkbox"
                                value=""
                                className="h-16 text-xl w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800"
                                required
                            />
                        </div>
                        <label htmlFor="remember" className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                            Remember me
                        </label>
                    </div> */}
                    <button
                        type="submit"
                        className="h-16 text-xl text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                    >
                        Submit
                    </button>
                    <div className='text-center text-xl mt-5'>
                        Please register at first. Go to <Link to='/registration'><span className='text-2xl font-bold text-orange-300'>SIGN UP</span></Link>
                    </div>
                </form>

            </div>

        </div>
    )
}
