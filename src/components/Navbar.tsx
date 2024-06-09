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
  ChevronDown,
  Coins,
  ExternalLink,
  Mail,
  MessageSquareMore,
  PhoneCall,
  Receipt,
  SquareArrowOutUpRight,
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
      <header className="sticky top-0 z-30 flex h-14 py-1 items-center gap-4 border px-2 sm:static sm:h-auto sm:border-1 sm:bg-transparent sm:px-6">
        {/* MOBILE */}
        <Sheet>
          <SheetTrigger asChild>
            <Button size="sm" variant="outline" className="lg:hidden">
              <PanelLeft className="h-5 w-5" />
              <span className="sr-only">Toggle Menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="left" className="sm:max-w-xs justify-start">
            <nav className="grid gap-6 text-lg font-medium justify-start">
              <SheetClose asChild>
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button
                      variant="secondary"
                      size="icon"
                      className="rounded-full"
                    >
                      <CircleUser className="h-5 w-5" />
                      <span className="sr-only">Toggle user menu</span>
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent side="right" className="mt-5">
                    <DropdownMenuLabel>My Account</DropdownMenuLabel>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem>Settings</DropdownMenuItem>
                    <DropdownMenuItem>Support</DropdownMenuItem>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem>Logout</DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </SheetClose>
              <SheetClose asChild>
                <Button asChild variant="ghost">
                  <Link
                    href="https://strongerpropertymanagement.com/lander"
                    className="flex items-center gap-4 px-2.5 text-muted-foreground hover:text-foreground "
                  >
                    Manage
                    <SquareArrowOutUpRight className="h-5 w-5" />
                  </Link>
                </Button>
              </SheetClose>
              <SheetClose asChild>
                <Button asChild variant="ghost">
                  <Link
                    href="/listings"
                    className="flex items-center gap-4 px-2.5 text-muted-foreground hover:text-foreground"
                  >
                    {/* <LineChart className="h-5 w-5" /> */}
                    Listings
                  </Link>
                </Button>
              </SheetClose>
              <SheetClose asChild>
                <Button asChild variant="ghost">
                  <Link
                    href="/sell"
                    className="flex items-center gap-4 px-2.5 text-muted-foreground hover:text-foreground"
                  >
                    {/* <Users2 className="h-5 w-5" /> */}
                    Sell
                  </Link>
                </Button>
              </SheetClose>

              <SheetClose asChild>
                <Button asChild variant="ghost">
                  <Link
                    href="/projects"
                    className="flex items-center gap-4 px-2.5  text-muted-foreground hover:text-foreground"
                  >
                    {/* <ShoppingCart className="h-5 w-5" /> */}
                    Projects
                  </Link>
                </Button>
              </SheetClose>
              <SheetClose asChild>
                <Button asChild variant="ghost">
                  <Link
                    href="/build-to-rent"
                    className="flex items-center gap-4 px-2.5  text-muted-foreground hover:text-foreground"
                  >
                    Build to rent
                    <ChevronDown />
                  </Link>
                </Button>
              </SheetClose>

              <SheetClose asChild>
                <Button asChild variant="ghost">
                  <Link
                    href="/contact"
                    className="flex items-center gap-4 px-2. text-muted-foreground hover:text-foreground"
                  >
                    {/* <ShoppingCart className="h-5 w-5" /> */}
                    Contact
                  </Link>
                </Button>
              </SheetClose>
            </nav>
          </SheetContent>
        </Sheet>

        {/* NOT MOBILE */}
        <div className=" flex justify-center items-center w-full ">
          <div className="mr-14">
            <Link href="/">
              <Image
                width={140}
                height={140}
                src="https://res.cloudinary.com/dfgr7tov1/image/upload/v1713386709/Screenshot_2024-04-16_at_3.27_2_tw8bsq.png"
                alt="MTR Logo"
              />
            </Link>
          </div>

          {/* Navigation links and such */}
          <div className="items-center flex-row space-x-8 w-full justify-end hidden lg:flex ">
            <div className="">
              <Link
                href="https://strongerpropertymanagement.com/lander"
                className="flex flex-row items-center w-full"
              >
                <span>Manage</span>
                <SquareArrowOutUpRight className="ml-1 mr-2 h-4 w-4" />
              </Link>
            </div>
            <Link href="/listings">Listings</Link>
            <Link href="/sell">
              Sell
              {/* <DropdownMenuShortcut>⌘B</DropdownMenuShortcut> */}
            </Link>
            <Link href="/projects" className="  ">
              Projects
            </Link>
            <Link
              href="/build-to-rent"
              className="cursor-pointer flex flex-row items-center gap-[0.4px]"
            >
              Build to Rent
              <ChevronDown className="w-4 h-4" />
            </Link>

            {/* Contact Button/SHADCN for desktop */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button>Contact</Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-56">
                <DropdownMenuLabel>Contact Us</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuGroup>
                  {/* <DropdownMenuItem>
                    <MessageSquareMore className="mr-2 h-4 w-4" />
                    <span>Message</span>
                    {/* <DropdownMenuShortcut>⇧⌘P</DropdownMenuShortcut>
                  </DropdownMenuItem> */}
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
                  {/* <DropdownMenuItem>
                    <FaWhatsapp className="mr-2 h-4 w-4" />
                    <span>WhatsApp</span>
                    {/* <DropdownMenuShortcut>⌘K</DropdownMenuShortcut>
                  </DropdownMenuItem> */}
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
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button
                  variant="secondary"
                  size="icon"
                  className="rounded-full"
                >
                  <CircleUser className="h-5 w-5" />
                  <span className="sr-only">Toggle user menu</span>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuLabel>My Account</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem>Settings</DropdownMenuItem>
                <DropdownMenuItem>Support</DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem>Logout</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
      </header>
    </div>
  );
};
export default DashboardNav;
