<template>
  <div id="league">
      <h1>NA LCS {{season}} {{split}}</h1>
      <div id="standings">Tabelle</div>
      <table>
          <thead>
              <tr>
                  <td>Platz</td>
                  <td>Team</td>
                  <td>Name</td>
                  <td>Punkte</td>
              </tr>
          </thead>
          <tbody>
              <tr v-for="(t, ix) in sortedTeams">
                  <td>{{ix+1}}</td>
                  <td><img src="" height="30px" width="30px"></td>
                  <td>{{t.name}}</td>
                  <td>{{t.points}}</td>
              </tr>
          </tbody>
      </table>
      <div id="fixtures">Spielplan</div>
      <div v-for="f in fixtures">
          <div v-for="d in f.matches">{{f.matchday}} - {{d.date}} - {{d.teamnameA}} vs {{d.teamnameB}} - {{d.result}} </div>
          <hr/>
      </div>
  </div>
</template>

<script>
export default {
    name: 'league',
    methods: {
        test() {
            console.log(services.data.test());

        }
    },
    computed: {
        sortedTeams: function() {
            return this.teams.sort((a, b) => {return a.points < b.points });
        }
    },
    created () {
        this.league = window.services.data.getLeagues(0);
        this.teams = window.services.data.getTeamsByLeague(0);
        window.services.data.getFixtures(null, (fixtures) => {
            fixtures.forEach(f => {
                f.matches.forEach(m => {
                    let a = window.services.data.getTeam(m.teams[0]);
                    let b = window.services.data.getTeam(m.teams[1]);
                    m["teamnameA"] = a.tag;
                    m["teamnameB"] = b.tag;
                });
            });
            this.fixtures = fixtures;
        });  
    },
    data() {
        return {
            msg: 'league',
            season: 2018,
            split: 'Spring Split',
            league: null,
            teams: [],
            fixtures: []
        }
    }
}
</script>

<style>

</style>
