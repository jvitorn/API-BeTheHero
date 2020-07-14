const app = require('./config/customExpress')
const port = 3331
app.listen(port, () => console.log('Servidor Iniciado e Rodando no link http://localhost:' + port))