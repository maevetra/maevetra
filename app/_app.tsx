import "../styles/globals.css";
import type { AppProps } from "next/app";
import { ThemeProvider } from "next-themes";
import { AnimatePresence } from "framer-motion";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <AnimatePresence initial={false} mode="popLayout">
        <Component {...pageProps} />
    </AnimatePresence>
  );
}

export default MyApp;