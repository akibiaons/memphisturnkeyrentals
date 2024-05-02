import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";
import { FaWhatsapp } from "react-icons/fa";
import { Mail, MessageSquareMore, PhoneCall } from "lucide-react";

import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet";
import {
  Apple,
  CircleUser,
  Home,
  LineChart,
  Menu,
  Package,
  Package2,
  PanelLeft,
  Search,
  ShoppingCart,
  Users2,
} from "lucide-react";
import { Button } from "./ui/button";
import Link from "next/link";
import Image from "next/image";
const DashboardNav = () => {
  return (
    <div className="flex flex-col sm:gap-4">
      <header className="sticky top-0 z-30 flex h-14 py-1 items-center gap-4 border px-4 sm:static sm:h-auto sm:border-1 sm:bg-transparent sm:px-6">
        <Sheet>
          <SheetTrigger asChild>
            <Button size="sm" variant="outline" className="md:hidden">
              <PanelLeft className="h-5 w-5" />
              <span className="sr-only">Toggle Menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="left" className="sm:max-w-xs">
            <nav className="grid gap-6 text-lg font-medium">
              <Link
                href="#"
                className="group flex h-10 w-10 shrink-0 items-center justify-center gap-2 rounded-full bg-primary text-lg font-semibold text-primary-foreground md:text-base"
              >
                <Package2 className="h-5 w-5 transition-all group-hover:scale-110" />
                <span className="sr-only">Acme Inc</span>
              </Link>
              <Link
                href="#"
                className="flex items-center gap-4 px-2.5 text-muted-foreground hover:text-foreground"
              >
                <Home className="h-5 w-5" />
                Dashboard
              </Link>
              <Link
                href="#"
                className="flex items-center gap-4 px-2.5 text-foreground"
              >
                <ShoppingCart className="h-5 w-5" />
                Orders
              </Link>
              <Link
                href="#"
                className="flex items-center gap-4 px-2.5 text-muted-foreground hover:text-foreground"
              >
                <Package className="h-5 w-5" />
                Products
              </Link>
              <Link
                href="#"
                className="flex items-center gap-4 px-2.5 text-muted-foreground hover:text-foreground"
              >
                <Users2 className="h-5 w-5" />
                Customers
              </Link>
              <Link
                href="#"
                className="flex items-center gap-4 px-2.5 text-muted-foreground hover:text-foreground"
              >
                <LineChart className="h-5 w-5" />
                Settings
              </Link>
            </nav>
          </SheetContent>
        </Sheet>
        <div className="bg-white flex justify-between items-center w-full mx-10">
          <div>
            <Link href="/">
              <Image
                width={100}
                height={100}
                src={
                  "https://res.cloudinary.com/dfgr7tov1/image/upload/v1713386709/Screenshot_2024-04-16_at_3.27_2_tw8bsq.png"
                }
                alt="MTR Logo"
              />
            </Link>
          </div>
          <div>
            <span className="line line1"></span>
            <span className="line line2"></span>
          </div>
          {/* Navigation links and such */}
          <div
            className={` lg:items-center lg:flex-row flex-col absolute lg:relative top-full lg:top-auto left-0 w-full lg:w-auto bg-white shadow-inner lg:shadow-none lg:bg-transparent text-[#bfbfbf] pt-4 lg:pt-0 pb-6 lg:pb-0 hidden md:flex `}
          >
            <a
              href="#"
              className="mx-4 my-2  lg:hover:bg-transparent text-black "
            >
              Buy
            </a>
            <a
              href="#"
              className="mx-4 my-2  lg:hover:bg-transparent text-black "
            >
              Sell
            </a>
            <a
              href="#"
              className="mx-4 my-2  lg:hover:bg-transparent text-black "
            >
              Manage
            </a>
            <a
              href="#"
              className="mx-4 my-2  lg:hover:bg-transparent text-black "
            >
              Built to Rent
            </a>
            <a
              href="#"
              className="mx-4 my-2  lg:hover:bg-transparent text-black "
            >
              Our Projects
            </a>
            {/* Contact Button/SHADCN for desktop */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button>Contact</Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-56">
                <DropdownMenuLabel>Contact Us</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuGroup>
                  <DropdownMenuItem>
                    <MessageSquareMore className="mr-2 h-4 w-4" />
                    <span>Message</span>
                    {/* <DropdownMenuShortcut>⇧⌘P</DropdownMenuShortcut> */}
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <Mail className="mr-2 h-4 w-4" />
                    <span>Email</span>
                    {/* <DropdownMenuShortcut>⌘B</DropdownMenuShortcut> */}
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <PhoneCall className="mr-2 h-4 w-4" />
                    <span>Phone</span>
                    {/* <DropdownMenuShortcut>⌘S</DropdownMenuShortcut> */}
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <FaWhatsapp className="mr-2 h-4 w-4" />
                    <span>WhatsApp</span>
                    {/* <DropdownMenuShortcut>⌘K</DropdownMenuShortcut> */}
                  </DropdownMenuItem>
                </DropdownMenuGroup>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
      </header>
    </div>
  );
};
export default DashboardNav;

// export default function Navbar({}: Props) {
//   //   State hooks below from React
//   const [isOpen, setIsOpen] = useState(false);

//   return (
//     <div>
//       {/*  */}

//     </div>
//   );
// }
