import React from "react";
import {
  useSignInWithEmailAndPassword,
  useSignInWithGoogle,
} from "react-firebase-hooks/auth";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import auth from "../../firebase.config";
import LoadingSpinner from "../Shared/LoadingSpinner/LoadingSpinner";

const Login = () => {
  const [signInWithGoogle, gUser, gLoading, gError] = useSignInWithGoogle(auth);
  const [signInWithEmailAndPassword, eUser, eLoading, eError] =
    useSignInWithEmailAndPassword(auth);
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();
  const onSubmit = (data) => {
    signInWithEmailAndPassword(data.email, data.password);
  };
  let signInError;
  if (gError || eError) {
    signInError = (
      <p className="text-red-600">{gError?.message || eError?.message}</p>
    );
  }
  if (gLoading || eLoading) {
    return <LoadingSpinner />;
  }
  console.log(gUser, eUser);
  return (
    <div className="flex justify-center items-center h-full py-12">
      <div className="card w-96 bg-base-100 shadow-xl">
        <div className="card-body">
          <h2 className="text-center text-2xl font-bold">Please Login</h2>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="form-control w-full max-w-xs">
              <input
                type="email"
                placeholder="Type Your Email"
                className="input input-bordered w-full max-w-xs"
                {...register("email", {
                  required: { value: true, message: " Email is required" },
                  pattern: {
                    value: /.+@.+\.[A-Za-z]+$/,
                    message: "Provide a Valid Email",
                  },
                })}
              />
              <label className="label">
                {errors.email?.type === "required" && (
                  <span className="label-text-alt text-red-600">
                    {errors.email.message}
                  </span>
                )}
                {errors.email?.type === "pattern" && (
                  <span className="label-text-alt text-red-600">
                    {errors.email.message}
                  </span>
                )}
              </label>
            </div>
            <div className="form-control w-full max-w-xs">
              <input
                type="password"
                placeholder="Type Your Password"
                className="input input-bordered w-full max-w-xs"
                {...register("password", {
                  required: { value: true, message: " Password is required" },
                  pattern: {
                    value:
                      /^(?=.*\d)(?=.*[A-Z])(?=.*[a-z])(?=.*[a-zA-Z!#$%&? "])[a-zA-Z0-9!#$%&?]{6,20}$/,
                    message: "Your Password is wrong",
                  },
                })}
              />
              <label className="label">
                {errors.password?.type === "required" && (
                  <span className="label-text-alt text-red-500">
                    {errors.password.message}
                  </span>
                )}
                {errors.password?.type === "pattern" && (
                  <span className="label-text-alt text-red-500">
                    {errors.password.message}
                  </span>
                )}
              </label>
            </div>
            {signInError}
            <input
              type="submit"
              className="btn btn-primary w-full max-w-xs mt-2"
              value="Login"
            />
          </form>
          <p>
            <small>
              New User?
              <button className="btn-link">
                <Link to="/signup">Create an account</Link>
              </button>
            </small>
          </p>
          <div className="divider">OR</div>
          <button
            className="btn btn-outline btn-primary"
            onClick={() => signInWithGoogle()}
          >
            Continue With Google
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
