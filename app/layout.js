import { Geist, Geist_Mono, Signika } from "next/font/google";
import "./globals.css";
import Header from "./_components/Header";
import Footer from "./_components/Footer";
import "@/app/_components/style.css";
import { Toaster } from "react-hot-toast";
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});
const signika = Signika({
  variable: "--font-signika",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Cureva Lifesciences",
  description:
    "At Cureva Lifesciences, we deliver next-generation healthcare solutions and personalized wellness programs designed to elevate your well-being. Our innovative wellness products and medical advancements are designed to promote a healthier tomorrow. With a strong commitment to research, care, and technology, we aim to be your trusted partner in lifelong wellness.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
        <link rel="icon" href="/logo-transparent.png" />
        <link rel="apple-touch-icon" sizes="180x180" href="/logo-transparent.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/logo-transparent.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/logo-transparent.png" />
        <meta
          name="keywords"
          content="At Cureva Lifesciences, we deliver next-generation healthcare solutions and personalized wellness programs designed to elevate your well-being. Our innovative wellness products and medical advancements are designed to promote a healthier tomorrow. With a strong commitment to research, care, and technology, we aim to be your trusted partner in lifelong wellness"
        />
      </head>
      <body
        className={`${geistSans.variable} ${signika.variable} ${geistMono.variable} antialiased`}
      >
        <Header />
        {children}

        <Footer />
        <Toaster position="bottom-center" />
      </body>
    </html>
  );
}
