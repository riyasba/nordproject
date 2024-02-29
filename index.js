const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const PORT = 3000;

// Parse incoming request bodies in a middleware before your handlers, available under the req.body property.
app.use(bodyParser.json());

// POST request handler
app.post('/api/done', (req, res) => {
    const { name, age } = req.body; // Assuming JSON data like { "name": "John", "age": 30 }

    // Do something with the data, for example, log it
    console.log(`Received data: Name - ${name}, Age - ${age}`);

    // Respond with a confirmation message
    res.json({ message: name, age });
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

