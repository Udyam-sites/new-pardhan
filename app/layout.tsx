// import { Cormorant_Garamond } from "next/font/google";
import "./globals.css";
import { Sorts_Mill_Goudy } from "next/font/google";

const goudy = Sorts_Mill_Goudy({
  subsets: ["latin"],
  weight: "400",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${goudy.className} min-h-screen`}
        style={{
          backgroundImage: "url('/paper.webp')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "repeat",
        }}
      >
        {children}
      </body>
    </html>
  );
}