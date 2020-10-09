//Budget API

const express = require('express');
const cors = require('cors');
const app = express();
const port = 3000;

app.use(cors());

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

 
app.get('/budget', (req, res) => {
    res.use(budget);
});

 
app.get('/budget', (req, res) => {
    fetch("./budget.json")
    .then(function(res){
        res.send(myBudget)
    })
   
});

app.listen(port, () => {
    console.log('API served at http://localhost:${3000}')
});
app.get("budget.json", function(json){
    console.log(myBudget);
});
