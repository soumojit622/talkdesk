import React from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { ArrowRight, Calendar, Clock, LinkIcon } from "lucide-react";
import TestimonialsCarousel from "@/components/testimonials";
import Link from "next/link";

const features = [
  {
    icon: Calendar,
    title: "Event Creation",
    description: "Set up and personalize your event types with ease.",
  },
  {
    icon: Clock,
    title: "Availability Management",
    description: "Specify your availability to optimize scheduling.",
  },
  {
    icon: LinkIcon,
    title: "Personalized Links",
    description: "Distribute your unique scheduling link effortlessly.",
  },
];

const howItWorks = [
  { step: "Register", description: "Create a free Talkdesk account." },
  {
    step: "Define Availability",
    description: "Indicate when you are free for meetings.",
  },
  {
    step: "Share Your Link",
    description: "Provide your scheduling link to clients or colleagues.",
  },
  {
    step: "Receive Bookings",
    description: "Automatically get confirmations for new appointments.",
  },
];

const Home = () => {
  return (
    <main className="container mx-auto px-4 py-16">
      {/* Hero Section */}
      <div className="flex flex-col lg:flex-row items-center justify-between gap-12 mb-24">
        <div className="lg:w-1/2">
          <h1 className="text-5xl sm:text-6xl md:text-7xl font-extrabold bg-gradient-to-r from-violet-600 to-blue-500 text-transparent bg-clip-text pb-6">
            Streamline Your Scheduling
          </h1>

          <p className="text-lg sm:text-xl text-gray-600 mb-10">
            Talkdesk assists you in efficiently managing your time. Set up
            events, specify your availability, and allow others to book
            appointments with you effortlessly.
          </p>
          <Link href={"/dashboard"}>
            <Button
              size="lg"
              className="text-lg text-white bg-gradient-to-r from-violet-600 to-blue-500 shadow-lg transition-transform transform hover:scale-105"
            >
              Get Started <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </div>
        <div className="lg:w-1/2 flex justify-center">
          <div className="relative w-full max-w-md aspect-square">
            <Image
              src="/poster.png"
              alt="Scheduling illustration"
              layout="fill"
              objectFit="contain"
              className="rounded-lg"
            />
          </div>
        </div>
      </div>

      {/* Key Features Section */}
      <div className="mb-24">
        <h2 className="text-3xl font-bold text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-blue-600">
          Main Features
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card
              key={index}
              className="transition-transform transform hover:scale-105 shadow-lg bg-white"
            >
              <CardHeader>
                <feature.icon className="w-12 h-12 text-violet-500 mb-4 mx-auto" />
                <CardTitle className="text-center font-semibold bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-blue-600">
                  {feature.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-center text-gray-600">
                  {feature.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Testimonials Section */}
      <div className="mb-24">
        <h2 className="text-3xl font-bold text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-blue-600">
          What Users Are Saying
        </h2>

        <TestimonialsCarousel />
      </div>

      {/* How It Works Section */}
      <div className="mb-24">
        <h2 className="text-3xl font-bold text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-blue-600">
          How It Operates
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {howItWorks.map((step, index) => (
            <div key={index} className="text-center">
              <div className="bg-violet-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 shadow-md">
                <span className="font-bold text-xl bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-blue-600">
                  {index + 1}
                </span>
              </div>
              <h3 className="font-semibold text-lg mb-2">{step.step}</h3>
              <p className="text-gray-600">{step.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-gradient-to-r from-purple-600 to-blue-500 text-white rounded-lg p-8 text-center shadow-lg">
        <h2 className="text-3xl font-bold mb-4">
          Ready to Streamline Your Scheduling?
        </h2>
        <p className="text-lg md:text-xl mb-6">
          Join countless professionals who rely on Talkdesk for effective time
          management.
        </p>
        <Link href={"/dashboard"}>
          <Button
            size="lg"
            variant="secondary"
            className="bg-white text-violet-600 hover:bg-violet-100 shadow-md hover:shadow-lg transition-shadow duration-200"
          >
            Start for Free <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </Link>
      </div>
    </main>
  );
};

export default Home;
