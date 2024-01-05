import React, { useState } from "react";
import image from "../Assests/next2.jpg";
import logo from "../Assests/logo.png";
import { Link } from "react-router-dom";
// import { FaRegUser } from "react-icons/fa";
// import { RiLock2Fill } from "react-icons/ri";

const OptionalPage = () => {
  const [signUp, setSignUp] = useState(false);
  const [password, setPassword] = useState(false);

  const handleAccount = () => {
    setSignUp(!signUp);
  };

  const handlePassword = () => {
    setPassword(!password);
  };

  return (
    <div
      className="flex flex-col justify-center items-center bg-cover bg-center h-screen "
      style={{ backgroundImage: `url(${image})` }}
    >
      <div className="flex flex-col justify-center items-center w-full h-full">
      {/* <div className="flex flex-col justify-center items-center w-[600px] h-[800px] backdrop-blur-lg bg-white/30 border border-gray-400 shadow-2xl shadow-gray-600"> */}
      <div className=" flex flex-col justify-center items-center w-[600px] h-[800px] glassmorphism">
          {password ? (
            <div className="flex h-screen w-[500px] flex-col justify-center items-center mx-auto lg:px-8">
              {/* <div className="self-start">
          <img
          className="my-auto h-[74px]  w-auto  p-2 border  border-neutral-500"
          src={logo}
          alt="Your Company"
          />
        </div> */}

              <div className="flex flex-col w-full justify-normal items-center">
                {/* <RiLock2Fill className="mx-auto h-[74px] w-auto p-2 border" /> */}
                <img
                  className="mx-auto h-[74px]  w-auto  p-2 border  border-neutral-500"
                  src={logo}
                  alt="Your Company"
                />
              </div>
              <div className="mt-[20px] sm:mx-auto sm:w-full sm:max-w-sm p-4">
                <h2 className=" text-center sm:text-4xl text-2xl font-bold leading-9 tracking-tight text-gray-900">
                  Forgot Password
                </h2>
                <p className="text-center p-2">
                  {" "}
                  You can reset your password here{" "}
                </p>
                <form className="space-y-6" action="#" method="POST">
                  <div>
                    <input
                      id="password"
                      name="password"
                      type="password"
                      placeholder="email address"
                      autoComplete="current-password"
                      required
                      className="my-2 block w-full px-4 rounded-lg border-0 py-2.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-[#33a297] sm:text-sm sm:leading-6"
                    />
                  </div>
                  <div className="flex justify-between ">
                    <button
                      onClick={handlePassword}
                      className="m-2 flex w-full justify-center rounded-md bg-[#adb0ae] px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-[#747572] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#747572]"
                    >
                      Back
                    </button>

                    <button
                      type="submit"
                      className="hidden m-2 lg:flex w-full justify-center rounded-md bg-[#247ba0] px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-[#33a297] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#33a297]"
                    >
                      Reset my password
                    </button>
                    <button
                      type="submit"
                      className="lg:hidden m-2 flex w-full justify-center rounded-md bg-[#247ba0] px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-[#33a297] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#33a297]"
                    >
                      Reset
                    </button>
                  </div>
                </form>
              </div>
            </div>
          ) : signUp ? (
            <div className="flex h-screen w-[500px] flex-col justify-center items-center mx-auto lg:px-8">
              <div className="sm:mx-auto sm:w-full sm:max-w-sm">
                {/* <FaRegUser className="mx-auto h-[74px] w-auto p-2 border " /> */}
                <img
                  className="mx-auto h-[74px] w-auto p-2 border border-neutral-500"
                  src={logo}
                  alt="Your Company"
                />
                <h2 className="mt-9 text-center sm:text-3xl text-2xl font-bold leading-9 tracking-tight text-black">
                  Create new account
                </h2>
              </div>
              <div className="mt-9 sm:mx-auto sm:w-full sm:max-w-sm p-3">
                <form className="space-y-6" action="#" method="POST">
                  <div>
                    <div className="mt-2">
                      <input
                        id="name"
                        name="name"
                        type="name"
                        autoComplete="name"
                        placeholder="name"
                        required
                        className="block w-full px-3 rounded-lg border-0 py-2.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-[#33a297] sm:text-sm sm:leading-6"
                      />
                    </div>
                  </div>
                  <div>
                    <div className="mt-2">
                      <input
                        id="email"
                        name="email"
                        type="email"
                        autoComplete="email"
                        placeholder="email address"
                        required
                        className="block w-full px-3 rounded-lg border-0 py-2.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-[#33a297] sm:text-sm sm:leading-6"
                      />
                    </div>
                  </div>
                  <div>
                    <div className="mt-2">
                      <input
                        id="number"
                        name="number"
                        type="number"
                        autoComplete="phone-number"
                        placeholder="Contact No."
                        required
                        className="block w-full px-3 rounded-lg border-0 py-2.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-[#33a297] sm:text-sm sm:leading-6"
                      />
                    </div>
                  </div>
                  <div>
                    <div className="mt-2">
                      <input
                        id="password"
                        name="password"
                        type="password"
                        autoComplete="current-password"
                        placeholder="password"
                        required
                        className="block w-full px-3 rounded-lg border-0 py-2.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-[#33a297] sm:text-sm sm:leading-6"
                      />
                    </div>
                  </div>

                  <div className="flex justify-between ">
                    <button
                      onClick={handleAccount}
                      className="mt-[45px] m-2 flex w-full justify-center rounded-md bg-[#adb0ae] px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-[#747572] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#747572]"
                    >
                      Cancel
                    </button>
                    <button
                      type="submit"
                      className="mt-[45px] m-2 flex w-full justify-center rounded-md bg-[#247ba0] px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-[#33a297] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#33a297]"
                    >
                      Sign Up
                    </button>
                  </div>
                </form>
              </div>
            </div>
          ) : (
            <div className="flex h-screen w-auto flex-col justify-center items-center mx-auto lg:px-8">
              <div className="sm:mx-auto sm:w-full sm:max-w-sm">
                <img
                  className="mx-auto h-[84px]  w-auto p-2 border  border-neutral-500"
                  src={logo}
                  alt="Your Company"
                />
                <h2 className="mt-10 text-center sm:text-3xl text-2xl font-bold leading-9 tracking-tight text-gray-900">
                  Sign in to your account
                </h2>
              </div>

              <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
                <form className="space-y-6" action="#" method="POST">
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-md font-medium leading-6 text-gray-900"
                    >
                      Email address
                    </label>
                    <div className="mt-2">
                      <input
                        id="email"
                        name="email"
                        type="email"
                        autoComplete="email"
                        required
                        className="block w-full px-3 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      />
                    </div>
                  </div>

                  <div>
                    <div className="flex items-center justify-between">
                      <label
                        htmlFor="password"
                        className="block text-md font-medium leading-6 text-gray-900"
                      >
                        Password
                      </label>
                      <div className="text-sm">
                        <Link
                          onClick={handlePassword}
                          className="font-semibold text-[#247ba0] hover:text-[#33a297]"
                        >
                          Forgot password?
                        </Link>
                      </div>
                    </div>
                    <div className="mt-2">
                      <input
                        id="password"
                        name="password"
                        type="password"
                        autoComplete="current-password"
                        required
                        className="block w-full px-3 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-[#33a297] sm:text-sm sm:leading-6"
                      />
                    </div>
                  </div>

                  <div>
                    <button
                      type="submit"
                      className="flex w-full justify-center rounded-md bg-[#247ba0] px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-[#33a297] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#33a297]"
                    >
                      Sign in
                    </button>
                  </div>
                </form>

                <p className=" mt-10 text-center text-sm text-gray-500 ">
                  Not a member?{" "}
                  <Link
                    onClick={handleAccount}
                    className=" px-1 font-semibold group leading-6 text-[#247ba0] hover:text-[#33a297]"
                  >
                    Create an account
                  </Link>
                </p>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default OptionalPage;
