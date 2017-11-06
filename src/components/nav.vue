<template>
    <div id="nav">
        <ul>
            <li><router-link to="/home">Home</router-link></li>
            <li><router-link to="/team">Team</router-link></li>
            <li><router-link to="/transfers">Transfers</router-link></li>
            <li><router-link to="/finance">Finanzen</router-link></li>
            <li><router-link to="/league">Liga</router-link></li>
        </ul>
    </div>
</template>

<script>
export default {
    name: 'nav',
    data() {
        return {
            msg: 'NAV!'
        }
    }
}
</script>

<style src="./style/default.css"></style>
