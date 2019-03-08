const express = require('express');
const cors = require('cors');

const server = express();

// parse request into json
server.use(express.json());
server.use(cors());

server.post('/save_todo', (req, res) => {
  const { name, content } = req.body;

  res.send(`Your name: ${name} and content: ${content}`);
});

server.listen(3003, () => console.log('Server listening on port 3003'));
