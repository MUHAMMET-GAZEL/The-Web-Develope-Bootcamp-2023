const express = require("express");

const app = express();

/*
//
app.use((req, res) => {
    console.log("WE GOT A NEW REQUEST!!!");
    //res.send("HELLO, WE GOT UR REQUEST, THAT IS A RESPONSE!!");
    res.send({ color: 'red' });
});
*/

app.get('/', (req, res) => {
    res.send('This is the home page.');
})
app.get('/r/:subreddit', (req, res) => {
    const { subreddit } = req.params;
    //The expression const { subreddit } = req.params; is an example of object destructuring in JavaScript.
    // It's a way to extract properties from an object and assign them to variables with the same names as the properties.
    res.send(`<h1>Browsing the ${subreddit} subreddit :</h1>`);
})
app.get('/r/:subreddit/:postId', (req, res) => {
    const { subreddit, postId } = req.params;
    res.send(`<h1>Viewing Post ID : ${postId} on the ${subreddit} subreddit :</h1>`);
})
app.post('/cats', (req, res) => {
    res.send('POST REQUEST TO/cats ,THIS IS DIFFERENT FROM A GET REQUEST!')
})
app.get('/cats', (req, res) => {
    res.send('MEOW!!');
})

app.get('/dogs', (req, res) => {
    res.send('WOOF!');
})

app.get('*', (req, res) => {
    res.send('I DO NOT KNOW THAT PATH!!')
})

app.listen(3000, () => {
    console.log("LISTENING ON PORT 3000");
});
