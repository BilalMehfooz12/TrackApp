import SideBar from "../sideBar/page";
import type { Metadata } from "next";
// export function RootLayout({ children }: { children: React.ReactNode }) {
//   return <SideBar>{childrens}</SideBar>;
// }
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <SideBar>{children}</SideBar>;
}
