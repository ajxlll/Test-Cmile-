import Link from "next/link";
import Layout from "../components/layout";

export default function Contact() {
    return(
        <Layout>
            <h1 className="text-4xl"> Contact</h1>
            <Link href="mailto:CryptoMiler@gmail.com"> cryptomiler@gmail </Link>
            <p>
                <Link href="https://t.me/cryptomiler"> Telegram </Link>
            </p>
        </Layout>
    )
}