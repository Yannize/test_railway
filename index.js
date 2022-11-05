// create express server with ejs home page
const express = require('express');
const app = express();
const PORT = process.env.PORT ?? 3000;

app.set('view engine', 'ejs');
app.set('views', 'views');

app.get('/', (req, res) => {
    res.render('home', { title: 'Welcome on my test Website ! 🖖' });
});

app.listen(PORT, () => {
    console.log(`Example app listening at http://localhost:${PORT}`);
});
