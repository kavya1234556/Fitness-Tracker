import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { z } from "zod";
import toast from "react-hot-toast";
import { zodResolver } from "@hookform/resolvers/zod";

export type LoginType = {
  email: string;
  password: string;
};
const useLogin = () => {
  const navigate = useNavigate();
  const loginSchema = z.object({
    email: z.string().min(1, "Email is required").email(),
    password: z.string(),
    // .min(6, "Password should be minimum 6 letters")
    // .max(10, "Password cannot be more than 10 letters"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const Submit = (data: LoginType) => {
    console.log("🚀 ~ Submit ~ data:", data);
    const loggedUsers =
      JSON.parse(localStorage.getItem("user") || "null") || [];
    console.log("🚀 ~ Submit ~ loggedUsers:", loggedUsers);
    const loggedInUser = loggedUsers.find(
      (user: LoginType) =>
        user.email === data.email && user.password === data.password
    );
    console.log("🚀 ~ Submit ~ loggedInUser:", loggedInUser);

    if (loggedInUser) {
      localStorage.setItem("loggedIn", "true");
      localStorage.setItem("user_id", loggedInUser.id);
      toast.success("Logged In successfully");
      navigate("/dashboard");
    } else {
      toast.error("Invalid Email or Password");
    }
  };
  return { register, handleSubmit, Submit, errors };
};

export default useLogin;
