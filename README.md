# DevBurger API

![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=node.js&logoColor=white)
![Express](https://img.shields.io/badge/Express-000000?style=for-the-badge&logo=express&logoColor=white)
![PostgreSQL](https://img.shields.io/badge/PostgreSQL-4169E1?style=for-the-badge&logo=postgresql&logoColor=white)
![MongoDB](https://img.shields.io/badge/MongoDB-4ea94b?style=for-the-badge&logo=mongodb&logoColor=white)
![JWT](https://img.shields.io/badge/JWT-black?style=for-the-badge&logo=jsonwebtokens)
![Docker](https://img.shields.io/badge/Docker-2496ED?style=for-the-badge&logo=docker&logoColor=white)
![Yup](https://img.shields.io/badge/Yup-00C58E?style=for-the-badge)
![Biome](https://img.shields.io/badge/Biome-333?style=for-the-badge)


---

## Sobre o projeto

O **DevBurger API** é o back-end de um sistema completo de pedidos e gestão de produtos desenvolvido durante o curso **DevClub**.  
Ele foi criado com **Node.js + Express**, integrando **PostgreSQL** (via Sequelize) e **MongoDB** (para logs e dados complementares), além de autenticação **JWT**, **upload de imagens com Multer**, e **validação de dados com Yup**.

Essa API serve como base para o front-end do **DevBurger**, uma aplicação de hamburgueria moderna que gerencia usuários, produtos, categorias e pedidos de forma eficiente e escalável.

---

##  Tecnologias utilizadas

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

##  Funcionalidades

 **Usuários**
- Cadastro e autenticação de usuários com criptografia de senha  
- Login com geração de token JWT  
- Proteção de rotas autenticadas  

 **Categorias**
- Criação, listagem, atualização e exclusão de categorias  
- Upload de imagens de categorias  

 **Produtos**
- CRUD completo (Create, Read, Update, Delete)  
- Associação entre produtos e categorias  
- Upload e exibição de imagens  

 **Pedidos**
- Criação de pedidos com múltiplos produtos  
- Relacionamento com usuários  
- Cálculo automático do valor total  

 **Outros recursos**
- Tratamento de erros padronizado  
- Validação completa de inputs  
- Conexão com múltiplos bancos (PostgreSQL + MongoDB)  
- Logs e monitoramento de erros  
- Scripts organizados no `package.json`  

---












