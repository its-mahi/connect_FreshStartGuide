import React, {useState} from 'react';
import {useHistory} from '../components/Router';
import axios from "axios";

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const history = useHistory();

  const handlePassword =  (e) => {
    setPassword(e.target.value)
  }

  const handleEmail = (e) => {
    setEmail(e.target.value)
  }

  const handleSubmit = async (e) => {
    e.preventDefault(); 
    try {

      const response = await axios.post(
        'http://localhost:8000/api/v1/login',
        {email, password},
        {
          headers: {
            'Content-Type': 'application/json',
        },
        withCredentials:true
      });
  
      history.push('/create');
    } catch (err) {
      console.log("mangal error: " + err.message);
    }
  }

  return (
    <>
      <div className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <img
            className="mx-auto h-10 w-auto"
            src="https://i.pinimg.com/736x/86/10/60/86106086e9594672ad7408913b5a3a24.jpg"
            alt="Your Company"
          />
          <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-white">
            Sign in to your account
          </h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form onSubmit={handleSubmit} method="POST" className="space-y-6">
            <div>
              <label
                for="email"
                className=" text-sm font-medium leading-6 text-white flex ">
                Email address
              </label>
              <div className="mt-2">
                <input
                onChange={handleEmail}
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  style={{paddingLeft: '6px'}}
                  className="block w-full rounded-md border-0 py-1.5 text-black shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between">
                <label
                  for="password"
                  className="block text-sm font-medium leading-6 text-white">
                  Password
                </label>
                <div className="text-sm">
                  <a
                    href="#"
                    className="font-semibold text-indigo-600 hover:text-indigo-500">
                    Forgot password?
                  </a>
                </div>
              </div>
              <div className="mt-2">
                <input
                onChange={handlePassword}
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  required
                  style={{paddingLeft: '6px'}}
                  className="block w-full rounded-md border-0 py-1.5 text-black shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
                Sign in
              </button>
            </div>
          </form>

          <p className="mt-10 text-center text-sm text-gray-500">
            Not a member?
            <a
              href="#"
              className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500">
              Start a free trial
            </a>
          </p>
        </div>
      </div>
    </>
  );
}

