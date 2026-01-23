import Link from "next/link";
import { useEffect, useState } from "react";

export async function getStaticProps() {

    const FAQ_API_URL = 'https://gist.githubusercontent.com/omariosouto/0ceab54bdd8182cbd1a4549d32945c1a/raw/e0b5ce160567e6443d3ef13e651ad41b3e5cc20e/alura-cases-faq.json';
    const faq = await fetch(FAQ_API_URL)
        .then((respostaDoServidor) => {
            return respostaDoServidor.json();
        })
        .then((resposta) => {
            console.log(resposta);
            return resposta;
        });

    return {
        props: {
            exemploProps: 'Exemplo de props🚀',
            faq,
        }
    }
}

export default function FAQPage({ faq }) {

    console.log(faq);

    // console.log(props.exemploProps);
    // const [faq, setFaq] = useState([]);
    // useEffect(() => {
    // }, []);

    return (
        <div>
            <h1>Alura Cases - Página de Perguntas FAQ</h1>
            <Link href="/" passHref>Ir para o Home</Link>
            <ul>
                {faq.map(({ answer, question }) => (
                    <li key={question}>
                        <article>
                            <h2>{question}</h2>
                            <p>{answer}</p>
                        </article>
                    </li>
                ))}
            </ul>
        </div>
    );

}