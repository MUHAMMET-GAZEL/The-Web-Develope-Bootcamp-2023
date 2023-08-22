const express = require('express');
const app = express();

app.set('view engine', 'ejs');//.set accepts two properties ('view engine','ejs') 
//ejs assumes all of our ejs files exist in diroctory named views , so we gotta create it and put all of our html files inside but with the extension .ejs  
app.get('/', (req, res) => {

    res.render('home.ejs');//re.render is used to send back a file (a template) while res.send is used just to send back a string
})
app.get('/random', (req, res) => {
    const num1 = Math.floor(Math.random() * 10) + 1;
    const num2 = Math.floor(Math.random() * 10) + 1;
    res.render('random.ejs', { rand1: num1, rand2: num2 }) // so we can pass second argument to res.render and it must be an object    
    //here the thing that we can use in our ejs file is rand1 and rand2
})
app.get('/r/:subreddit', (req, res) => {
    const { subreddit } = req.params;// = const subreddit = req.params.subreddit;
    res.render('subreddit', { subreddit });
})
app.listen(3000, () => {
    console.log('LISTENING ON PORT 3000');
})