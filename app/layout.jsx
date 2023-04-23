import "./globals.css";
import { Montserrat } from "next/font/google";
import Header from "./components/Header";

export const metadata = {
  title: "Next 13 Sandbox",
  description: "NextJS Playground App",
};

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
});

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${montserrat.variable} font-montserrat mx-[6%]`}>
        <Header />
        <main>{children}</main>
      </body>
    </html>
  );
}
