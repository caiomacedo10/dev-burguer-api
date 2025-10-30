# 🍔 DevBurger API

![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=node.js&logoColor=white)
![Express](https://img.shields.io/badge/Express-000000?style=for-the-badge&logo=express&logoColor=white)
![PostgreSQL](https://img.shields.io/badge/PostgreSQL-4169E1?style=for-the-badge&logo=postgresql&logoColor=white)
![MongoDB](https://img.shields.io/badge/MongoDB-4ea94b?style=for-the-badge&logo=mongodb&logoColor=white)
![JWT](https://img.shields.io/badge/JWT-black?style=for-the-badge&logo=jsonwebtokens)
![Docker](https://img.shields.io/badge/Docker-2496ED?style=for-the-badge&logo=docker&logoColor=white)
![Yup](https://img.shields.io/badge/Yup-00C58E?style=for-the-badge)
![Biome](https://img.shields.io/badge/Biome-333?style=for-the-badge)


---

## 📖 Sobre o projeto

O **DevBurger API** é o back-end de um sistema completo de pedidos e gestão de produtos desenvolvido durante o curso **DevClub**.  
Ele foi criado com **Node.js + Express**, integrando **PostgreSQL** (via Sequelize) e **MongoDB** (para logs e dados complementares), além de autenticação **JWT**, **upload de imagens com Multer**, e **validação de dados com Yup**.

Essa API serve como base para o front-end do **DevBurger**, uma aplicação de hamburgueria moderna que gerencia usuários, produtos, categorias e pedidos de forma eficiente e escalável.

---

## 🚀 Tecnologias utilizadas

- **Node.js** — ambiente de execução JavaScript no servidor  
- **Express** — framework minimalista para criação das rotas e middlewares  
- **Sequelize** — ORM para modelagem e conexão com o banco **PostgreSQL**  
- **PostgreSQL** — banco de dados relacional principal  
- **MongoDB** — banco NoSQL para armazenamento complementar  
- **JWT (Json Web Token)** — autenticação e controle de sessões  
- **Yup** — validação de dados  
- **Multer** — upload e gerenciamento de arquivos de imagem  
- **Docker** — containerização do ambiente de desenvolvimento  
- **Biome** — formatação e linting do código  
- **UUID / Bcrypt** — geração de IDs únicos e hash de senhas  

---

## ⚙️ Funcionalidades

✅ **Usuários**
- Cadastro e autenticação de usuários com criptografia de senha  
- Login com geração de token JWT  
- Proteção de rotas autenticadas  

✅ **Categorias**
- Criação, listagem, atualização e exclusão de categorias  
- Upload de imagens de categorias  

✅ **Produtos**
- CRUD completo (Create, Read, Update, Delete)  
- Associação entre produtos e categorias  
- Upload e exibição de imagens  

✅ **Pedidos**
- Criação de pedidos com múltiplos produtos  
- Relacionamento com usuários  
- Cálculo automático do valor total  

✅ **Outros recursos**
- Tratamento de erros padronizado  
- Validação completa de inputs  
- Conexão com múltiplos bancos (PostgreSQL + MongoDB)  
- Logs e monitoramento de erros  
- Scripts organizados no `package.json`  

---

## 📁 Estrutura do projeto

devburger-api/
├── src/
│ ├── app/
│ │ ├── controllers/ # Controladores das rotas
│ │ ├── models/ # Models Sequelize
│ │ ├── middlewares/ # Middlewares (auth, etc)
│ ├── config/ # Configurações (DB, Multer, JWT)
│ ├── database/ # Conexão e migrations
│ ├── routes.js # Definição das rotas
│ ├── app.js # Configuração principal do Express
│ └── server.js # Ponto de entrada da aplicação
├── uploads/ # Armazenamento local de imagens
├── .env # Variáveis de ambiente (ignorado no Git)
├── .env.example # Modelo de variáveis
├── .gitignore
├── package.json
└── README.md


---

## 🔑 Variáveis de ambiente

Crie um arquivo `.env` na raiz do projeto e adicione as seguintes variáveis:

```env
# CONFIGURAÇÃO DO SERVIDOR
PORT=3001

# BANCO DE DADOS POSTGRES
DB_HOST=localhost
DB_PORT=5432
DB_USER=admin
DB_PASS=senha_aqui
DB_NAME=dev-burguer-db

# AUTENTICAÇÃO JWT
JWT_SECRET=sua_chave_segura_aqui
JWT_EXPIRES_IN=7d

# MONGODB
MONGO_URI=mongodb://localhost:27017/devburguer


🧠 Como rodar o projeto localmente
1️⃣ Clonar o repositório
bash
Copiar código
git clone https://github.com/caiomacedo10/devburger-api.git
cd devburger-api
2️⃣ Instalar as dependências
bash
Copiar código
pnpm install
3️⃣ Rodar o servidor
bash
Copiar código
pnpm dev
4️⃣ Acessar no navegador
arduino
Copiar código
http://localhost:3001


🧑‍💻 Autor
Caio de Oliveira Macedo
💼 Desenvolvedor Full Stack em formação — apaixonado por tecnologia, APIs e soluções escaláveis.

## 📫 Contato

📎 [**LinkedIn**](https://www.linkedin.com/in/caiomacedo-dev/)  
💻 [**Portfólio**](https://caiomacedo10.github.io/Portfolio-Caio-Macedo/)  
🐙 [**GitHub**](https://github.com/caiomacedo10)

🧠 Agradecimentos
Projeto desenvolvido com base no curso DevClub, ministrado por Rodolfo Mori, com foco em desenvolvimento Full Stack (Node.js +
React).

💬 “A melhor forma de aprender é construindo algo do zero. O DevBurger é o reflexo de cada linha de código aprendida,
testada e aprimorada.”










