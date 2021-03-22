<template>
   <v-app>
    <v-content>
        <v-btn elevation="3">FileBackUP_SVN</v-btn>
        <v-btn elevation="3">KAFKA Produce</v-btn>
        <v-btn elevation="3">KAFKA Consume</v-btn>
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
        console.log(this);
        // this is component lifecycle event
    }
}
</script>
