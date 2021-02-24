<template>
    <v-app>
        <v-content>
            <v-container>Hello world</v-container>
        </v-content>
    </v-app>
</template>
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
        // this is component lifecycle event
    }
}
</script>
