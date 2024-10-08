import localFont from "next/font/local";
import "./globals.css";
import { Inter, Plus_Jakarta_Sans,Montserrat } from "next/font/google";
import Header from "@/components/Header";
import { ClerkProvider } from "@clerk/nextjs";
import Footer from "@/components/Footer";
import CreateEventDrawer from "@/components/create-event";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

const inter = Montserrat({ subsets: ["latin"] });

export const metadata = {
  title: "talkdesk",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={inter.className}>
          <Header />
          {/* header */}
          <main className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
            {children}
          </main>
          {/* footer */}
          {/* <footer className="bg-blue-100 py-12">
            <div className="container mx-auto px-4 text-center text-gray-600">
              <p>Made with 💗 by Soumojit Banerjee</p>
            </div>
          </footer> */}
          {/* greyish line above footer */}
          <div className="h-1 bg-gray-300" />{" "}
          {/* Adjust height and color as needed */}
          <Footer />
          <CreateEventDrawer />
        </body>
      </html>
    </ClerkProvider>
  );
}
