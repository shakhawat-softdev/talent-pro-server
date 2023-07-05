const express = require('express')
const app = express();

const cors = require('cors');
const port = process.env.PORT || 5000;

app.use(cors());

const services = require('./data/service.json');

app.get('/', (req, res) => {
   res.send('Talent Pro is running.....')
});

app.get('/services', (req, res) => {
   res.send(services);
});


app.listen(port, () => {
   console.log(`Talent Pro API is Runnging on port ${port}`);
})