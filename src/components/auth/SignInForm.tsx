import React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import axios from "axios";
import { useAuth } from "@/hooks/auth/useAuth";

const signinSchema = z.object({
  identifier: z.string().email("Invalid email address"),
  password: z.string().min(6, "Password must be at least 6 characters"),
});

type SigninFormData = z.infer<typeof signinSchema>;

const SigninForm: React.FC = () => {
  const { signin } = useAuth();
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
      signin(response.data.jwt);
    } catch (error) {
      console.error("Error signing in:", error);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <label>Email</label>
        <input type="email" {...register("identifier")} />
        {errors.identifier && <span>{errors.identifier.message}</span>}
      </div>
      <div>
        <label>Password</label>
        <input type="password" {...register("password")} />
        {errors.password && <span>{errors.password.message}</span>}
      </div>
      <button type="submit">Sign In</button>
    </form>
  );
};

export default SigninForm;
