const express = require ("express");
const app = express();
const PORT = process.env.PORT || 8080;
const fs = require('fs');
const { createConnection } = require("net");
const notes = fs.readFileSync('db/db.json');
const indexHTML = fs.readFileSync('public/index.html', 'utf8');
const notesHTML = fs.readFileSync('public/notes.html', 'utf8');

 

const router = 

app.use(express.static("public"));

app.use(express.urlencoded({ extended: true}));
app.use(express.json());


app.get('/', function (req, res) {
    res.send(indexHTML);
    
    res.end();
})

app.get('/notes', function (req, res) {
    res.send(notesHTML);
    res.end();
})

app.get('/api/notes', function (req, res) {
    
        console.log('requested api/notes')
      res.write (notes);
      res.end();
})

app.post('/api/notes', function (req, res) {
    console.log(res)
    console.log('posted to api/notes')
  res.end();
})

const server = app.listen(PORT, (error) => {
    if (error) return console.log(`Error: ${error}`);
    console.log("Connected to PORT: " + PORT);

});

router
//return notes html


