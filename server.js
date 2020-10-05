const express = require('express');
const app = express();
const port = 3000;

app.use('/', express.static('public'));

const budget = {
    myBudget: [
{
    title: 'Eat Out',
    budget: 30
},
{
    title: 'Rent',
    budget: 350
},
{
    title: 'Groceries',
    budget: 90
}

]
};

app.get('/hello', (req, res) => {
    res.send('Hello World!');
});

 
app.get('/budget', (req, res) => {
    res.send(budget);
});

 
app.get('/budget', (req, res) => {
    fetch("./budget.json")
    .then(function(res){
        res.send(myBudget)
    })
   
});

app.listen(port, () => {
    console.log('Example app listening at http://localhost:${3000}')
});
app.get("budget.json", function(json){
    console.log(myBudget);
});
