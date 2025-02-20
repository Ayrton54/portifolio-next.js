# Portfólio Next.js

Este é um projeto de portfólio desenvolvido com Next.js. Ele inclui um formulário de contato que envia emails usando EmailJS.

## Tecnologias Utilizadas

- [Next.js](https://nextjs.org/)
- [React](https://reactjs.org/)
- [EmailJS](https://www.emailjs.com/)
- [Vercel](https://vercel.com/) para deploy

## Configuração do Projeto

### Pré-requisitos

- Node.js instalado
- Conta no [EmailJS](https://www.emailjs.com/)
- Conta no [Vercel](https://vercel.com/)

### Instalação

1. Clone o repositório:

```sh
git clone https://github.com/Ayrton54/portifolio-next.js.git
cd portifolio

2. Instale as dependências:
npm install
ou
yarn install

3. Crie um arquivo .env na raiz do projeto e adicione suas variáveis de ambiente:
EMAIL_USER=seu-email@gmail.com
EMAIL_PASS=sua-senha
SENDGRID_API_KEY=sua-chave-de-api
4. execute:
npm run dev
ou
yarn dev
