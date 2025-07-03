const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

// TEST API
app.get('/', (req, res) => {
  console.log('✅ GET / appelé');
  res.send('Backend opérationnel');
});

app.post('/api/rendezvous', (req, res) => {
  console.log('📥 POST reçu avec données :', req.body);
  res.status(201).json({ message: 'Rendez-vous enregistré (fake)' });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`✅ Serveur lancé sur le port ${PORT}`));
