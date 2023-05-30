import { type AppType } from "next/dist/shared/lib/utils";

import "~/styles/globals.css";
import { Sofia_Sans } from "next/font/google";

const sofia = Sofia_Sans({
  subsets: ["latin"],
  variable: "--font-sofia",
});

const MyApp: AppType = ({ Component, pageProps }) => {
  return (
    <main className={`${sofia.variable}`}>
      <Component {...pageProps} />
    </main>
  );
};

export default MyApp;
