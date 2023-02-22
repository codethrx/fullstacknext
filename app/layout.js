import "./globals.css";
import Session from "./components/Session";
import { getServerSession } from "next-auth/next";
import { authOptions } from "@/pages/api/auth/[...nextauth]";
import Header from "./components/Header";
export default async function RootLayout({ children }) {
  const session = await getServerSession(authOptions);
  return (
    <html lang="en">
      <head />
      <body>
        <Session session={session}>
          <Header />
          {children}
        </Session>
      </body>
    </html>
  );
}
