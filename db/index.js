const teams = [
  {id: 1, sport: 'NFL', team: 'Miami Dolphins', stadium: 'Hard Rock Stadium', mascot: 'T.D'},
  {id: 2, sport: 'College Basketball/Football', team: 'Syracuse Orange', stadium: 'Carrier Dome', mascot: 'Otto'},
  {id: 3, sport: 'NBA', team: 'Miami Heat', stadium: 'AmericanAirlines Arena', mascot: 'Burnie'},
  {id: 4, sport: 'MLB', team: 'Boston Red Sox', stadium: 'Fenway Park', mascot: 'None'}
]

const getTeams = () => {
  return teams;
}

const getTeam = (id) => {
  return teams.find(team => team.id === id * 1)
}

module.exports = {
  getTeams,
  getTeam
}
