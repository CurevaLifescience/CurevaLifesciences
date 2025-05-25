import {
  BsFillTelephonePlusFill,
  BsPersonCheckFill,
  BsCartPlusFill,
  BsBriefcaseFill,
  BsFillHeartPulseFill,
} from "react-icons/bs";
const servicesData = [
  {
    title: "Telehealth Consultation",
    description:
      "Speak to a certified doctor anytime, anywhere with our virtual health services.",
    icon: <BsFillTelephonePlusFill className="" />,
  },
  {
    title: "Personalized Wellness Plans",
    description:
      "Receive AI-generated, expert-reviewed diet and fitness plans.",
    icon: <BsPersonCheckFill className=" " />,
  },
  {
    title: "E-Pharmacy Integration",
    description:
      "Easily order medicines and track deliveries with real-time updates.",
    icon: <BsCartPlusFill className="" />,
  },
  {
    title: "Corporate Wellness",
    description:
      "Boost employee health with tailored corporate wellness programs.",
    icon: <BsBriefcaseFill className="" />,
  },
  {
    title: "Mental Health Support",
    description:
      "24/7 counseling support via chat, call or video with licensed therapists.",
    icon: <BsFillHeartPulseFill className="" />,
  },
];

export default servicesData;
