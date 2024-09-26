import styles from "@/styles/Home.module.css";
import FlavorText from "@/utils/flavortext";
import "core-js";
import dynamic from "next/dynamic";
import localFont from "next/font/local";
import Head from "next/head";
import Image from "next/image";
import posthog from 'posthog-js';

posthog.init('phc_5xq5fF7yiUgmZG2emo0WDyjGRaZHXi6e9mgOSJvOgqO',
    {
        api_host: 'https://us.i.posthog.com',
        person_profiles: 'never'
    }
)

const CentralModal = dynamic(() => import("../utils/central_modal"), {
  ssr: false,
});

const inter = localFont({ src: "../styles/Inter-Regular.ttf" });

export default function Home() {
  return (
    <>
      <Head>
        <title>hyperCell</title>
        <meta name="title" content="Open source free online encryption tool" />
        <meta
          name="description"
          content="hyperCell is an open source, free encryption tool that works entirely in your browser, and outputs a shareable HTML file that can be opened in most browsers"
        />
        <meta
          name="keywords"
          content="encryption, encrypt, free, decrypt, simple, files online, open source"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/hyperCell.svg" />
      </Head>
      <main className={`${styles.main} ${inter.className}`}>
        <Image
          src="/hyperCell.svg"
          alt="hyperCell Logo"
          width={300}
          height={300}
        />
        <h1> hyperCell </h1>
        <h4> Encrypt &amp; Decrypt the easy way</h4>
        <br />
        <CentralModal />
        <br />
        <p className={styles.description} style={{ width: "30em" }}>
          hyperCell is an open source, free encryption tool that works entirely
          in your browser, and outputs a shareable HTML file that can be opened
          in most browsers.
        </p>
        <br />
        <FlavorText />
      </main>
    </>
  );
}
