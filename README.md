# CRUD Node com Typeorm e Postgresql

Aplicação feita como base para criar um CRUD utilizando Typeorm.

## Tecnologias Utilizadas
- Node JS
- Postgresql
- Express
- Typeorm
- Typescript

## Como utilizar:

- Você pode estruturar o orm config num arquivo .env como no exemplo abaixo:
```
TYPEORM_CONNECTION = postgres
TYPEORM_HOST = localhost
TYPEORM_USERNAME = postgres
TYPEORM_PASSWORD = 1234
TYPEORM_DATABASE = test_orm
TYPEORM_PORT = 5432
TYPEORM_SYNCHRONIZE = true
TYPEORM_MIGRATIONS = src/database/migrations/*.ts
TYPEORM_MIGRATIONS_DIR = src/database/migrations
TYPEORM_ENTITIES = src/entities/*.ts
TYPEORM_ENTITIES_DIR = src/entities
```
- Após criar o banco de dados executar o comando:
```yarn runn``` para rodar as migrations e ```yarn start``` para iniciar o servidor.

- Testar as seguintes rotas no isomnia ou postman:
1. POST - http://localhost:3000/persons
```
{
	"nome": "Alberto",
	"telefone": "55556666",
	"email": "email@email.com"
}
```
2. GET - http://localhost:3000/persons
```
[
	{
		"id": 1,
		"nome": "Alberto",
		"contact": {
			"id": 1,
			"telefone": "55556666",
			"personId": 1
		},
		"adress": {
			"id": 1,
			"email": "email@email.com",
			"personId": 1
		}
	}
]
```
OBS: No caso da rota GET esse será o retorno da requisição

3. PUT - http://localhost:3000/persons/1
```
{
	"nome": "Alberto",
	"telefone": "55556666",
	"email": "email@email.com"
}
```
4. DELETE - http://localhost:3000/persons/3

OBS: Se o id não existir vai retornar a seguinte mensagem:
```"Pessoa não existe!"```
