const express = require('./index.js'); 
const app = express();
app.get('/', (req, res) => res.send('Serwer CI/CD działa na bazie forka Express!'));
app.listen(3000, () => console.log('App listening on port 3000'));
