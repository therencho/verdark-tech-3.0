"use client";
import { FC, useState } from "react";
import { ButtonForFun } from "./ui/moving-border";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "./ui/dialog";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import toast from "react-hot-toast";
import { Alert, AlertDescription, AlertTitle } from "./ui/alert";
import { Terminal } from "lucide-react";
import { RadioGroup, RadioGroupItem } from "./ui/radio-group";
import Heading from "./Heading";

interface PricingCardProps {}

const PricingCard: FC<PricingCardProps> = ({}) => {
  const [showSuccessAlert, setShowSuccessAlert] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    companyName: "",
    city: "",
    phone: "",
    email: "",
  });

  const handleChange = (e: any) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const onSubmit = () => {
    const isFieldEmpty = Object.values(formData).some((value) => value === "");

    if (isFieldEmpty) {
      toast.error("Please fill in all the fields.");
    } else {
      setShowSuccessAlert(true);
      // Close the modal after showing the success message
      setTimeout(() => {
        setIsModalOpen(false);
      }, 8000); // Close the modal after 3 seconds (adjust the delay as needed)
      // Add any other logic here, like sending the form data to the server
    }
  };

  return (
    <div className="pt-5 bg-neutral-950" id="pricing">
      <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
        <div className="mx-auto pb-20 mt-4 max-w-7xl px-6 lg:px-8">
          <Heading title="Unveiling Your Perfect Vedark Plan" />
          <div className="isolate mx-auto mt-10 grid max-w-md grid-cols-1 gap-8 lg:mx-0 lg:max-w-none lg:grid-cols-3">
            <div className="ring-1 ring-white/10 rounded-3xl p-8 xl:p-10">
              <div className="flex items-center justify-between gap-x-4">
                <h2
                  id="product1"
                  className="text-lg font-semibold leading-8 text-white"
                >
                  Basic
                </h2>
              </div>
              <p className="mt-4 text-sm leading-6 text-gray-300">
                Perfect for small businesses just starting with AI
              </p>
              <p className="mt-6 flex items-baseline gap-x-1">
                <span className="text-4xl font-bold tracking-tight text-white">
                  $49 / Month
                </span>
              </p>
              <DialogTrigger asChild>
                <button className="border text-sm font-medium w-full my-4 relative border-neutral-200 border-white/[0.2] text-white px-6 py-4 rounded-full">
                  <a href="/">Order now</a>
                  <span className="absolute inset-x-0 w-1/2 mx-auto -bottom-px bg-gradient-to-r from-transparent via-blue-500 to-transparent h-px" />
                </button>
              </DialogTrigger>
              <ul
                role="list"
                className="mt-8 space-y-3 text-sm leading-6 text-gray-300 xl:mt-10"
              >
                <li className="flex gap-x-3">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    aria-hidden="true"
                    className="h-6 w-5 flex-none text-white"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                  Basic AI Agent Setup
                </li>
                <li className="flex gap-x-3">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    aria-hidden="true"
                    className="h-6 w-5 flex-none text-white"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                  Limited Customization Options
                </li>
                <li className="flex gap-x-3">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    aria-hidden="true"
                    className="h-6 w-5 flex-none text-white"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                  1 Active AI Agent
                </li>
              </ul>
            </div>

            <div className="bg-black ring-2 ring-neutral-700 rounded-3xl p-8 xl:p-10">
              <div className="flex items-baseline justify-between gap-x-4">
                <h2
                  id="product2"
                  className="text-lg font-semibold leading-8 text-white"
                >
                  Professional
                </h2>
                <p className="rounded-full bg-neutral-950 border-2 border-slate-600 px-2.5 py-1 text-xs font-semibold leading-5 text-white">
                  Most popular
                </p>
              </div>
              <p className="mt-4 text-sm leading-6 text-gray-300">
                Best for businesses looking for advanced solutions
              </p>
              <p className="mt-6 flex items-baseline gap-x-1">
                <span className="text-4xl font-bold tracking-tight text-white">
                  $99 / Month
                </span>
              </p>
              <DialogTrigger asChild>
                <button className="border text-sm font-medium w-full my-4 relative border-neutral-200 border-white/[0.2] text-white px-6 py-4 rounded-full">
                  <a href="/">Order now</a>
                  <span className="absolute inset-x-0 w-1/2 mx-auto -bottom-px bg-gradient-to-r from-transparent via-blue-500 to-transparent h-px" />
                </button>
              </DialogTrigger>
              <ul
                role="list"
                className="mt-8 space-y-3 text-sm leading-6 text-gray-300 xl:mt-10"
              >
                <li className="flex gap-x-3">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    aria-hidden="true"
                    className="h-6 w-5 flex-none text-white"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                  Advanced AI Customization
                </li>
                <li className="flex gap-x-3">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    aria-hidden="true"
                    className="h-6 w-5 flex-none text-white"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                  Comprehensive Backtesting & Analytics
                </li>
                <li className="flex gap-x-3">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    aria-hidden="true"
                    className="h-6 w-5 flex-none text-white"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                  5 Active AI Agents
                </li>
              </ul>
            </div>

            <div className="ring-1 ring-white/10 rounded-3xl p-8 xl:p-10">
              <div className="flex items-center justify-between gap-x-4">
                <h2
                  id="product3"
                  className="text-lg font-semibold leading-8 text-white"
                >
                  Enterprise
                </h2>
              </div>
              <p className="mt-4 text-sm leading-6 text-gray-300">
                Tailored solutions for large organizations
              </p>
              <p className="mt-6 flex items-baseline gap-x-1">
                <span className="text-4xl font-bold tracking-tight text-white">
                  $299 / Month
                </span>
              </p>
              <DialogTrigger asChild>
                <button className="border text-sm font-medium w-full my-4 relative border-neutral-200 border-white/[0.2] text-white px-6 py-4 rounded-full">
                  <a href="/">Order now</a>
                  <span className="absolute inset-x-0 w-1/2 mx-auto -bottom-px bg-gradient-to-r from-transparent via-blue-500 to-transparent h-px" />
                </button>
              </DialogTrigger>
              <ul
                role="list"
                className="mt-8 space-y-3 text-sm leading-6 text-gray-300 xl:mt-10"
              >
                <li className="flex gap-x-3">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    aria-hidden="true"
                    className="h-6 w-5 flex-none text-white"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                  Custom AI Development
                </li>
                <li className="flex gap-x-3">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    aria-hidden="true"
                    className="h-6 w-5 flex-none text-white"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                  Unlimited Backtesting & Analytics
                </li>
                <li className="flex gap-x-3">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    aria-hidden="true"
                    className="h-6 w-5 flex-none text-white"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                  10+ Active AI Agents
                </li>
              </ul>
            </div>
          </div>
        </div>

        <DialogContent className="sm:max-w-[425px] bg-neutral-950 border-slate-600 text-white">
          <DialogHeader>
            <DialogTitle>Place Order</DialogTitle>
            <DialogDescription>
              Make changes to your profile here. Click save when you're done.
            </DialogDescription>
          </DialogHeader>
          {showSuccessAlert && (
            <Alert variant="destructive">
              <AlertTitle>Success!</AlertTitle>
              <AlertDescription>
                We Will Send You The Payment Details On Your Email Within 2
                Working Days.
              </AlertDescription>
            </Alert>
          )}
          <div className="grid gap-4 py-4">
            <div className="flex justify-center items-center gap-4">
              <div className="">
                <Label htmlFor="firstName" className="text-right">
                  First Name
                </Label>
                <Input
                  id="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  required
                  placeholder="Enter First Name"
                  className="col-span-3"
                />
              </div>
              <div className="">
                <Label htmlFor="lastName" className="text-right">
                  Last Name
                </Label>
                <Input
                  id="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                  required
                  placeholder="Enter Last Name"
                  className="col-span-3"
                />
              </div>
            </div>
            <div className="">
              <Label htmlFor="companyName" className="text-right">
                Company name (optional)
              </Label>
              <Input
                id="companyName"
                value={formData.companyName}
                onChange={handleChange}
                placeholder="Company Name"
                className="col-span-3"
              />
            </div>

            <div className="">
              <Label htmlFor="city" className="text-right">
                Town / City *
              </Label>
              <Input
                id="city"
                value={formData.city}
                onChange={handleChange}
                required
                placeholder="Town / City"
                className="col-span-3"
              />
            </div>
            <div className="">
              <Label htmlFor="phone" className="text-right">
                Phone
              </Label>
              <Input
                id="phone"
                value={formData.phone}
                onChange={handleChange}
                required
                placeholder="Phone"
                className="col-span-3"
              />
            </div>
            <div className="">
              <Label htmlFor="email" className="text-right">
                Email address
              </Label>
              <Input
                id="email"
                value={formData.email}
                onChange={handleChange}
                required
                placeholder="Email"
                className="col-span-3"
              />
            </div>
            <h1>Payment Options</h1>
            <div className="text-white">
              <RadioGroup defaultValue="Bank Transfer">
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="Bank Transfer" id="r1" />
                  <Label htmlFor="r1">Bank Transfer</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem
                    value="Credit - Debit/PayPal Invoice"
                    id="r2"
                  />
                  <Label htmlFor="r2">Credit - Debit/PayPal Invoice</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="Bitcoin" id="r3" />
                  <Label htmlFor="r3">Bitcoin</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="Others Crypto Currency" id="r4" />
                  <Label htmlFor="r4">Others Crypto Currency</Label>
                </div>
              </RadioGroup>
            </div>
          </div>
          <DialogFooter>
            <Button type="submit" onClick={onSubmit}>
              Place Order
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default PricingCard;
