import { Github, Instagram, Twitter } from "lucide-react";
import Link from "next/link";
import { Separator } from "./ui/separator";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import Image from "next/image";

type LinkItem = {
  name: string;
  url: string;
};

type FooterSectionProps = {
  title: string;
  links: LinkItem[];
};

const FooterSection = ({ title, links }: FooterSectionProps) => (
  <div className="flex flex-col">
    <h4 className="dark:text-white mb-3 font-semibold">{title}</h4>
    {links.map((link, index) => (
      <Link href={link.url} key={index} legacyBehavior>
        <a className="mb-3 text-neutral-500 hover:text-inherit transition duration-150 ease-in-out">
          {link.name}
        </a>
      </Link>
    ))}
  </div>
);

const Footer = () => {
  return (
    <footer className="border-t space-y-8 w-full">
      <main className="w-full max-w-7xl justify-center mx-auto flex flex-col md:flex-col px-6 py-9 gap-8 ">
        <section className="flex flex-col md:flex-row gap-8 justify-between">
          <div className="flex flex-row md:flex-col justify-between items-center">
            {/* <h3 className="font-display font-black text-4xl text-left ">
              Turnkey Memphis
            </h3> */}
            <Image
              width={150}
              height={150}
              src={
                "https://res.cloudinary.com/dfgr7tov1/image/upload/v1713386709/Screenshot_2024-04-16_at_3.27_2_tw8bsq.png"
              }
              alt="MTR Logo"
            />
            <div className="flex h-7 flex-row  justify-center items-center space-x-3 text-lg ">
              <div className="flex flex-row justify-between items-center space-x-2">
                <Twitter />
              </div>
              <Separator orientation="vertical" />
              <div className="flex flex-row justify-between items-center space-x-2">
                <Instagram />
              </div>
            </div>
          </div>

          <FooterSection
            title="Info"
            links={[
              { name: "Listings", url: "/listings" },
              { name: "Sell", url: "/sell" },
              {
                name: "Manage",
                url: "https://strongerpropertymanagement.com/lander",
              },
            ]}
          />
          <FooterSection
            title="Resources"
            links={[
              { name: "Contact", url: "/contact" },
              { name: "Build to Rent", url: "/build-to-rent" },
              { name: "Projects", url: "/projects" },
            ]}
          />
          <FooterSection
            title="Company"
            links={[
              { name: "Terms of Service", url: "/terms" },
              { name: "Privacy Policy", url: "/privacypolicy" },
              // { name: "Meet the Team", url: "/team" },
            ]}
          />
          <section className="flex flex-col items-start">
            <div>
              <div>
                <h4 className="mb-3 font-semibold">
                  Subscribe to our newsletter
                </h4>
                <p className="text-neutral-500 mb-2">
                  Stay updated on new releases and features, guides, and case
                  studies.
                </p>
                <div className="relative w-full">
                  <Input
                    type="email"
                    id="footer-input"
                    className="w-full pl-4 pr-20 py-5 border rounded-md text-gray-700 focus:outline-none focus:ring focus:border-none"
                    placeholder="you@domain.com"
                  />
                  <Button
                    type="submit"
                    className="absolute right-1 top-1 bottom-1  font-semibold  rounded-md"
                    size="sm"
                    variant="outline"
                  >
                    Subscribe
                  </Button>
                </div>
              </div>
            </div>
          </section>
        </section>

        <div className="flex flex-row mt-6 items-center justify-between">
          <div>
            <p className="text-neutral-400">Copright © MTH Turnkey LLC</p>
          </div>
          <div>
            <div>{/* <ModeToggle /> */}</div>
          </div>
        </div>
      </main>
    </footer>
  );
};
export default Footer;
