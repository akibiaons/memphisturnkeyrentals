import { Github, Twitter } from "lucide-react";
import Link from "next/link";
import { Separator } from "./ui/separator";
import { Input } from "./ui/input";
import { Button } from "./ui/button";

type FooterSectionProps = {
  title: string;
  links: string[];
};

const FooterSection = ({ title, links }: FooterSectionProps) => (
  <div>
    <h4 className="dark:text-white mb-3 font-semibold">{title}</h4>
    <Link href="/" className="">
      {links.map((link, index) => (
        <p
          key={index}
          className="mb-3 text-neutral-500 hover:text-inherit transition duration-150 ease-in-out"
        >
          {link}
        </p>
      ))}
    </Link>
  </div>
);
const Footer = () => {
  return (
    <footer className="  border-t space-y-8 w-full">
      <main className="w-full max-w-7xl justify-center mx-auto flex flex-col md:flex-col px-6 py-9 gap-8 ">
        <section className="flex flex-col md:flex-row gap-8 justify-between">
          <div className="flex flex-row md:flex-col justify-between items-center">
            <h3 className="font-display font-black text-4xl text-left md:text-center">
              Turnkey Memphis
            </h3>
            <div className="flex h-7 flex-row  justify-center items-center space-x-3 text-lg ">
              <div className="flex flex-row justify-between items-center space-x-2">
                <Twitter />
              </div>
              <Separator orientation="vertical" />
              <div className="flex flex-row justify-between items-center space-x-2">
                <Github />
              </div>
            </div>
          </div>

          <FooterSection
            title="Info"
            links={["Learn", "Product", "Market", "Company", "Testimonials"]}
          />
          <FooterSection
            title="Resources"
            links={["Developer API", "Tools", "Blog"]}
          />
          <FooterSection
            title="Company"
            links={[
              "Terms of Service",
              "Privacy Policy",
              "Cookies",
              "Meet the team",
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
