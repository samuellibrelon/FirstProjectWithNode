# FirstProjectWithNode

Este é um projeto básico de API RESTful desenvolvido com Node.js, Express e MongoDB. Ele permite a criação, leitura, atualização e exclusão de usuários, com integração com banco de dados MongoDB usando o Mongoose.

## Funcionalidades

- **GET /users**: Retorna todos os usuários cadastrados no banco de dados.
- **GET /users/:id**: Retorna um usuário específico, identificando-o pelo seu ID.
- **POST /users**: Cria um novo usuário.
- **PATCH /users/:id**: Atualiza os dados de um usuário existente.
- **DELETE /users/:id**: Exclui um usuário do banco de dados.
- **GET /views/users**: Renderiza uma página EJS mostrando os usuários cadastrados.

## Pré-requisitos

Antes de rodar o projeto, você precisa ter os seguintes softwares instalados:

- [Node.js](https://nodejs.org) (recomendado a versão 14 ou superior)
- [MongoDB](https://www.mongodb.com) (ou uma conta no MongoDB Atlas)

## Como rodar o projeto

### 1. Clone o repositório

```bash
git clone https://github.com/samuellibrelon/FirstProjectWithNode.git
cd FirstProjectWithNode
```
## 2. Instale as dependências

Execute o seguinte comando para instalar as dependências do projeto:

```bash
npm install
```
## 3. Configure as variáveis de ambiente

Para que a aplicação se conecte corretamente ao MongoDB, você precisa configurar suas credenciais no arquivo `.env` na raiz do projeto.

Crie o arquivo `.env` com o seguinte conteúdo:

```bash
MONGODB_USERNAME=seu-usuario
MONGODB_PASSWORD=sua-senha
```

## 4. Execute o servidor

Após configurar o arquivo .env, você pode iniciar o servidor localmente.

Execute o seguinte comando para iniciar o servidor:

```bash
npm run dev
```
Isso iniciará o servidor na porta 8080.

## Endpoints

A aplicação oferece os seguintes endpoints para interagir com os dados dos usuários:

### 1. **GET /users**
Recupera todos os usuários.

**Exemplo de resposta:**
```json
[
  {
    "_id": "605c72ef153207001f040f1",
    "name": "John Doe",
    "email": "johndoe@doe.com"
  },
  {
    "_id": "605c72ef153207001f040f2",
    "name": "Jane Doe",
    "email": "jane@doe.com"
  }
]
```

## 2. GET /users/
Recupera um usuário pelo id especificado.

**Exemplo de resposta:**
```json
{
  "_id": "605c72ef153207001f040f1",
  "name": "John Doe",
  "email": "johndoe@doe.com"
}
```

## 3. POST /users
Cria um novo usuário. Envie os dados no corpo da requisição.

**Exemplo de requisição:**
```json
{
  "name": "New User",
  "email": "newuser@example.com"
}
```
**Exemplo de resposta:**
```json
{
  "_id": "605c72ef153207001f040f3",
  "name": "New User",
  "email": "newuser@example.com"
}
```
## 4. PATCH /users/
Atualiza os dados de um usuário existente pelo id especificado. Envie os dados no corpo da requisição.

**Exemplo de requisição:**
```json
{
  "email": "updateduser@example.com"
}
```
**Exemplo de resposta:**
```json
{
  "_id": "605c72ef153207001f040f1",
  "name": "John Doe",
  "email": "updateduser@example.com"
}
```
## 5. DELETE /users/
Deleta um usuário pelo id especificado.

**Exemplo de resposta:**
```json
{
  "_id": "605c72ef153207001f040f1",
  "name": "John Doe",
  "email": "johndoe@doe.com"
}
```
Esses endpoints permitem a criação, leitura, atualização e exclusão de usuários no banco de dados. Eles podem ser acessados via ferramentas como o Postman ou diretamente pela aplicação.

## Tecnologias Utilizadas

Este projeto foi desenvolvido utilizando as seguintes tecnologias:

- **Node.js**: Plataforma de runtime para construção do servidor.
- **Express**: Framework minimalista para criação da API.
- **MongoDB**: Banco de dados NoSQL utilizado para armazenar os dados dos usuários.
- **Mongoose**: ODM (Object Data Modeling) para MongoDB, facilitando a interação entre a aplicação e o banco de dados.
- **EJS**: Motor de template utilizado para renderizar páginas HTML de forma dinâmica.

## Contribuindo

Sinta-se à vontade para contribuir com melhorias ou novos recursos. Para isso, siga os passos abaixo:

1.  Faça um fork deste repositório.
2.  Crie uma branch para sua modificação (`git checkout -b feature/nome-da-feature`).
3.  Commit suas alterações (`git commit -m 'Adicionando nova funcionalidade'`).
4.  Envie para o repositório remoto (`git push origin feature/nome-da-feature`).
5.  Abra um Pull Request para a branch `main`.

## Licença

Este projeto está licenciado sob a Licença MIT - consulte o arquivo [LICENSE](LICENSE) para mais detalhes.
