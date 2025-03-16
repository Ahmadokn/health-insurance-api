const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors'); 
const { calculateRiskPoints, determineRiskCategory } = require('./riskCalculator');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use(cors()); // to avoid CORS issues if your front-end is on a different port

app.post('/api/calculateRisk', (req, res) => {
  try {
    // Extract data from request body
    const { age, heightCm, weightKg, bpCategory, diseases } = req.body;

    // Basic server-side validation
    if (age == null || heightCm == null || weightKg == null || !bpCategory) {
      return res.status(400).json({ error: 'Missing required fields' });
    }

    // Calculate
    const totalPoints = calculateRiskPoints({ age, heightCm, weightKg, bpCategory, diseases });
    const riskCategory = determineRiskCategory(totalPoints);

    // Respond with JSON
    return res.json({ totalPoints, riskCategory });
  } catch (err) {
    return res.status(500).json({ error: err.message });
  }
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});