"use client";

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
import {
  Coins,
  ExternalLink,
  Mail,
  MessageSquareMore,
  PhoneCall,
  Receipt,
  SquareGanttChart,
} from "lucide-react";

import { Sheet, SheetClose, SheetContent, SheetTrigger } from "./ui/sheet";
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
            <Button size="sm" variant="outline" className="lg:hidden">
              <PanelLeft className="h-5 w-5" />
              <span className="sr-only">Toggle Menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="left" className="sm:max-w-xs">
            <nav className="grid gap-6 text-lg font-medium">
              <SheetClose asChild>
                <Button asChild variant="ghost">
                  <Link
                    href="/"
                    className="group flex h-10 w-10 shrink-0 items-center justify-center gap-2 rounded-full bg-primary text-lg font-semibold text-primary-foreground md:text-base"
                  >
                    <Package2 className="h-5 w-5 transition-all group-hover:scale-110" />
                    <span className="sr-only">Acme Inc</span>
                  </Link>
                </Button>
              </SheetClose>
              <SheetClose asChild>
                <Button asChild variant="ghost">
                  <Link
                    href="#"
                    className="flex items-center gap-4 px-2.5 text-muted-foreground hover:text-foreground"
                  >
                    <LineChart className="h-5 w-5" />
                    Settings
                  </Link>
                </Button>
              </SheetClose>
              <SheetClose asChild>
                <Button asChild variant="ghost">
                  <Link
                    href="#"
                    className="flex items-center gap-4 px-2.5 text-muted-foreground hover:text-foreground"
                  >
                    <Users2 className="h-5 w-5" />
                    Customers
                  </Link>
                </Button>
              </SheetClose>
              <SheetClose asChild>
                <Button asChild variant="ghost">
                  <Link
                    href="#"
                    className="flex items-center gap-4 px-2.5 text-muted-foreground hover:text-foreground"
                  >
                    <Package className="h-5 w-5" />
                    Products
                  </Link>
                </Button>
              </SheetClose>
              <SheetClose asChild>
                <Button asChild variant="ghost">
                  <Link
                    href="#"
                    className="flex items-center gap-4 px-2.5 text-foreground"
                  >
                    <ShoppingCart className="h-5 w-5" />
                    Orders
                  </Link>
                </Button>
              </SheetClose>
            </nav>
          </SheetContent>
        </Sheet>
        <div className="bg-white flex justify-center items-center w-full ">
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
          <div className="items-center flex-row space-x-8 w-full justify-end text-[#bfbfbf] hidden lg:flex">
            <div className="">
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <p className="text-neutral-700 cursor-pointer">Listings</p>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="w-56">
                  <DropdownMenuLabel>Buy or sell a listing</DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  <DropdownMenuGroup>
                    <Link href="/buy">
                      <DropdownMenuItem className="flex flex-row items-center w-full">
                        <Coins className="mr-2 h-4 w-4" />
                        <span>Buy</span>
                        {/* <DropdownMenuShortcut>⇧⌘P</DropdownMenuShortcut> */}
                      </DropdownMenuItem>
                    </Link>

                    <Link href="sell">
                      <DropdownMenuItem className="flex flex-row items-center w-full">
                        <Receipt className="mr-2 h-4 w-4" />
                        <span>Sell</span>
                        {/* <DropdownMenuShortcut>⌘B</DropdownMenuShortcut> */}
                      </DropdownMenuItem>
                    </Link>
                  </DropdownMenuGroup>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
            <div className="">
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <p className="text-neutral-700 cursor-pointer">Manage</p>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="w-56">
                  <DropdownMenuLabel>Manage listings</DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  <DropdownMenuGroup>
                    <Link href="/manage">
                      <DropdownMenuItem className="flex flex-row items-center w-full">
                        <SquareGanttChart className="mr-2 h-4 w-4" />
                        <span>Manage</span>
                        {/* <DropdownMenuShortcut>⇧⌘P</DropdownMenuShortcut> */}
                      </DropdownMenuItem>
                    </Link>
                  </DropdownMenuGroup>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>

            <a href="/build-to-rent" className=" text-black ">
              Built to Rent
            </a>
            <a href="/projects" className=" text-black ">
              Projects
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
                  <DropdownMenuSeparator />
                  <Link href="/contact">
                    <DropdownMenuItem>
                      <ExternalLink className="mr-2 h-4 w-4" />
                      <span>Contact Page</span>
                      {/* <DropdownMenuShortcut>⌘K</DropdownMenuShortcut> */}
                    </DropdownMenuItem>
                  </Link>
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
