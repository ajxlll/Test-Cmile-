import Head from "next/head";

export default function Header() {
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <link rel="icon" href="/favicon.ico" />
        <meta name="description" content="Crypto Miller Website" />
        <link rel="canonical" href=""></link>
        <meta property="og:title" content="Crypto Miller" />
        <meta property="og:site_name" content="Crypto Miller"></meta>
        <meta property="og:url" content=""></meta>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta name="twitter:title" content="Crypto Miller"></meta>
        <meta name="twitter:url" content=""></meta>
      </Head>
    </>
  );
}