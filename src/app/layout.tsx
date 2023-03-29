import { Fira_Code } from "next/font/google";
import "./globals.css";
import Link from "next/link";
const firaCode = Fira_Code({ subsets: ["latin"] });



export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${firaCode.className} bg-slate-700 text-white py-6 px-8`}
      >
        <header>
          <div className="flex justify-between mb-6">
            <div>logo</div>
            <div>
              <nav className="flex space-x-8 tracking-widest ">
                <Link href="/">#Home</Link>
                <Link href="/works">#Works</Link>
                <Link href="/aboutMe">#About me</Link>
                <Link href="/contacts">#Contacts</Link>
              </nav>
            </div>
          </div>
        </header>
        {children}
        <footer>
          <p className="text-center mt-6">© Copyright 2022. Made by Elias</p>
        </footer>
      </body>
    </html>
  );
}
