<template>
    <div id="app">
        <div id="nav">
            <router-link to="/">MENU</router-link>
        </div>
        <router-view/>
    </div>
</template>

<style lang="scss">
#app {
    font-family: "Avenir", Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
}
#nav {
    padding: 30px;
    a {
        font-weight: bold;
        color: #2c3e50;
        &.router-link-exact-active {
            color: #42b983;
        }
    }
}
</style>
<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
// import HelloWorld from '@/components/HelloWorld.vue'; // @ is an alias to /src
// @Component({
//     components: {
//         HelloWorld,
//     },
// })
export default class Menu extends Vue {
    public mounted() {
        console.log(this);
    }
}
</script>