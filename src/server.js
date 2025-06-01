import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';

const app = express();
const PORT = 3000;

// For ES modules __dirname workaround
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Serve index.html from /site
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../site/index.html'));
});

// Serve ubereats.json from /site
app.get('/ubereats.json', (req, res) => {
  res.sendFile(path.join(__dirname, '../site/ubereats.json'));
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});