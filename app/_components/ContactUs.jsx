import { Mail, Phone, User, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";

export default function ContactUs() {
  return (
    <section className="  px-6 md:px-16 lg:px-28 py-14 bg-[var(--primary-blue)] relative overflow-hidden">
      {/* Decorative Background Elements */}

      <div className="mx-auto lg:max-w-screen-md max-w-screen-xl text-start md:text-center ">
        <h2 className="mb-6 text-2xl  font-extrabold ">
          <div className="inline-block w-fit bg-dash-pattern-org px-4 py-1 font-semibold text-[var(--primary-orange)]  rounded-md">
            Connect with us
          </div>
        </h2>
        <h2 className="text-3xl md:text-4xl mb-4  font-bold text-[var(--third-blue)]">
          Join Our Journey
        </h2>
        <p className=" text-gray-600 lg:mb-10 w-full sm:text-lg dark:text-gray-400">
          We invite driven individuals, visionary collaborators, and
          forward-thinking organizations to join us in shaping the future of
          healthcare.
        </p>
      </div>
      <div className="container mx-auto bg-[var(--primary-blue)] rounded-4xl ">
        <div className="grid md:grid-cols-2 gap-16 items-center ">
          {/* Left Side - Contact Form */}
          <div className="relative">
            <Card className="bg-white border-purple-200 border-2  md:p-3 rounded-3xl shadow-xl lg:p-6">
              <CardContent className="space-y-6 pt-2">
                <div className="inline-block w-fit bg-dash-pattern-org px-4 py-1 text-2xl font-semibold text-[var(--primary-orange)] rounded-md">
                  Contact us
                </div>

                <div className="space-y-4 pt-4">
                  <Input
                    placeholder="Your Name"
                    type={"text"}
                    className="h-12 rounded-xl border border-orange-300 text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-0"
                    icon={<User className="w-5 h-5 text-gray-400" />}
                  />
                  <Input
                    placeholder="Phone Number"
                    type={"number"}
                    className="h-12 rounded-xl border border-orange-300 text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-0"
                    icon={<Phone className="w-5 h-5 text-gray-400" />}
                  />
                  <Input
                    placeholder="Email Address"
                    type={"email"}
                    className="h-12 rounded-xl border border-orange-300 text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-0"
                    icon={<Mail className="w-5 h-5 text-gray-400" />}
                  />
                  <Textarea
                    placeholder="Your Message"
                    className="h-28 rounded-xl border border-orange-300 text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-0"
                  />
                </div>

                <Button
                  className="w-full h-14 bg-orange-500 hover:bg-orange-600 text-white font-semibold rounded-xl text-lg mt-0"
                  id="bottone1"
                >
                  Send Message
                </Button>
              </CardContent>
            </Card>
          </div>

          {/* Right Side - Phone Illustration */}
          <div className="relative flex justify-center">
            {/* Decorative Phone UI retained as visual element */}
            <div className="absolute top-0 left-16 w-16 h-16 bg-orange-500 rounded-full flex items-center justify-center z-10">
              <svg
                className="w-8 h-8 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={3}
                  d="M5 13l4 4L19 7"
                ></path>
              </svg>
            </div>
            <div className="absolute top-8 right-8 bg-blue-300 rounded-full px-4 py-2 flex items-center gap-2">
              <MessageCircle className="w-4 h-4 text-white" />
              <div className="w-8 h-1 bg-white rounded"></div>
            </div>
            <div className="relative">
              <div className="w-80 h-[600px] bg-black rounded-[3rem] p-2">
                <div className="w-full h-full bg-white rounded-[2.5rem] overflow-hidden relative">
                  <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-32 h-6 bg-black rounded-b-2xl"></div>
                  <div className="pt-8 px-6">
                    <div className="text-center mb-4">
                      <h3 className="text-orange-500 font-bold text-lg">
                        CUREVA
                      </h3>
                    </div>
                    <div className="grid grid-cols-4 gap-3 mb-6">
                      {Array.from({ length: 12 }, (_, i) => (
                        <div
                          key={i}
                          className={`aspect-square rounded-lg flex items-center justify-center text-sm font-medium ${
                            i === 3
                              ? "bg-orange-500 text-white"
                              : "bg-blue-200 text-blue-800"
                          }`}
                        >
                          {i + 1}
                        </div>
                      ))}
                    </div>
                    <div className="bg-indigo-600 rounded-xl p-4 mb-4 flex items-center justify-center">
                      <Phone className="w-8 h-8 text-white" />
                    </div>
                    <div className="bg-blue-200 rounded-xl p-4 mb-4">
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-2 bg-blue-600 rounded"></div>
                        <div className="flex-1 space-y-1">
                          <div className="w-full h-1 bg-blue-600 rounded"></div>
                          <div className="w-3/4 h-1 bg-blue-600 rounded"></div>
                        </div>
                      </div>
                    </div>
                    <div className="bg-blue-200 rounded-xl p-4 flex items-center gap-3">
                      <div className="w-12 h-12 bg-white rounded-lg"></div>
                      <div className="flex-1 space-y-1">
                        <div className="w-full h-1 bg-blue-600 rounded"></div>
                        <div className="w-2/3 h-1 bg-blue-600 rounded"></div>
                        <div className="w-1/2 h-1 bg-blue-600 rounded"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="absolute bottom-32 -right-8 w-16 h-16 bg-orange-500 rounded-xl flex items-center justify-center">
                <Mail className="w-8 h-8 text-white" />
              </div>
            </div>

            {/* Character Illustration */}
            {/* <div className="absolute bottom-0 right-0">
                <div className="relative">
                    <div className="w-32 h-48 relative">
                    <div className="absolute top-0 left-8 w-16 h-16 bg-orange-300 rounded-full"></div>
                    <div className="absolute top-0 left-8 w-16 h-12 bg-orange-500 rounded-t-full"></div>
                    <div className="absolute top-12 left-6 w-20 h-24 bg-indigo-600 rounded-t-3xl"></div>
                    <div className="absolute top-16 left-2 w-8 h-16 bg-orange-300 rounded-full transform -rotate-12"></div>
                    <div className="absolute top-16 right-2 w-8 h-16 bg-orange-300 rounded-full transform rotate-45"></div>
                    <div className="absolute bottom-0 left-8 w-6 h-20 bg-amber-800 rounded-full"></div>
                    <div className="absolute bottom-0 right-8 w-6 h-20 bg-amber-800 rounded-full"></div>
                    <div className="absolute bottom-0 left-6 w-10 h-4 bg-gray-800 rounded-full"></div>
                    <div className="absolute bottom-0 right-6 w-10 h-4 bg-gray-800 rounded-full"></div>
                    </div>
                </div>
                </div> */}
          </div>
        </div>
      </div>
    </section>
  );
}
