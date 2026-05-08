import "@/app/ui/global.css";
import { dotGothic16 } from "@/app/ui/fonts";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${dotGothic16.className} antialiased`}>{children}</body>
    </html>
  );
}
