const express = require('express');
const port  = 5000;
const app = express();

const ideas = [
    {
        id:1,
        text: "Positive NewsLetter, a newsletter that only shares positive, uplifting news",
        tag: "Technology",
        username:"TonyStark",
        date: "2022-01-02",
    },
    {
        id: 2,
        text: "Milk cartons that turns a different color the color that your milk is getting",
        tag: "Invention",
        username: "SteveRogers",
        date: "2022-01-02",

    },
    {
        id: 3,
        text: "ATM location app which lets you know where the closest Atm is and if it is in service",
        tag: "Software",
        username: "BruceBanner",
        date: "2022-01-02",
    },
]


app.get('/', (req, res)=> {
    res.json({ message: 'welcome to the Random Ideas API' })
})

app.get('/api/ideas', (req, res)=> {
    res.json({ success: true, data: ideas })
})

// get single idea
app.get('/api/ideas:id', (req, res)=> {
    const idea = ideas.find((idea) => (idea.id = +req.params.id)); 
    if(!ideas) {
        res.status(404).json({ success:false, error: 'Resource not found' })
    }
    res.json({ success: true, data: idea });
})

app.listen(port, console.log(`Server listening on port ${port}`))
