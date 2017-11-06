<template>
    <div id="header">
        <div>
            <img src="../assets/logo.png" class="logo">
            <h1>{{title}}</h1>
            <div id="interface">
                <span id="date">{{date}}</span>
                <a href="#">Weiter<i class="material-icons">keyboard_arrow_right</i></a>
            </div>
        </div>
        <app-nav></app-nav>
        
    </div>
</template>

<script>

import navComponent from './nav.vue'

export default {
    name: 'header',
    components:{
        'app-nav': navComponent
    },
    data() {
        return {
            title: 'LCS Manager',
            date: '01.01.2018'
        };
    }
}
</script>

<style src="./style/default.css"></style>
<style src="./style/header.css"></style   
