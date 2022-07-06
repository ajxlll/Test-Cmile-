import Head from "next/head";

export default function Header() {
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <link rel="icon" href="/favicon.ico" />
        <meta name="description" content="Crypto Miler Website" />
        <link rel="canonical" href=""></link>
        <meta property="og:title" content="Crypto Miler" />
        <meta property="og:site_name" content="Crypto Miler"></meta>
        <meta property="og:url" content=""></meta>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta name="twitter:title" content="Crypto Miler"></meta>
        <meta name="twitter:url" content=""></meta>
      </Head>
    </>
  );
}