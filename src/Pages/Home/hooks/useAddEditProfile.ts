import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

export type ProfileType = {
  name: string;
  age: number;
  weight: number;
  height: number;
};

const useAddEditProfile = () => {
  const Schema = z.object({
    name: z
      .string({
        required_error: "Name is required",
      })
      .min(3, "Name should be longer"),
    weight: z.coerce
      .number({
        required_error: "Weight is required",
        invalid_type_error: "Weight must be a number",
      })
      .positive(),
    age: z.coerce
      .number({
        required_error: "Age is required",
        invalid_type_error: "Age must be a number",
      })
      .positive(),
    height: z.coerce
      .number({
        required_error: "Height is required",
        invalid_type_error: "Height must be a number",
      })
      .positive(),
  });
  const form = useForm<ProfileType>({
    resolver: zodResolver(Schema),
    defaultValues: {
      name: "",
      age: 0,
      weight: 0,
      height: 0,
    },
  });
  const submit = (data: ProfileType) => {
    console.log(typeof data?.age);
    console.log("data", data);
  };
  return { form, submit };
};

export default useAddEditProfile;
