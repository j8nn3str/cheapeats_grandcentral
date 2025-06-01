import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';

const app = express();
const PORT = 3000;

// For ES modules __dirname workaround
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Serve index.html from /docs
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../docs/index.html'));
});

// Serve ubereats.json from /docs
app.get('/ubereats.json', (req, res) => {
  res.sendFile(path.join(__dirname, '../docs/ubereats.json'));
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});