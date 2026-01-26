import Link from "next/link";

export async function getServerSideProps() {
// Reccarrega toda vez que a página é renderizada

// export async function getStaticProps() {
    // Recarrega somente no build quando utilizamos o comando yarn export, mas recarrega toda vez que a página rederiza quando estamos no yarn dev

    console.log('Função de fetch carregada🚀');

    const FAQ_API_URL = 'https://gist.githubusercontent.com/omariosouto/0ceab54bdd8182cbd1a4549d32945c1a/raw/e0b5ce160567e6443d3ef13e651ad41b3e5cc20e/alura-cases-faq.json';
    const faq = await fetch(FAQ_API_URL)
        .then((respostaDoServidor) => {
            return respostaDoServidor.json();
        })
        .then((resposta) => {
            // console.log(resposta);
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