<template>
    <div id="home">
        <div>Hallo {{user.name}}</div>
        <div v-if="currentGame">Im Spiel {{currentGame.name}}</div>
        <div v-if="!currentGame">
            <div class="clickable" v-for="g in games" v-on:click="continueGame(g.id)">
                {{g.name}} (
                <span v-for="(p, ix) in g.participants">
                    {{getName(p)}}<span v-if="ix < g.participants.length-1">,</span>
                </span>
                )
            </div>
            <div class="clickable" v-on:click="showNewGame = !showNewGame">
                Neues Spiel
            </div>
            <div v-show="showNewGame">
                <div>
                    <input type="text" v-model="newGame.name" placeholder="Spielname eingeben" />
                    <select v-model="newGame.participants" multiple>
                    <option v-for="u in allUsers" v-bind:value="u.id">{{u.name}}</option>
                </select>
                </div>
                <div class="button clickable" v-on:click.prevent="createGame">Spiel erstellen</div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'home',
        created() {
            this.allUsers = window.services.data.getUsers();
            this.user = window.services.data.getCurrentUser();
            this.games = window.services.data.getGames();
            this.newGame = window.services.data.getNewGame();

        },
        methods: {
            test() {

            },
            getName(id) {
                return window.services.data.getUsers(id).name;
            },
            continueGame(id) {
                window.services.data.setCurrentGame(id);
                this.currentGame = window.services.data.getCurrentGame(); 
            },
            createGame() {
                let id = window.services.data.setGame(this.newGame);
                window.services.data.setCurrentGame(id);
                this.games = window.services.data.getGames();
                this.showNewGame = false;
                this.newGame = window.services.data.getNewGame();
            }
        },
        data() {
            return {
                msg: 'Home',
                user: null,
                allUsers: [],
                games: [],
                showNewGame: false,
                newGame: null,
                currentGame: null
            }
        }
    }

</script>

<style></style>