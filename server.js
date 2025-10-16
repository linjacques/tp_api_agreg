import express from 'express';
import Pipeline from './src/pipeline.js';

const app = express();

app.get('/TP', (req, res) => {
  res.send('de jacques ');
});

// On instancie Pipeline en lui passant l'app Express
new Pipeline(app);

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
