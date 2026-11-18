# API Express - Livros e Autores 📚

API REST desenvolvida com **Node.js** e **Express** para gerenciamento de livros e autores, com persistência de dados no **MongoDB** (via Mongoose).

## 🚀 Tecnologias

- [Node.js](https://nodejs.org/) — ambiente de execução JavaScript
- [Express](https://expressjs.com/) — framework web (v5)
- [Mongoose](https://mongoosejs.com/) — ODM para MongoDB
- [dotenv](https://www.npmjs.com/package/dotenv) — gerenciamento de variáveis de ambiente
- [Nodemon](https://nodemon.io/) — auto-reload durante o desenvolvimento
- ES Modules (`"type": "module"`)

## 📁 Estrutura do projeto

```
api-express/
├── server.js              # Entry point: sobe o servidor na porta 3000
└── src/
    ├── app.js             # Configuração do Express e das rotas
    ├── config/
    │   └── dbConnect.js   # Conexão com o MongoDB
    ├── controller/
    │   ├── livroController.js   # Lógica de negócio dos livros
    │   └── autorController.js   # Lógica de negócio dos autores
    ├── models/
    │   ├── Livro.js       # Schema do livro (com autor embutido)
    │   └── Autor.js       # Schema do autor
    └── routes/
        ├── index.js       # Registro das rotas na aplicação
        ├── livrosRoutes.js
        └── autoresRoutes.js
```

## ⚙️ Como executar

1. Clone o repositório:

```bash
git clone https://github.com/oalvesss/api-express-NodeJS.git
cd api-express-NodeJS
```

2. Instale as dependências:

```bash
npm install
```

3. Crie um arquivo `.env` na raiz do projeto com a string de conexão do MongoDB:

```env
DB_CONNECTION_STRING="mongodb+srv://<usuario>:<senha>@<cluster>/<database>?retryWrites=true&w=majority"
```

4. Inicie o servidor:

```bash
# modo desenvolvimento (com nodemon)
npm run dev
```

A API estará disponível em `http://localhost:3000`.

## 🔗 Endpoints

### Livros — `/livros`

| Método | Rota            | Descrição                    |
|--------|-----------------|------------------------------|
| GET    | `/livros`       | Lista todos os livros        |
| GET    | `/livros/:id`   | Busca um livro por ID        |
| POST   | `/livros`       | Cadastra um novo livro       |
| PUT    | `/livros/:id`   | Atualiza um livro por ID     |
| DELETE | `/livros/:id`   | Remove um livro por ID       |

### Autores — `/autores`

| Método | Rota             | Descrição                    |
|--------|------------------|------------------------------|
| GET    | `/autores`       | Lista todos os autores       |
| GET    | `/autores/:id`   | Busca um autor por ID        |
| POST   | `/autores`       | Cadastra um novo autor       |
| PUT    | `/autores/:id`   | Atualiza um autor por ID     |
| DELETE | `/autores/:id`   | Remove um autor por ID       |

### Exemplo de payload

```json
POST /livros
{
  "titulo": "Clean Code",
  "editora": "Prentice Hall",
  "preco": 150,
  "paginas": 464,
  "autor": {
    "nome": "Robert C. Martin",
    "nacionalidade": "EUA"
  }
}
```

## 📄 Licença

Este projeto está sob a licença [ISC](https://opensource.org/licenses/ISC).
