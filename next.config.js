module.exports = {
    trailingSlash: true, // Determina que toda rota termina com uma barra no final
    async redirects() { // Função de criação do redirects
        return [
            {
                source: '/perguntas',
                destination: '/faq',
                permanent: true,
            }
        ]
    }
}