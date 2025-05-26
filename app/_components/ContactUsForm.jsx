"use client";
import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, User } from "lucide-react";
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
    <Card className="bg-white border-purple-200 border-2 md:p-3 rounded-3xl shadow-xl lg:p-6">
      <CardContent className="space-y-6 pt-2">
        <div className="inline-block w-fit bg-dash-pattern-org px-4 py-1 text-2xl font-semibold text-[var(--primary-orange)] rounded-md">
          Contact us
        </div>

        <form ref={form} onSubmit={sendEmail} className="space-y-4 pt-4">
          <Input
            placeholder="Your Name"
            type="text"
            name="name"
            required
            className="h-12 rounded-xl border border-orange-300 text-gray-900 placeholder:text-gray-400"
            icon={<User className="w-5 h-5 text-gray-400" />}
          />

          <Input
            placeholder="Phone Number"
            type="text"
            name="phone"
            required
            className="h-12 rounded-xl border border-orange-300 text-gray-900 placeholder:text-gray-400"
            icon={<Phone className="w-5 h-5 text-gray-400" />}
          />

          <Input
            placeholder="Email Address"
            type="email"
            name="user_email"
            required
            className="h-12 rounded-xl border border-orange-300 text-gray-900 placeholder:text-gray-400"
            icon={<Mail className="w-5 h-5 text-gray-400" />}
          />

          <Textarea
            placeholder="Your Message"
            name="message"
            required
            className="h-28 rounded-xl border border-orange-300 text-gray-900 placeholder:text-gray-400"
          />

          <Button
            type="submit"
            disabled={isSending}
            className="w-full h-14 cursor-pointer bg-orange-500 hover:bg-orange-600 text-white font-semibold rounded-xl text-lg"
          >
            {isSending ? "Sending..." : "Send Message"}
          </Button>
        </form>
      </CardContent>
    </Card>
  );
}

export default ContactUsForm;
