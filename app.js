const express = require ("express");
const app = express();
const PORT = process.env.PORT;
const fs = require('fs');
const { createConnection } = require("net");
const notes = fs.readFileSync('db/db.json');
const indexHTML = fs.readFileSync('public/index.html', 'utf8');
const notesHTML = fs.readFileSync('public/notes.html', 'utf8');

 


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
      res.send(notes);
      res.end();
})

app.post('/api/notes', function (req, res) {
    console.log(req.body)
      fs.appendFileSync('db/db.json',(JSON.stringify(req.body)));
    console.log('posted to api/notes')
  res.end();
})

const server = app.listen(PORT, (error) => {
    if (error) return console.log(`Error: ${error}`);
    console.log("Connected to PORT: " + PORT);

});

//return notes html


