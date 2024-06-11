import Image from "next/image";
import React from "react";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import {
  Blocks,
  CreditCard,
  HeartHandshake,
  Send,
  Speech,
  User,
  Users,
  Mail,
} from "lucide-react";
import Link from "next/link";

export default function ContactCards() {
  return (
    <div>
      <div>
        <div className="flex flex-col flex-1 lg:flex-row gap-8 justify-center items-center mx-auto">
          <Card className="min-w-[300px] max-w-[350px] min-h-[250px] flex flex-col justify-between group/bento hover:shadow-xl transition duration-200 shadow-input ">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="group-hover/bento:translate-x-2 transition duration-200">
                Call Us
              </CardTitle>
              <Speech className="h-7 w-7 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <p className="text-sm  text-neutral-500">
                Answer a few short questions to activate a customized dashboard
                and property recommendations based on your investor profile.
              </p>
            </CardContent>
            <CardFooter className="">
              <Link href="tel:+1(901)571-9382">
                <Button>Call Today</Button>
              </Link>
            </CardFooter>
          </Card>
          <Card className="min-w-[300px] max-w-[350px]  min-h-[250px] flex flex-col justify-between group/bento hover:shadow-xl transition duration-200 shadow-input">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="group-hover/bento:translate-x-2 transition duration-200">
                {" "}
                Email us
              </CardTitle>
              <Mail className="h-7 w-7 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <p className="text-sm  text-neutral-500">
                Speak with an expert on the subject. Receive a complimentary
                strategy session or to answer any questions you may have.
              </p>
            </CardContent>
            <CardFooter className="">
              <Link href="mailto:strongerinvestmentsllc@gmail.com">
                <Button>Email today</Button>
              </Link>
            </CardFooter>
          </Card>
        </div>
      </div>
    </div>
  );
}
