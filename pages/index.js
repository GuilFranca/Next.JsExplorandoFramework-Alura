import Link from "next/link";
// import Link from '../src/components/Link';

export default function HomePage() {

    return (
        <div>
            <h1>Alura Cases - Home Page</h1>
            <Link href="/faq" passHref>Ir para o FAQ</Link>
            {/* <Link href="/faq">
                Ir para faq
            </Link> */}
        </div>
    );

}
