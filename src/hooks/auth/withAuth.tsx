import { useRouter } from "next/router";
import { useEffect } from "react";
import { useAuth } from "./useAuth";

const withAuth = (Component: React.FC) => {
  return (props: any) => {
    const { token } = useAuth();
    const router = useRouter();

    useEffect(() => {
      if (!token) {
        router.push("/auth/signin");
      }
    }, [token, router]);

    return token ? <Component {...props} /> : null;
  };
};

export default withAuth;
