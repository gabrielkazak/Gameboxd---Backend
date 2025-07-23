# 🎮 Projeto Node - Gameboxd

Este projeto tem como ideia central servir como servidor backend para um site de catálogo de jogos digitais. Sua função principal é cuidar das etapas de login e registro, armazenar os jogos selecionados pelo usuário, e devolver essas informações pra api principal servir os jogos corretos.

## 🛠 Tecnologias Utilizadas

- [Node]
- [Express]
- [Prisma]
- [Neon.tech]
- [Docker]

## 🎯 Objetivo

Demonstrar como construir um servidor NodeJS Express simples e funcional, que entregue dados dinamicamente a aplicação frontend de mesmo nome.

## 📄 Descrição do Projeto

O sistema é composto por pastas com responsabilidades específicas:

- Controllers;
- Models;
- Middlewares;
- Prisma;
- Routes.

## ⚙️ Estrutura dos dados

- `userModel.js`: Tem as funções de login, registro e deletar usuário;
- `gameModel.js`: Organiza os jogos do usuário por id e nome;
- `wishlistModel.js`: Organiza os jogos que o usuário deseja jogar;
- `userController.js`, `gamesController.js` e `wishController.js`: Tratam e Repassam as informações que a api recebe do frontend.
- `AuthMiddleware.js`: Verificação do token de acesso;
- `schema.prisma`: Faz a conexão com o banco PostgreSQL Neon.tech e serve de ORM.
- `userRoutes.js`,`gameRoutes.js` e `wishRoutes.js`: Atuam como as rotas de envio de dados da aplicação.

## 📁 Organização de Pastas (Estrutura Geral)

- 📁 backend/
- ├── 📁 controller/          → Lógica de controle (userController.js, etc)
- ├── 📁 model/               → Interações com o banco de dados
- ├── 📁 routes/              → Definição das rotas da API
- ├── 📁 middleware/          → Middleware de autenticação
- └── 📁 prisma/
- - -└── schema.prisma       → ORM e conexão com banco PostgreSQL


## 🚀 Como Executar

1. Clone o repositório:
   ```bash
   git clone https://github.com/gabrielkazak/Gameboxd---Backend
   cd backend
   npm install
   crie um .env na raiz do projeto e adicione as URL alvo
   npm run start

## 💻 Repositório do Frontend

https://github.com/gabrielkazak/Gameboxd---Frontend

## 👤 Autor

    Gabriel – Estudante de Informática
    Projeto desenvolvido como prática de utilização de NodeJS
