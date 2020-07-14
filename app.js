const app = require('./server')
const port = 3331

app.listen(port, () => console.log('Servidor Iniciado e Rodando no link http://localhost:' + port))
