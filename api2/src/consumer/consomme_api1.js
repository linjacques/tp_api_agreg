import express from 'express';
import axios from 'axios';

const app = express();
const PORT = 4000;

app.get('/read-pipeline', async (req, res) => {
  try {
    const response = await axios.get('http://localhost:3001/pipeline');
    const data = response.data;

    res.status(200).json({
      message: 'Données reçues depuis l’autre API',
      data
    });
  } catch (error) {
    console.error('[ERROR] /read-pipeline ->', error.message);
    res.status(500).json({ error: 'Erreur lors de la lecture de l’autre API.' });
  }
});

app.listen(PORT, () => {
  console.log(` Consumer API running on http://localhost:${PORT}`);
});
