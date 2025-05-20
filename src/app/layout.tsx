import type { Metadata } from "next";
import "./globals.css";
import { MovieProvider } from "@/contexts/movie.context";
import { ThemeProvider } from "@/contexts/theme.context";
import ReactQueryProvider from "@/components/react-query/react-query-provider.component";


export const metadata: Metadata = {
  title: "UPPERSETUP CINEMA APP",
  description: "A simple movie app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" >
      <body>
        <ReactQueryProvider>
          <ThemeProvider>
            <MovieProvider>
              {children}
            </MovieProvider>
          </ThemeProvider>
        </ReactQueryProvider>
      </body>
    </html>
  );
}
