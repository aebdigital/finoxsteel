import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Referencie a Galéria - Hliníkové brány a konštrukcie | F INOX STEEL Zlaté Moravce",
  description: "Pozrite si naše zrealizované projekty hliníkových brán, schodov, zábradlí a pergol. Kvalitná výroba a montáž.",
};

export default function ReferencieLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
