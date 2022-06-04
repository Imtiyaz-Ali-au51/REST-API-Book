const express = require('express');
const bodyParser = require('body-parser');

const path = require('path');

const app = express();

let books = [];



app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname + '/book.html'));
});

app.post('/book', (req, res) => {
    
    const book = req.body;

    console.log(book);
    books.push(book);

    res.send(book)
})

app.get('/books', (req, res) => {
    res.json(books);
});


PORT = process.env.PORT || 8080;
app.listen(PORT)