/* eslint-disable */

const app = require('express').Router();
const db = require('../db');

module.exports = app;

app.get('/', (req, res, next) => {
  res.render('teams', {title: 'Favorite Teams', teams: db.getTeams() })
})

app.get('/:id', (req, res, next) => {
  const team = db.getTeam(req.params.id)
  res.render('team', {title: `Team: ${team.team}`, team})
})
