import React, { useContext, useState } from "react";
// import assets from "../assets/assets";
import { AuthContext } from "../../context/AuthContext";

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
    <div className="min-h-screen flex justify-center items-center">
      <form
        onSubmit={onSubmitHandler}
        className="bg-white/10 p-6 rounded-md w-[350px] text-white"
      >
        <h2 className="text-2xl font-medium mb-4">
          {isSignup ? "Sign up" : "Login"}
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
              className="p-2 border rounded w-full mb-3"
            />
            <input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              type="email"
              placeholder="Email"
              required
              className="p-2 border rounded w-full mb-3"
            />
            <input
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              type="password"
              placeholder="Password"
              required
              className="p-2 border rounded w-full mb-3"
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
              className="p-2 border rounded w-full mb-3"
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
              className="p-2 border rounded w-full mb-3"
            />
            <input
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              type="password"
              placeholder="Password"
              required
              className="p-2 border rounded w-full mb-3"
            />
          </>
        )}

        <button
          type="submit"
          className="bg-purple-600 w-full py-2 rounded"
        >
          {isSignup
            ? step === 1
              ? "Next"
              : "Create Account"
            : "Login Now"}
        </button>

        <p className="mt-3 text-sm">
          {isSignup ? "Already have an account?" : "Don't have an account?"}{" "}
          <span
            className="text-violet-500 cursor-pointer"
            onClick={() => {
              setIsSignup(!isSignup);
              resetForm();
            }}
          >
            {isSignup ? "Login" : "Sign up"}
          </span>
        </p>
      </form>
    </div>
  );
};

export default LoginPage;
