const express = require('express');
const app = express();
app.get('/', (req, res) => res.send('Serwer CI/CD działa!'));
app.listen(3000, () => console.log('App listening on port 3000'));
