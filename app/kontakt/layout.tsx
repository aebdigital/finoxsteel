import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Kontakt - F INOX STEEL | Zlaté Moravce, Sládkovičova 61",
  description: "Kontaktujte nás pre bezplatnú konzultáciu. F INOX STEEL, Sládkovičova 61, Zlaté Moravce. Tel: +421 918 843 553, Email: info@finoxsteel.com",
};

export default function KontaktLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
