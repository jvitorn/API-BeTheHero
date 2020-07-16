
# Documentação
Esta é a documentação da Utilização da API BeTheHero.
Para a utilização dessa api é necessario utilizar o `/api` como endpoint da aplicação.

# Autenticação

Essa API Utiliza um tipo de Token que é :
- Autenticação - Utilizado para autenticar a ONG
para a utilização e criação de alguns recursos.

# Endpoints

- Ong´s
- Incident´s

## Login
<details>
  <summary>
    <b>Login</b> - <i>Logar ONG</i>
  </summary>
  <br/>
  
  <b>Rota:</b> `POST /login`
  <br />
  <b>Autenticação:</b> Não
  <br />
  <b>Body:</b>
  
  ```
  {
	"email": "usuario@email.com",
	"senha": "senha"
  }
  ```
  <br />
  <b>Response:</b>

  ```
    {
        "ong": true,
        "msg": "usuario encontrado",
        "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySUQiOiI1ZjBmNTJhN2I2NjcxYzNkMGNkYTM2NWUiLCJ1c2VyTmFtZSI6ImpvYW8gdml0b3IgIiwidXNlck1haWwiOiJqb2FvdW5vQHlvcG1haWwuY29tIiwiaWF0IjoxNTk0ODQxNjI2LCJleHAiOjE1OTQ4NDQ2MjZ9.0gNgelp1ZuPNIp67kBx1CXxTA_K2CBrmtlM7NNmmB84"
    }
  ```
</details>

## Ong -  `/Ongs/:id`

<details>
  <summary>
    <b>Post</b> - <i>Criar ONG</i>
  </summary>
  <br/>
  <b>Rota:</b> `POST /ongs`
  <br/>
  <b>Autenticação:</b> Não
  <br/>
  <b>Body:</b>
  
  ```
  {
	"name":"teste",
	"email":"test@test.com",
	"password":"senha",
	"whatsapp":"numero",
	"city":"cidade",
	"uf":"sigla"
}
  ```
  <br/>
  <b>Response:</b>

  ```
    {
        "ong": true,
        "msg": "usuario encontrado",
        "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySUQiOiI1ZjBmNTJhN2I2NjcxYzNkMGNkYTM2NWUiLCJ1c2VyTmFtZSI6ImpvYW8gdml0b3IgIiwidXNlck1haWwiOiJqb2FvdW5vQHlvcG1haWwuY29tIiwiaWF0IjoxNTk0ODQxNjI2LCJleHAiOjE1OTQ4NDQ2MjZ9.0gNgelp1ZuPNIp67kBx1CXxTA_K2CBrmtlM7NNmmB84"
    }
  ```
</details>

<details>
  <summary>
    <b>Get</b> - <i>Listar ONG</i>
  </summary>
  <br/>
  <b>Rota:</b> `GET /ongs`
  <br />
  <b>Autenticação:</b> Não
  <b>Body:</b>
  
  ```
  {
	"name":"teste",
	"email":"test@test.com",
	"password":"senha",
	"whatsapp":"numero",
	"city":"cidade",
	"uf":"sigla"
}
  ```
  <br/>
  <b>Response:</b>

  ```
  {
    "results": [
      {
        "_id": "5f0f52a7b6671c3d0cda365e",
        "name": "joao vitor ",
        "email": "joaouno@yopmail.com",
        "whatsapp": 123456784,
        "city": "Itanhaém",
        "__v": 0
      }
    ],
    "count": 1
  }
  ```
</details>


<details>
  <summary>
    <b>Put</b> - <i>Atualizar ONG</i>
  </summary>
  <br/>
  <b>Rota:</b> `PUT /ongs/:id`
  <br />
  <b>Autenticação:</b> Sim
  <br />
  <b>Response:</b>

  ```
  {
    "msg": "Dados Atualizados Com Sucesso",
    "update": {
      "n": 1,
      "nModified": 1,
      "ok": 1
    }
  }
  ```
</details>

<details>
  <summary>
    <b>Delete</b> - <i>Deletar ONG</i>
  </summary>
  <br/>
  <b>Rota:</b> `DELETE /ongs/:id`
  <br/>
  <b>Autenticação:</b> Sim
  <br/>
  <b>Body:</b> No
  <br/>
  <b>Response:</b>

  ```
    {
      "msg": "usuario deletado com sucesso" 
    }
  ```
</details>

## Incident

