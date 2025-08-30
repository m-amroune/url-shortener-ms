require('dotenv').config();
const express = require('express');
const cors = require('cors');
const app = express();

// Basic Configuration
const port = process.env.PORT || 3000;

app.use(cors());

app.use('/public', express.static(`${process.cwd()}/public`));

app.get('/', function(req, res) {
  res.sendFile(process.cwd() + '/views/index.html');
});

// Your first API endpoint
app.get('/api/hello', function(req, res) {
  res.json({ greeting: 'hello API' });
});

app.use(express.urlencoded({ extended: false }));

app.post('/api/shorturl', (req, res) => {
  const originalUrl = req.body.url;

  res.json({
    original_url: originalUrl,
    short_url: 1
  });
});


app.listen(port, function() {
  console.log(`Listening on port ${port}`);
});
