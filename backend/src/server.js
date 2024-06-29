const app = require('./app');
const dotenv = require('dotenv');

const port = 8080;

dotenv.config();

app.listen(port, () => {
    console.log('servidor rodando na porta ' + port);
})