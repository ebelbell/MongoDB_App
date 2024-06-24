const express = require('express')
const app = express()

// console screen
app.listen(4000, () => {
    console.log('Server is running on port 4000');
})

// reponse screen
// client = request, response from the server = response
app.get('/', (req, res) => {
    res.send("Hello World Update");
});