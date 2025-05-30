"use client";
import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { toast } from "react-hot-toast";

function ContactUsForm() {
  const form = useRef();
  const [isSending, setIsSending] = useState(false);

  const sendEmail = async (e) => {
    e.preventDefault();
    setIsSending(true);

    try {
      await emailjs.sendForm(
        process.env.NEXT_PUBLIC_EMAIL_JS_SERVICE_ID,
        process.env.NEXT_PUBLIC_EMAIL_JS_TEMPLATE_ID,
        form.current,
        {
          publicKey: process.env.NEXT_PUBLIC_EMAIL_JS_PUBLIC_KEY,
        }
      );

      toast.success("Message sent successfully!");
      form.current.reset();
    } catch (error) {
      toast.error("Failed to send message.");
      console.error("FAILED...", error.text || error);
    } finally {
      setIsSending(false);
    }
  };

  return (
    <Card className="bg-white border-orange-200 mt-5 border-2 md:p-3 rounded-3xl shadow-xl lg:py-6 ">
                                                  
      <CardContent className="  space-y-3 pt-2">
        <div className="inline-block w-fit bg-dash-pattern-org px-4 py-1 text-2xl font-semibold text-[var(--primary-orange)] rounded-md">
          Contact us
        </div>

        <form ref={form} onSubmit={sendEmail} className="space-y-5 pt-4">
          {/* Full Name */}
          <div className="">
            <input
              type="text"
              name="name"
              required
              className=" w-full h-10 p-3 border border-orange-300 text-gray-900 rounded-md placeholder focus:outline-none focus:ring-2 focus:ring-orange-400"
              placeholder="Full Name"
            />
          
          </div>

          {/* Phone */}
          <div className="">
            <input
              type="text"
              name="phone"
              required
              className=" w-full h-10 p-3 border border-orange-300 text-gray-900 rounded-md placeholder focus:outline-none focus:ring-2 focus:ring-orange-400"
              placeholder="Phone Number"
            />
          
          </div>

          {/* Email */}
          <div className="">
            <input
              type="email"
              name="user_email"
              required
              className=" w-full h-10 p-3 border border-orange-300 text-gray-900 rounded-md placeholder focus:outline-none focus:ring-2 focus:ring-orange-400"
              placeholder="Email Address"
            />
           
          </div>

          {/* Message */}
          <div className="">
            <textarea
              name="message"
              required
              rows={3}
              className="peer w-full p-3 border border-orange-300 text-gray-900 rounded-md placeholder focus:outline-none focus:ring-2 focus:ring-orange-400"
              placeholder="Your Message"
            ></textarea>
           
          </div>

          {/* Submit Button */}
          <Button
            type="submit"
            disabled={isSending}
            className="w-full h-12 cursor-pointer bg-orange-500 hover:bg-orange-600 text-white font-semibold rounded-md text-lg"
          >
            {isSending ? "Sending..." : "Send Message"}
          </Button>
        </form>
      </CardContent>
    </Card>
  );
} 

export default ContactUsForm;
