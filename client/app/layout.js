import { Manrope } from "next/font/google";
import "./globals.css";


const manrope = Manrope({ 
  subsets: ["latin"],
  weight: ['400', '500', '600', '700'],
  variable: '--font-poppins', 
});

export const metadata = {
  title: "Cricket",
  description: "This is the cricket website",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={manrope.className}>{children}</body>
    </html>
  );
}
