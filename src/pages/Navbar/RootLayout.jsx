import { Outlet } from "react-router-dom";
import Header from "./Header";

export default function RootLayout({ children }) {
  return (
    <div className="min-h-screen font-sans">
      <Header />
      <main><Outlet/></main>
    </div>
  );
}
