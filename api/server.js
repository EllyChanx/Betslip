const express = require('express');
const app = express();
const cors = require('cors');

app.use(cors());

const rawData = require('./data/data.json')
const allBets = rawData.bets

function filterOdds (odds, isMoreThanTwo) {
  return odds.filter(o => isMoreThanTwo ? o.oddsDecimal > 2 : o.oddsDecimal < 2)
}

app.get('/decimalOddsMoreThanTwo', (req, res) => {
  const allowedBets = allBets.filter(b => filterOdds(b.odds, true).length)
  res.send(allowedBets)
});

app.get('/decimalOddsLessThanTwo', (req, res) => {
  const allowedBets = allBets.filter(b => filterOdds(b.odds, false).length)
  res.send(allowedBets)
});

app.listen(4000, () => {
  console.log('Example app listening on port 4000!');
});