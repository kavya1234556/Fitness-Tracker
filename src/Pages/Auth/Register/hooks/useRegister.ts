import { useForm } from "react-hook-form";
import { z } from "zod";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
// import { useId } from "react";
import { v4 as uuidv4 } from "uuid";
import { zodResolver } from "@hookform/resolvers/zod";
export type registerType = {
  email: string;
  username: string;
  password: string;
};

const useRegister = () => {
  const navigate = useNavigate();
  const RegisterSchema = z.object({
    email: z.string().min(1, "Email is Required").email(),
    username: z.string().min(3, "Username should be more than 2 letter"),
    password: z
      .string()
      .min(6, "Password should be minimum 6 letters")
      .max(10, "Password cannot be more than 10 letters"),
  });
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(RegisterSchema),
    defaultValues: {
      email: "",
      password: "",
      username: "",
    },
  });
  function Submit(data: registerType) {
    console.log(data);
    const existingData =
      JSON.parse(localStorage.getItem("user") || "null") || [];
    const emailExists = existingData.some(
      (user: registerType) => user.email === data.email
    );
    console.log("🚀 ~ Submit ~ emailExists:", emailExists);
    if (emailExists) {
      toast.error("Email already exists");
      return;
    }
    console.log("Form Data:", data);
    const user_id = uuidv4();
    const newData = { ...data, id: user_id };
    const userRecord = [...existingData, newData];
    localStorage.setItem("user", JSON.stringify(userRecord));
    navigate("/");
    toast.success("User has been registered");
  }
  return { Submit, register, handleSubmit, errors };
};

export default useRegister;
