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
} from "lucide-react";
import { Progress } from "../ui/progress";

export default function SectionTwo() {
  return (
    <div>
      <div>
        <div className="flex flex-col text-center my-12 ">
          <p className="text-black mb-6 font-semibold uppercase text-sm">
            GET STARTED
          </p>
          <h2 className="text-4xl font-semibold text-black mb-2 lg:text-6xl">
            Here are a few ways to workin with us!
          </h2>
        </div>
        <div className="flex flex-col md:flex-row gap-8 justify-between items-center mx-auto">
          <Card className="min-w-[300px] max-w-[350px] min-h-[250px]">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="">Investor Profile</CardTitle>
              <User className="h-7 w-7 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <p className="text-sm  text-neutral-500">
                Answer a few short questions to activate a customized dashboard
                and property recommendations based on your investor profile.
              </p>
            </CardContent>
            <CardFooter className="">
              <Button>Create an Investor Profile</Button>
            </CardFooter>
          </Card>
          <Card className="min-w-[300px] max-w-[350px]  min-h-[250px]">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className=""> Consultation</CardTitle>
              <Speech className="h-7 w-7 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <p className="text-sm  text-neutral-500">
                Speak with an expert on the subject. Receive a complimentary
                strategy session or to answer any questions you may have.
              </p>
            </CardContent>
            <CardFooter className="">
              <Button>Create an Investor Profile</Button>
            </CardFooter>
          </Card>
          <Card className="min-w-[300px] max-w-[350px] min-h-[250px]">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="">DIY</CardTitle>
              <Blocks className="h-7 w-7 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <p className="text-sm  text-neutral-500">
                We give you the building blocks, and you build it out from
                there. We will handle the rest from here.
              </p>
            </CardContent>
            <CardFooter className="">
              <Button>Create an Investor Profile</Button>
            </CardFooter>
          </Card>
        </div>
      </div>
    </div>
  );
}
