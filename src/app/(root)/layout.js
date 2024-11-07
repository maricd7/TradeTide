import Sidebar from "../components/Sidebar/Sidebar";

export default function RootLayout({ children }) {
  return (
    <>
      <Sidebar />
      {children}
    </>
  );
}
