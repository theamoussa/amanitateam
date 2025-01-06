const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;

// Middleware
app.use(bodyParser.json());

let vacationData = {
  'Thea': { days: 0, team: 'Italy' },
  'Isabella': { days: 0, team: 'Italy' },
  'LA': { days: 0, team: 'US' },
  'Linda': { days: 0, team: 'US' },
  'Talia': { days: 0, team: 'US' }
};

// GET request to fetch vacation data
app.get('/getVacationData', (req, res) => {
  res.json(vacationData);
});

// POST request to save vacation data
app.post('/saveVacationData', (req, res) => {
  const updatedData = req.body;
  vacationData = { ...vacationData, ...updatedData };  // Update vacation data
  res.json({ message: 'Data updated successfully', data: vacationData });
});

// Start server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
