import React, { useContext, useState } from "react";
// import assets from "../assets/assets";
import { AuthContext } from "../../context/AuthContext";
import assets from "../assets/assets";

const LoginPage = () => {
  const [isSignup, setIsSignup] = useState(true);
  const [step, setStep] = useState(1);

  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [bio, setBio] = useState("");

  const { login } = useContext(AuthContext);

  const onSubmitHandler = (e) => {
    e.preventDefault();

    if (isSignup && step === 1) {
      setStep(2);
      return;
    }

    if (isSignup) {
      login("signup", { fullName, email, password, bio });
    } else {
      login("login", { email, password });
    }
  };

  const resetForm = () => {
    setFullName("");
    setEmail("");
    setPassword("");
    setBio("");
    setStep(1);
  };

  return (
    <div className="min-h-screen bg-cover bg-center flex justify-center items-center gap-8 sm:justify-evenly max-sm:flex-col backdrop-blur-2xl">
      <img
        src={assets.message_Outline}
        alt=""
        className="w-[min(30vw,250px)]"
      />
      <form
        onSubmit={onSubmitHandler}
        className="border-2 bg-white/8 border-gray-500 p-6 rounded-lg text-white flex flex-col gap-6 shadow-lg"
      >
        <h2 className="text-2xl font-medium flex justify-between items-center">
          {isSignup ? "Sign up" : "Login"}
          {isSignup && step === 2 && (
            <img
            onClick={() => setStep(1)}
              src={assets.arrow_icon}
              alt=""
              className="w-5 cursor-pointer"
            />
          )}
        </h2>

        {/* SIGNUP STEP 1 */}
        {isSignup && step === 1 && (
          <>
            <input
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              type="text"
              placeholder="Full Name"
              required
              className="p-2 border border-gray-500 rounded-md focus:outline-none"
            />
            <input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              type="email"
              placeholder="Email"
              required
              className="p-2 border border-gray-500 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
            <input
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              type="password"
              placeholder="Password"
              required
              className="p-2 border border-gray-500 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </>
        )}

        {/* SIGNUP STEP 2 */}
        {isSignup && step === 2 && (
          <>
            <textarea
              value={bio}
              onChange={(e) => setBio(e.target.value)}
              placeholder="Short Bio"
              rows={4}
              className="p-2 border border-gray-500 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </>
        )}

        {/* LOGIN */}
        {!isSignup && (
          <>
            <input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              type="email"
              placeholder="Email"
              required
              className="p-2 border border-gray-500 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
            <input
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              type="password"
              placeholder="Password"
              required
              className="p-2 border border-gray-500 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </>
        )}

        <button
          type="submit"
          className="py-3 bg-gradient-to-r from-purple-400 to-violet-600 text-white rounded-md cursor-pointer"
        >
          {isSignup ? (step === 1 ? "Next" : "Create Account") : "Login Now"}
        </button>
        <div className="flex items-center gap-2 text-sm text-gray-500">
          <input type="checkbox" />
          <p>Agree to the terms of use & privacy policy.</p>
        </div>

        <div className="flex items-center gap-2">
          <span>
            {isSignup ? "Already have an account?" : "Don't have an account?"}
          </span>

          <span
            className="font-medium text-violet-500 cursor-pointer"
            onClick={() => {
              setIsSignup(!isSignup);
              resetForm();
            }}
          >
            {isSignup ? "Login" : "Sign up"}
          </span>
        </div>
      </form>
    </div>
  );
};

export default LoginPage;
