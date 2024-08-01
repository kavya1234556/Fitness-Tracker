import { useNavigate } from "react-router-dom";
import img from "../../../assets/images/login.jpg";
import InputWrapper from "../../../components/input-wrapper";
import useLogin from "./hooks/useLogin";
import InputPassword from "../../../components/input-password";
const Login = () => {
  const navigate = useNavigate();
  const { Submit, handleSubmit, register, errors } = useLogin();
  return (
    <div className="h-[100vh] bg-theme flex justify-center items-center w-[100%] m-auto">
      <div
        style={{
          backgroundImage: `url(${img})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          width: "40%",
          height: "80%",
        }}
      ></div>
      <div className="bg-white w-[30%] h-[80%] shadow-2xl shadow-black px-[40px] py-[50px]">
        <p className="font-extralight text-[40px] text-theme">
          Hello,
          <br />
          <span className="font-extrabold">Welcome!</span>
        </p>
        <form
          onSubmit={handleSubmit(Submit)}
          className="flex flex-col gap-[10px] mt-[10px]"
        >
          <InputWrapper label="Email" labelClassName="text-[15px]">
            <input
              {...register("email")}
              type="text"
              placeholder="Enter your Email"
              className="outline-none text-black border-b  border-solid border-blue2 py-[8px] w-full text-[16px] placeholder:text-gray1 font-light leading-[24px]"
            />
          </InputWrapper>
          <p className="text-red-500">{errors.email?.message}</p>
          <InputWrapper label="Password" labelClassName="text-[15px]">
            <InputPassword
              register={register("password")}
              type="text"
              placeholder="Enter your Password"
              className="border-2  p-[7px] rounded "
            />
          </InputWrapper>
          <p className="text-red-500">{errors.password?.message}</p>
          <div className="flex gap-5 mt-[6px] ">
            <button type="submit" className="border-black border-2 w-[100px] ">
              Sign-In
            </button>
            <button
              className="border-black border-2 w-[100px] p-[7px] "
              onClick={() => navigate("/register")}
            >
              Sign-Up
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
