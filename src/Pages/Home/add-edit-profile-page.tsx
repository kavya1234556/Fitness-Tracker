import { useEffect, useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../../components/ui/card";
import useAddEditProfile from "./hooks/useAddEditProfile";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../../components/ui/form";
import { Input } from "../../components/ui/input";

const AddEditProfilePage = () => {
  const { form, submit } = useAddEditProfile();
  const userID = localStorage.getItem("user_id");
  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(submit)}>
        <Card className="w-[35%]">
          <CardHeader>
            <CardTitle>Profile</CardTitle>
            <CardDescription>
              <img
                src={`https://api.dicebear.com/9.x/pixel-art/svg?seed=${userID}`}
                alt="avatar"
                width={52}
                height={52}
                className="rounded-2xl bg-black"
              />
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex flex-row gap-6">
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel> Name </FormLabel>
                    <FormControl>
                      <Input type="text" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="age"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel> Age </FormLabel>
                    <FormControl>
                      <Input type="number" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <div className="flex flex-row gap-6">
              <FormField
                control={form.control}
                name="weight"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel> Weight </FormLabel>
                    <FormControl>
                      <Input type="number" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="height"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel> Height </FormLabel>
                    <FormControl>
                      <Input type="number" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
          </CardContent>
          <CardFooter>
            <button className="border border-theme w-[90px] h-10" type="submit">
              Add +
            </button>
          </CardFooter>
        </Card>
      </form>
    </Form>
  );
};

export default AddEditProfilePage;
