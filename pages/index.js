import React from "react";
import Link from "next/link";
// import Link from '../src/components/Link';

function Title({ children, as }) {

    const Tag = as;

    return (
        // Permite adicionar mais de uma tag sem a necessidade de uma div pai
        <React.Fragment> 
            <Tag>
                {children}
            </Tag>
            <style jsx>{` 
                ${as} {
                    color: red;
                    font-family: sans-serif;
                }
            `}</style>
        </React.Fragment>
    );

}

export default function HomePage() {

    return (
        <div>
            <Title as="p">Alura Cases - Home Page</Title>
            {/* <h1>Alura Cases - Home Page</h1> */}
            <Link href="/faq" passHref>Ir para o FAQ</Link>
            {/* <Link href="/faq">
                Ir para faq
            </Link> */}
        </div>
    );

}
