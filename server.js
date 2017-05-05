const express = require('express');
const path = require('path');
const app = express();
const routes = require('./server/routes/routes.js');
const PORT = process.env.PORT || 8080;

app.use(express.static('public'));
app.use(routes);

app.use((req, res) => {
    res.status(400).status(500).send('Not Found');
});

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname + 'public/index.html'));
});

app.listen(PORT, () => {
    console.log("Listening on port " + PORT);
})