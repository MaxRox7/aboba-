const express = require('express')
const app = express()
const port = 3000
const bodyParser = require('body-parser')
const urlencodedParser = bodyParser.urlencoded({ extended: false })
const engines = require('consolidate');
const token_from_server = 45678


app.engine('html', engines.mustache);
app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');


app.get('/itsme', (req, res) => {
  res.render("index");
  
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
}),

app.get('/hello', (req, res) => {
  res.send('Hello world!')

}),



app.post('/itsme', urlencodedParser, (req,res) => {
if (!req.body) return res.sendStatus(400);
const obj = JSON.parse(JSON.stringify(req.body)); 
console.log(obj); 
res.render('itsme-passed', {data: req.body})

})
