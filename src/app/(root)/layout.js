import localFont from "next/font/local";
import Sidebar from "../components/Sidebar/Sidebar";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Sidebar />
        {children}
      </body>
    </html>
  );
}
