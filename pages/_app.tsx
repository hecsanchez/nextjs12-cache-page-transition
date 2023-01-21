import type { AppProps } from 'next/app'
import { AnimatePresence } from 'framer-motion'
import {Header} from "@/components";

export default function App({ Component, pageProps }: AppProps) {
  return (
      <>
        <Header/>
        <AnimatePresence
            initial={false}
            onExitComplete={() => window.scrollTo(0, 0)}
        >
          <Component {...pageProps} />
        </AnimatePresence>
      </>
  )
}
