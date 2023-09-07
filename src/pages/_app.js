import "@/styles/globals.css";
import { Sora } from "next/font/google";

const sora = Sora({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-sora",
});

export default function App({ Component, pageProps }) {
  return (
    <main className={`${sora.variable} font-sans`}>
      <Component {...pageProps} />
    </main>
  );
}
