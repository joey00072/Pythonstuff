import '@/css/tailwind.css'

import { MDXProvider } from '@mdx-js/react'
import { ThemeProvider } from 'next-themes'
import { DefaultSeo } from 'next-seo'
import Head from 'next/head'

import { SEO } from '@/components/SEO'
import LayoutWrapper from '@/components/LayoutWrapper'
import MDXComponents from '@/components/MDXComponents'

import { useEffect } from 'react'
// import Script from 'next/script'
import { useRouter } from 'next/router'
import * as gtag from '../lib/gtag'

export default function App({ Component, pageProps }) {
  return (
    <>
      <ThemeProvider attribute="class">
        <MDXProvider components={MDXComponents}>
          <Head>
            <meta content="width=device-width, initial-scale=1" name="viewport" />
            <script
              strategy="afterInteractive"
              src={`https://www.googletagmanager.com/gtag/js?id=${gtag.GA_TRACKING_ID}`}
            />
            <script
              id="gtag-init"
              strategy="afterInteractive"
              dangerouslySetInnerHTML={{
                __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${gtag.GA_TRACKING_ID}', {
              page_path: window.location.pathname,
            });
          `,
              }}
            />
          </Head>
          <DefaultSeo {...SEO} />
          <LayoutWrapper>
            <Component {...pageProps} />
          </LayoutWrapper>
        </MDXProvider>
      </ThemeProvider>
    </>
  )
}
