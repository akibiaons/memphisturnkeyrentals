import {
  createContext,
  useContext,
  useState,
  useEffect,
  ReactNode,
  FC,
} from "react";
import { useRouter } from "next/navigation"; // Correct import for Next.js 13+

interface AuthContextType {
  user: any;
  token: string | null;
  signin: (token: string) => void;
  signout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: FC<{ children: ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<any>(null);
  const [token, setToken] = useState<string | null>(null);
  const router = useRouter();

  useEffect(() => {
    const savedToken = localStorage.getItem("token");
    if (savedToken) {
      setToken(savedToken);
      // Fetch user data from Strapi if needed
    }
  }, []);

  const signin = (token: string) => {
    localStorage.setItem("token", token);
    setToken(token);
    router.push("/listings");
    // Fetch user data from Strapi if needed
  };

  const signout = () => {
    localStorage.removeItem("token");
    setToken(null);
    setUser(null);
    router.push("/auth/signin");
  };

  return (
    <AuthContext.Provider value={{ user, token, signin, signout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};
