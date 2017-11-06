<template>
  <div id="finance">
      <h1>Finanzen</h1>
      <span> {{team.name}}</span>
      <div>
          <span class="subheader">Spieler Verträge</span>
          <div v-for="c in playerContracts">{{c.playername}} - {{c.wage}}</div>
        </div>
      <div>
          <span class="subheader">Sponsors:</span>
          <div v-for="s in sponsors">{{s.name}} - {{s.amount}} pro Monat - bis {{s.expiry}}</div>
      </div>
      <div>
          <span class="subheader">Übersicht:</span>
          <div>Sponsoring: {{finances.income.sponsoring}}</div>
      </div>
      <div id="total">aktuelles Vermögen: {{finances.total}}</div>
  </div>
</template>

<script>
export default {
    name: 'finance',
    created() {
        this.team = window.services.data.getTeam(0);
        this.finances = window.services.data.getFinancesByTeam(0)[0];
        this.contracts = window.services.data.getContractsByTeam(0);
        this.sponsors = window.services.data.getSponsorsByTeam(0);
        
    },
    beforeMount() {
        //
        console.log('beforemount');
        this.finances.income["sponsoring"] = this.sponsors.reduce((val, s) => { return val += s.amount }, 0);
        console.log(this.finances.income);
        this.playerContracts = this.contracts.filter(e => e.type == "player");
        this.playerContracts.forEach(c => {
            c.playername = window.services.data.getPlayers(c.player).tag;
        });
    },
    data() {
        return {
            msg: 'finance',
            team: null,
            finances: null,
            contracts: null,
            sponsors: null
        }
    }
}
</script>

<style>

</style>
