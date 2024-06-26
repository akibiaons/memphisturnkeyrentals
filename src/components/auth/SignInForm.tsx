import React from "react";
import { useForm } from "react-hook-form"; // Ensure correct import
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import axios from "axios";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";

const signinSchema = z.object({
  identifier: z.string().email("Invalid email address"),
  password: z.string().min(6, "Password must be at least 6 characters"),
});

type SigninFormData = z.infer<typeof signinSchema>;

const SigninForm: React.FC = () => {
  // const { signin } = useAuth(); // Uncomment and use if you have the useAuth hook
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SigninFormData>({
    resolver: zodResolver(signinSchema),
  });

  const onSubmit = async (data: SigninFormData) => {
    try {
      const response = await axios.post(
        `${process.env.NEXT_PUBLIC_STRAPI_URL}/auth/local`,
        data
      );
      console.log("User signed in:", response.data);
      // signin(response.data.jwt); // Uncomment and use if you have the useAuth hook
      // Place your sign-in logic here
    } catch (error) {
      console.error("Error signing in:", error);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
      <div>
        <Label htmlFor="identifier">Email</Label>
        <Input type="email" id="identifier" {...register("identifier")} />
        {errors.identifier && (
          <span className="text-red-500">{errors.identifier.message}</span>
        )}
      </div>
      <div>
        <Label htmlFor="password">Password</Label>
        <Input type="password" id="password" {...register("password")} />
        {errors.password && (
          <span className="text-red-500">{errors.password.message}</span>
        )}
      </div>
      <Button type="submit">Sign In</Button>
    </form>
  );
};

export default SigninForm;
