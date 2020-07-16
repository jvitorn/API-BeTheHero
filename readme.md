
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

- Post
- Get
- Put
- Delete

## Incident

