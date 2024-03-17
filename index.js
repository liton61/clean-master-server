const express = require('express');
const app = express();
const cors = require('cors');
const port = process.env.PORT || 5000;

// middleware
app.use(express.json());
app.use(cors());

app.get('/', (req, res) => {
    res.send('Your server is Ready!')
})

app.listen(port, () => {
    console.log(`Clean Master is on port ${port}`)
})